<?php

declare(strict_types=1);

namespace Outerweb\FilamentImageLibrary\Forms\Components;

use Closure;
use Exception;
use Filament\Actions\Action;
use Filament\Forms\Components\Builder\Block;
use Filament\Forms\Components\Field;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Component;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Filament\Support\Enums\Width;
use Filament\Support\Icons\Heroicon;
use Illuminate\Contracts\Database\Eloquent\Builder as BuilderContract;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use LogicException;
use Outerweb\FilamentImageLibrary\ImageLibraryPlugin;
use Outerweb\ImageLibrary\Contracts\ConfiguresBreakpoints;
use Outerweb\ImageLibrary\Entities\CropData;
use Outerweb\ImageLibrary\Entities\ImageContext;
use Outerweb\ImageLibrary\Facades\ImageLibrary as ImageLibraryFacade;
use Outerweb\ImageLibrary\Models\Image;
use Outerweb\ImageLibrary\Models\SourceImage;

class ImagePicker extends Field
{
    protected string $view = 'filament-image-library::forms.components.image-picker';

    protected array|string|Closure|null $imageContexts = null;

    protected array|Closure|null $customPropertiesSchema = null;

    protected bool|Closure $sortable = true;

    protected ?Closure $modifyQueryUsing = null;

    protected array|Closure $usingCustomProperties = [];

    protected string|Closure|null $relationship = null;

    public function setUp(): void
    {
        $this->belowContent(Schema::center($this->getFieldActions()));

        $this->afterStateHydrated(function (Set $set): void {
            $record = $this->getRecord();
            $relationshipName = $this->getRelationship();

            if ($record->hasAttribute($relationshipName) || (! $record->isRelation($relationshipName))) {
                throw new LogicException("The relationship [{$relationshipName}] does not exist on the model [{$this->getModel()}].");
            }

            $query = $record->{$relationshipName}()
                ->ordered()
                ->when(! $this->getAllowsMultiple(), function (Builder $query) {
                    $query->limit(1);
                });

            $query = $this->modifyQuery($query);

            $images = $query->get()
                ->map(function (Image $image) {
                    return $this->mapModelToState($image);
                })
                ->all();

            $imageContextsCount = count($this->getImageContexts());

            $images = collect($images)->groupBy('filament_uuid')
                ->map(function (Collection $imagesGroup) use ($imageContextsCount): Collection {
                    $imagesGroupCount = $imagesGroup->count();

                    if ($imagesGroupCount === $imageContextsCount) {
                        return $imagesGroup;
                    }

                    if ($imagesGroupCount > $imageContextsCount) {
                        $contextKeys = collect($this->getImageContexts())
                            ->map(fn (ImageContext $imageContext) => $imageContext->getKey());

                        return $imagesGroup->filter(fn (array $image): bool => $contextKeys->contains($image['context']));
                    }

                    $existingContexts = collect($imagesGroup)->pluck('context')->all();
                    $missingContexts = collect($this->getImageContexts())
                        ->filter(fn (ImageContext $imageContext) => ! in_array($imageContext->getKey(), $existingContexts))
                        ->all();

                    foreach ($missingContexts as $missingContext) {
                        $imageToDuplicate = $imagesGroup[0];

                        $newImage = array_merge($imageToDuplicate, [
                            'context' => $missingContext->getKey(),
                            'crop_data' => [],
                        ]);

                        unset($newImage[ImageLibraryFacade::getImageModelKeyName()]);

                        $imagesGroup->push($newImage);
                    }

                    return $imagesGroup;
                })
                ->flatten(1)
                ->all();

            $set(
                $this->getStatePath(false),
                $images,
            );
        });

        $this->dehydrated(function (): bool {
            return $this->getContainer()->getParentComponent() instanceof Block;
        });

        $this->saveRelationshipsUsing(function (?array $state): void {
            $this->saveImages($state ?? []);
        });

        $this->registerActions([
            $this->sortAction(),
            $this->editAction(),
            $this->cropAction(),
            $this->detachAction(),
        ]);
    }

    public function modifyQuery(BuilderContract $query): BuilderContract
    {
        if (! is_null($this->modifyQueryUsing)) {
            $query = $this->evaluate(
                $this->modifyQueryUsing,
                [
                    'query' => $query,
                    'record' => $this->getRecord(),
                    'relationshipName' => $this->getRelationship(),
                ]
            );
        }

        $customProperties = $this->getCustomProperties();

        if (is_iterable($customProperties)) {
            $query->where(function (BuilderContract $query) use ($customProperties): void {
                foreach ($customProperties as $key => $value) {
                    $query->where("custom_properties->{$key}", $value);
                }
            });
        }

        return $query;
    }

    public function saveImages(array $state): array
    {
        $images = [];

        try {
            DB::beginTransaction();

            foreach ($state as $imageData) {
                $imageData = collect($imageData)
                    ->undot()
                    ->all();
                $imageKey = $imageData[ImageLibraryFacade::getImageModelKeyName()] ?? null;
                $sourceImageKey = $imageData['source_image_key'] ?? null;

                $uuid = $imageData['filament_uuid'] ?? null;
                $imageData['custom_properties'] = array_merge(
                    $imageData['custom_properties'] ?? [],
                    ['filament_uuid' => $uuid],
                    $this->getCustomProperties() ?? []
                );

                unset(
                    $imageData[ImageLibraryFacade::getImageModelKeyName()],
                    $imageData['source_image'],
                    $imageData['filament_uuid'],
                    $imageData['source_image_key'],
                );

                if (! is_null($imageKey)) {
                    $image = ImageLibraryFacade::getImageModel()::query()
                        ->where(ImageLibraryFacade::getImageModelKeyName(), $imageKey)
                        ->firstOrFail();

                    $image->fill($imageData);

                    if ($image->isDirty()) {
                        $image->save();
                    }

                    $images[] = $image;

                    continue;
                }

                $sourceImage = ImageLibraryFacade::getSourceImageModel()::query()
                    ->where(ImageLibraryFacade::getSourceImageModelKeyName(), $sourceImageKey)
                    ->first();

                /** @phpstan-ignore-next-line */
                $images[] = $this->getRecord()->attachImage(
                    $sourceImage,
                    $imageData,
                    $this->getRelationship()
                );
            }

            $record = $this->getRecord();
            $relationshipName = $this->getRelationship();

            $query = $record->{$relationshipName}()->whereNotIn(
                ImageLibraryFacade::getImageModelKeyName(),
                collect($images)->map(fn (Image $image) => $image->getKey())->all(),
            );

            $query = $this->modifyQuery($query);

            $query
                ->cursor()
                ->each(fn (Image $image): ?bool => $image->delete());

            DB::commit();
        } catch (Exception $exception) {
            DB::rollBack();

            throw $exception;
        }

        return collect($images)
            ->map(function (Image $image) {
                return $this->mapModelToState($image);
            })
            ->all();
    }

    public function usingCustomProperties(array|Closure $properties): static
    {
        $this->usingCustomProperties = $properties;

        return $this;
    }

    public function getCustomProperties(): ?array
    {
        return $this->evaluate($this->usingCustomProperties) ?? [];
    }

    public function getRenderableImages(): array
    {
        return collect($this->getState())
            ->unique('filament_uuid')
            ->sortBy(ImageLibraryFacade::getImageModelSortOrderColumnName())
            ->all();
    }

    public function sortable(bool|Closure $condition = true): static
    {
        $this->sortable = $condition;

        return $this;
    }

    public function getSortable(): bool
    {
        return $this->evaluate($this->sortable);
    }

    public function customPropertiesSchema(array|Closure|null $schema): static
    {
        $this->customPropertiesSchema = $schema;

        return $this;
    }

    public function getCustomPropertiesSchema(): ?array
    {
        return $this->evaluate($this->customPropertiesSchema);
    }

    public function relationship(string|Closure|null $relationship): static
    {
        $this->relationship = $relationship;

        return $this;
    }

    public function getRelationship(): string
    {
        return $this->evaluate($this->relationship) ?? $this->getName();
    }

    public function getState(): ?array
    {
        return Arr::wrap(parent::getState() ?? []);
    }

    public function getAllowsMultiple(): bool
    {
        return collect($this->getImageContexts())
            ->some(fn (ImageContext $imageContext): bool => $imageContext->getAllowsMultiple());
    }

    public function imageContext(array|string|ImageContext|Closure $imageContext): static
    {
        $this->imageContexts = $imageContext;

        return $this;
    }

    /**
     * @return array<ImageContext>
     */
    public function getImageContexts(): array
    {
        $imageContexts = $this->evaluate($this->imageContexts);

        if (is_string($imageContexts)) {
            $imageContexts = [ImageLibraryFacade::getImageContextByKey($imageContexts)];
        } elseif ($imageContexts instanceof ImageContext) {
            $imageContexts = [$imageContexts];
        } elseif (is_array($imageContexts)) {
            $imageContexts = array_map(function ($imageContext) {
                if (is_string($imageContext)) {
                    return ImageLibraryFacade::getImageContextByKey($imageContext);
                }

                if ($imageContext instanceof ImageContext) {
                    return $imageContext;
                }

                throw new LogicException('Invalid image context provided to ImagePicker component.');
            }, $imageContexts);
        } else {
            throw new LogicException('Invalid image context(s) provided to ImagePicker component.');
        }

        return $imageContexts;
    }

    public function getUsedSourceImages(): array
    {
        $images = $this->getState() ?? [];

        return ImageLibraryFacade::getSourceImageModel()::query()
            ->whereIn(ImageLibraryFacade::getSourceImageModelKeyName(), array_map(fn (array $image) => $image['source_image_key'], $images))
            ->get()
            ->all();
    }

    public function sortAction(): Action
    {
        return Action::make('sort')
            ->action(function (array $arguments, Set $set, self $component): void {
                $uuid = $arguments['uuid'];
                $position = $arguments['position'];

                $uniqueState = collect($component->getState())
                    ->unique('filament_uuid')
                    ->values();

                $itemToMove = $uniqueState->firstWhere('filament_uuid', $uuid);

                if (! $itemToMove) {
                    return;
                }

                $uniqueState = $uniqueState->reject(function ($item) use ($uuid) {
                    return $item['filament_uuid'] === $uuid;
                })->values();

                $uniqueState->splice($position, 0, [$itemToMove]);

                $state = collect($component->getState())
                    ->map(function ($item) use ($uniqueState) {
                        $index = $uniqueState->search(function ($uniqueItem) use ($item) {
                            return $uniqueItem['filament_uuid'] === $item['filament_uuid'];
                        });

                        $item[ImageLibraryFacade::getImageModelSortOrderColumnName()] = $index + 1;

                        return $item;
                    })
                    ->sortBy(ImageLibraryFacade::getImageModelSortOrderColumnName())
                    ->all();

                $set(
                    $component->getStatePath(false),
                    $state,
                );
            });
    }

    public function editAction(): Action
    {
        return Action::make('edit')
            ->iconButton()
            ->icon(Heroicon::OutlinedPencilSquare)
            ->color('gray')
            ->tooltip(__('filament-image-library::translations.tooltips.edit'))
            ->fillForm(function (array $arguments, self $component): array {
                return collect($component->getState())
                    ->where('filament_uuid', $arguments['uuid'])
                    ->mapWithKeys(function ($item) {
                        return [$item['context'] => $item];
                    })
                    ->all();
            })
            ->schema(function (array $arguments, self $component): array {
                $data = collect($component->getState())
                    ->where('filament_uuid', $arguments['uuid']);

                return [
                    Tabs::make()
                        ->tabs(
                            collect($component->getImageContexts())
                                ->map(function (ImageContext $imageContext) use ($data, $component): Tab {
                                    $altTextField = TextInput::make($imageContext->getKey().'.alt_text') /** @phpstan-ignore method.notFound */
                                        ->label(__('filament-image-library::translations.forms.labels.alt_text'))
                                        ->helperText(__('filament-image-library::translations.forms.helper_texts.alt_text'))
                                        ->nullable()
                                        ->maxLength(255);

                                    if (ImageLibraryPlugin::get()->usesTranslatablePlugin()) {
                                        $altTextField = $altTextField->translatable(
                                            modifyLocalizedFieldUsing: function (TextInput $field, string $locale) use ($data) {
                                                $field->placeholder($data['source_image']['alt_text'][$locale] ?? null);
                                            }
                                        );
                                    }

                                    return Tab::make($imageContext->getKey())
                                        ->label($imageContext->getLabel())
                                        ->schema([
                                            $altTextField,
                                            ...collect($component->getCustomPropertiesSchema() ?? [])
                                                ->map(function (Component $component) use ($imageContext) {
                                                    return $this->prepareCustomPropertyFieldRecursively($component, $imageContext->getKey());
                                                })
                                                ->all(),
                                        ]);
                                })
                                ->all()
                        ),
                ];
            })
            ->action(function (array $arguments, array $data, Set $set, self $component): void {
                $imageUuid = $arguments['uuid'];

                $state = collect($component->getState())
                    ->map(function ($item) use ($imageUuid, $data) {
                        if ($item['filament_uuid'] !== $imageUuid) {
                            return $item;
                        }

                        $imageData = $data[$item['context']] ?? [];

                        return array_merge(
                            $item,
                            $imageData,
                        );
                    })
                    ->all();

                $set(
                    $this->getStatePath(false),
                    $state,
                );
            });
    }

    public function cropAction(): Action
    {
        return Action::make('crop')
            ->iconButton()
            ->icon(Heroicon::OutlinedArrowsPointingOut)
            ->color('gray')
            ->tooltip(__('filament-image-library::translations.tooltips.crop'))
            ->modalWidth(Width::Full)
            ->modalSubmitActionLabel(__('filament-image-library::translations.actions.crop'))
            ->fillForm(function (array $arguments, self $component): array {
                return collect($component->getState())
                    ->where('filament_uuid', $arguments['uuid'])
                    ->mapWithKeys(function ($item) {
                        return [$item['context'] => $item];
                    })
                    ->all();
            })
            ->schema(function (array $arguments, self $component): array {
                $index = $arguments['uuid'];
                $imageData = collect($component->getState())
                    ->firstWhere('filament_uuid', $index);

                $sourceImage = ImageLibraryFacade::getSourceImageModel()::query()
                    ->where(ImageLibraryFacade::getSourceImageModelKeyName(), $imageData['source_image_key'])
                    ->firstOrFail();

                return [
                    Tabs::make('contexts')
                        ->tabs(
                            collect($component->getImageContexts())
                                ->map(function (ImageContext $imageContext) use ($sourceImage) {
                                    return Tab::make($imageContext->getKey())
                                        ->label($imageContext->getLabel())
                                        ->schema([
                                            $imageContext->getUseBreakpoints()
                                                ? Tabs::make('breakpoints')
                                                    ->contained(false)
                                                    ->tabs(
                                                        collect(ImageLibraryFacade::getBreakpointEnum()::sortedCases())
                                                            ->map(function (ConfiguresBreakpoints $breakpoint) use ($sourceImage, $imageContext) {
                                                                return Tab::make($breakpoint->value)
                                                                    ->label($breakpoint->getLabel())
                                                                    ->schema([
                                                                        ImageCropper::make($imageContext->getKey().'.crop_data.'.$breakpoint->value.'')
                                                                            ->sourceImage($sourceImage)
                                                                            ->aspectRatio($imageContext->getAspectRatio($breakpoint))
                                                                            ->required(),
                                                                    ]);
                                                            })
                                                            ->all()
                                                    )
                                                : ImageCropper::make($imageContext->getKey().'.crop_data.default')
                                                    ->sourceImage($sourceImage)
                                                    ->aspectRatio($imageContext->getAspectRatio())
                                                    ->required(),
                                        ]);
                                })
                                ->all()
                        )
                        ->columnSpanFull(),
                ];
            })
            ->action(function (array $arguments, array $data, Set $set, self $component): void {
                $imageUuid = $arguments['uuid'];

                $state = collect($component->getState())
                    ->map(function ($item) use ($imageUuid, $data) {
                        if ($item['filament_uuid'] !== $imageUuid) {
                            return $item;
                        }

                        $imageData = $data[$item['context']]['crop_data'] ?? [];

                        return array_merge(
                            $item,
                            [
                                'crop_data' => $imageData,
                            ],
                        );
                    })
                    ->all();

                $set(
                    $component->getStatePath(false),
                    $state,
                );
            });
    }

    public function detachAction(): Action
    {
        return Action::make('detach')
            ->iconButton()
            ->icon(Heroicon::OutlinedLinkSlash)
            ->color('danger')
            ->tooltip(__('filament-image-library::translations.tooltips.detach'))
            ->action(function (array $arguments, Set $set, self $component): void {
                $imageUuid = $arguments['uuid'];

                $state = collect($component->getState())
                    ->filter(function ($item) use ($imageUuid): bool {
                        return $item['filament_uuid'] !== $imageUuid;
                    })
                    ->all();

                $set(
                    $component->getStatePath(false),
                    $state,
                );
            });
    }

    public function modifyQueryUsing(Closure $callback): static
    {
        $this->modifyQueryUsing = $callback;

        return $this;
    }

    private function prepareCustomPropertyFieldRecursively(Component $component, string $imageContextKey): Component
    {
        if (is_a($component, Field::class)) {
            return $component
                ->getClone()
                ->statePath(Str::start($component->statePath, $imageContextKey.'.custom_properties.'));
        }

        return $component->childComponents(
            collect($component->childComponents['default'])
                ->map(fn (Component $childComponent) => $this->prepareCustomPropertyFieldRecursively($childComponent, $imageContextKey))
                ->all()
        );
    }

    private function getFieldActions(): array
    {
        return [
            Action::make('add_existing')
                ->label(__('filament-image-library::translations.actions.add_existing'))
                ->button()
                ->color('gray')
                ->icon(Heroicon::OutlinedChevronUpDown)
                ->modal()
                ->closeModalByClickingAway(true)
                ->modalSubmitActionLabel(__('filament-image-library::translations.actions.select'))
                ->modalWidth(Width::SevenExtraLarge)
                ->schema([
                    SourceImageSelect::make('source_images')
                        ->multiple(fn () => $this->getAllowsMultiple())
                        ->required()
                        ->hiddenLabel(),
                ])
                ->action(function (Action $action, $data, Set $set, self $component): void {
                    /** @var array<SourceImage> $sourceImages */
                    $sourceImages = Arr::wrap($data['source_images']['images'] ?? []);

                    $this->addSourceImages($sourceImages, $set, $component);

                    $action->success();
                }),
            Action::make('upload')
                ->label(__('filament-image-library::translations.actions.upload'))
                ->button()
                ->color('gray')
                ->icon(Heroicon::OutlinedCloudArrowUp)
                ->modal()
                ->closeModalByClickingAway(false)
                ->successNotificationTitle(function ($data) {
                    return trans_choice(
                        'filament-image-library::translations.notifications.upload.success',
                        is_array($data['source_images']) ? count($data['source_images']) : 1
                    );
                })
                ->modalWidth(Width::SevenExtraLarge)
                ->schema([
                    SourceImageUpload::make('source_images')
                        ->multiple(fn () => $this->getAllowsMultiple())
                        ->required()
                        ->hiddenLabel(),
                ])
                ->action(function (Action $action, $data, Set $set, self $component): void {
                    /** @var array<SourceImage> $sourceImages */
                    $sourceImages = Arr::wrap($data['source_images'] ?? []);

                    $this->addSourceImages($sourceImages, $set, $component);

                    $action->success();
                }),
        ];
    }

    /** @param array<SourceImage> $sourceImages */
    private function addSourceImages(array $sourceImages, Set $set, self $component): void
    {
        $state = $component->getState();

        foreach ($sourceImages as $sourceImage) {
            $filamentUuid = Str::uuid()->toString();

            foreach ($component->getImageContexts() as $imageContext) {
                $state[] = [
                    'source_image_key' => $sourceImage->getKey(),
                    'source_image' => [
                        'alt_text' => ImageLibraryPlugin::get()->usesTranslatablePlugin() ? $sourceImage->getTranslations('alt_text') : $sourceImage->alt_text,
                    ],
                    ImageLibraryFacade::getImageModelSortOrderColumnName() => count($state) + 1,
                    'context' => $imageContext->getKey(),
                    'alt_text' => [],
                    'crop_data' => [],
                    'custom_properties' => $component->getCustomProperties() ?? [],
                    'filament_uuid' => $filamentUuid,
                ];
            }
        }

        if (! $component->getAllowsMultiple()) {
            $state = [array_pop($state)];
        }

        $set(
            $component->getStatePath(false),
            $state,
        );
    }

    private function mapModelToState(Image $image): array
    {
        return [
            ImageLibraryFacade::getImageModelKeyName() => $image->getKey(),
            'source_image_key' => $image->sourceImage->getKey(),
            'source_image' => [
                'alt_text' => ImageLibraryPlugin::get()->usesTranslatablePlugin() ? $image->sourceImage->getTranslations('alt_text') : $image->sourceImage->alt_text,
            ],
            ImageLibraryFacade::getImageModelSortOrderColumnName() => $image->{ImageLibraryFacade::getImageModelSortOrderColumnName()},
            'context' => $image->context->getKey(),
            'alt_text' => $image->getOriginal('alt_text'),
            'crop_data' => collect($image->crop_data ?? [])
                ->map(function (CropData|array|null $cropData) {
                    if ($cropData instanceof CropData) {
                        return $cropData->toArray();
                    }

                    return $cropData;
                })
                ->all(),
            'custom_properties' => array_merge(
                $image->custom_properties ?? [],
                $this->getCustomProperties() ?? []
            ),
            'filament_uuid' => $image->custom_properties['filament_uuid'] ?? Str::uuid()->toString(),
        ];
    }
}
