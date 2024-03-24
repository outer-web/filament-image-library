<?php

namespace Outerweb\FilamentImageLibrary\Filament\Forms\Components;

use Closure;
use Filament\Forms\Components\Actions\Action;
use Filament\Forms\Components\Component;
use Filament\Forms\Components\Field;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Tabs;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Notifications\Notification;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Outerweb\FilamentImageLibrary\Filament\Plugins\FilamentImageLibraryPlugin;
use Outerweb\FilamentImageLibrary\FilamentImageLibraryServiceProvider;
use Outerweb\FilamentTranslatableFields\Filament\Plugins\FilamentTranslatableFieldsPlugin;
use Outerweb\ImageLibrary\Entities\ConversionDefinition;
use Outerweb\ImageLibrary\Facades\ImageLibrary;
use Outerweb\ImageLibrary\Models\Image;
use Outerweb\ImageLibrary\Models\ImageConversion;

class ImageLibraryPicker extends Field
{
    protected string $view = 'filament-image-library::filament.forms.components.image-library-picker';

    protected bool|Closure $multiple = false;

    protected bool|Closure $disableUpload = false;

    protected bool|Closure $disableExisting = false;

    protected bool|Closure $disableImageEdit = false;

    protected bool|Closure $disableImageCrop = false;

    protected bool|Closure $disableOrderingImages = false;

    protected bool|Closure $disableImageDeselect = false;

    protected bool|Closure $disableImageEditBadges = false;

    protected int|string $existingItemsPerPage = 9;

    protected array|Closure $filteredConversionDefinitions = [];

    protected array|Closure $disabledConversionDefinitions = [];

    protected bool|Closure $enablePackageConversionDefinitions = false;

    protected string|Closure|null $relationOrderColumn = null;

    public function multiple(bool|Closure $multiple = true) : static
    {
        $this->multiple = $multiple;

        return $this;
    }

    public function disableUpload(bool|Closure $disablesUpload = true) : static
    {
        $this->disableUpload = $disablesUpload;

        return $this;
    }

    public function disableExisting(bool|Closure $disablesExisting = true) : static
    {
        $this->disableExisting = $disablesExisting;

        return $this;
    }

    public function disableImageEdit(bool|Closure $disablesImageEdit = true) : static
    {
        $this->disableImageEdit = $disablesImageEdit;

        return $this;
    }

    public function disableOrderingImages(bool|Closure $disablesOrderingImages = true) : static
    {
        $this->disableOrderingImages = $disablesOrderingImages;

        return $this;
    }

    public function disableImageCrop(bool|Closure $disablesImageCrop = true) : static
    {
        $this->disableImageCrop = $disablesImageCrop;

        return $this;
    }

    public function disableImageDeselect(bool|Closure $disablesImageDeselect = true) : static
    {
        $this->disableImageDeselect = $disablesImageDeselect;

        return $this;
    }

    public function disableImageEditBadges(bool|Closure $disablesImageEditBadges = true) : static
    {
        $this->disableImageEditBadges = $disablesImageEditBadges;

        return $this;
    }

    public function existingItemsPerPage(int $perPage) : static
    {
        $this->existingItemsPerPage = $perPage;

        return $this;
    }

    public function filteredConversionDefinitions(array|Closure $filteredConversionDefinitions) : static
    {
        $this->filteredConversionDefinitions = $filteredConversionDefinitions;

        return $this;
    }

    public function disabledConversionDefinitions(array|Closure $disabledConversionDefinitions) : static
    {
        $this->disabledConversionDefinitions = $disabledConversionDefinitions;

        return $this;
    }

    public function enablePackageConversionDefinitions(bool|Closure $enablePackageConversionDefinitions = true) : static
    {
        $this->enablePackageConversionDefinitions = $enablePackageConversionDefinitions;

        return $this;
    }

    public function relationOrderColumn(string|Closure $relationOrderColumn) : static
    {
        $this->relationOrderColumn = $relationOrderColumn;

        return $this;
    }

    public function getAllowsMultiple() : bool
    {
        return (bool) $this->evaluate($this->multiple);
    }

    public function getAllowsUpload() : bool
    {
        return ! (bool) $this->evaluate($this->disableUpload);
    }

    public function getAllowsExisting() : bool
    {
        return ! (bool) $this->evaluate($this->disableExisting);
    }

    public function getAllowsImageEdit() : bool
    {
        return ! (bool) $this->evaluate($this->disableImageEdit);
    }

    public function getAllowsOrderingImages() : bool
    {
        return ! (bool) $this->evaluate($this->disableOrderingImages) && $this->getAllowsMultiple();
    }

    public function getAllowsImageCrop() : bool
    {
        return ! (bool) $this->evaluate($this->disableImageCrop);
    }

    public function getAllowsImageDeselect() : bool
    {
        return ! (bool) $this->evaluate($this->disableImageDeselect);
    }

    public function getAllowsImageEditBadges() : bool
    {
        return ! (bool) $this->evaluate($this->disableImageEditBadges);
    }

    public function getRelationOrderColumn() : ?string
    {
        $value = $this->evaluate($this->relationOrderColumn);

        return $value === null ? null : (string) $value;
    }

    public function getFilteredConversionDefinitions() : array
    {
        $definitions = (array) $this->evaluate($this->filteredConversionDefinitions);

        return collect($definitions)
            ->map(function (ConversionDefinition|string $definition) {
                return $definition instanceof ConversionDefinition
                    ? $definition->name
                    : $definition;
            })
            ->toArray();
    }

    public function getDisabledConversionDefinitions() : array
    {
        $definitions = (array) $this->evaluate($this->disabledConversionDefinitions);

        if (! $this->getEnablePackageConversionDefinitions()) {
            $definitions = array_merge($definitions, [
                FilamentImageLibraryServiceProvider::FILAMENT_THUMBNAIL_CONVERSION_DEFINITION,
            ]);
        }

        return collect($definitions)
            ->map(function (ConversionDefinition|string $definition) {
                return $definition instanceof ConversionDefinition
                    ? $definition->name
                    : $definition;
            })
            ->toArray();
    }

    public function getEnablePackageConversionDefinitions() : bool
    {
        return (bool) $this->evaluate($this->enablePackageConversionDefinitions);
    }

    public function getImages() : Collection
    {
        $state = array_filter(Arr::wrap($this->getState()));

        if (count($state) === 0) {
            return collect();
        }

        return Image::whereIn('id', $state)
            ->orderByRaw('CASE id ' . implode(' ', array_map(function ($id) use ($state) {
                return 'WHEN ' . $id . ' THEN ' . array_search($id, $state);
            }, $state)) . ' END')
            ->get();
    }

    public function getAllowedConversionDefinitions() : array
    {
        $conversionDefinitions = ImageLibrary::getConversionDefinitions()
            ->map(function (ConversionDefinition $conversionDefinition) {
                return $conversionDefinition->name;
            });

        if ($this->getEnablePackageConversionDefinitions()) {
            $conversionDefinitions = $conversionDefinitions->concat([
                FilamentImageLibraryServiceProvider::FILAMENT_THUMBNAIL_CONVERSION_DEFINITION,
            ]);
        }

        $conversionDefinitions = $conversionDefinitions
            ->when(count($this->getDisabledConversionDefinitions()) > 0, function (Collection $conversionDefinitions) {
                return $conversionDefinitions->filter(function (string $name) {
                    return ! in_array($name, $this->getDisabledConversionDefinitions());
                });
            })
            ->when(count($this->getFilteredConversionDefinitions()) > 0, function (Collection $conversionDefinitions) {
                return $conversionDefinitions->filter(function (string $name) {
                    return in_array($name, $this->getFilteredConversionDefinitions());
                });
            });

        return $conversionDefinitions->toArray();
    }

    public function allowsImageConversion(ImageConversion $conversion) : bool
    {
        return in_array($conversion->definition->name, $this->getAllowedConversionDefinitions());
    }

    protected function setUp() : void
    {
        parent::setUp();

        $this->registerActions([
            fn (self $component) : Action => $component->getUploadAction(),
            fn (self $component) : Action => $component->getSelectExisting(),
            fn (self $component) : Action => $component->getCropAction(),
            fn (self $component) : Action => $component->getEditAction(),
            fn (self $component) : Action => $component->getDeselectAction(),
        ]);

        $this->afterStateHydrated(static function (self $component, $state) : void {
            $component->state(Arr::wrap($state ?? []));
        });

        $this->dehydrateStateUsing = $this->dehydrateStateUsing ?? function ($state) {
            if ($this->getAllowsMultiple()) {
                return array_values(array_filter($state));
            }

            return array_values(array_filter($state))[0] ?? null;
        };

        $this->saveRelationshipsUsing = $this->saveRelationshipsUsing ?? function (self $component, $state) : void {
            if (! $component->getAllowsMultiple() || is_null($component->getRelationShip())) {
                return;
            }

            $orderColumn = $component->getRelationOrderColumn();

            $data = collect($state);

            if ($orderColumn) {
                $data = $data->values()->mapWithKeys(function ($id, $index) use ($orderColumn) {
                    return [$id => [$orderColumn => $index]];
                });
            }

            $component->getRelationShip()->sync($data->toArray());
        };
    }

    protected function getUploadAction() : Action
    {
        return Action::make('upload')
            ->label(__('filament-image-library::translations.actions.upload'))
            ->modalSubmitActionLabel(__('filament-image-library::translations.actions.save'))
            ->icon('heroicon-o-arrow-up-tray')
            ->form([
                Select::make('disk')
                    ->required()
                    ->label(__('filament-image-library::translations.form.labels.disk'))
                    ->options(fn () => FilamentImageLibraryPlugin::get()->getAllowedDisks())
                    ->default(fn () => FilamentImageLibraryPlugin::get()->getDefaultDisk()),
                FileUpload::make('images')
                    ->label(
                        $this->getAllowsMultiple()
                        ? __('filament-image-library::translations.form.labels.upload_multiple')
                        : __('filament-image-library::translations.form.labels.upload')
                    )
                    ->required()
                    ->live()
                    ->multiple(fn () => $this->getAllowsMultiple())
                    ->saveUploadedFileUsing(function (TemporaryUploadedFile $file, Get $get) : int {
                        $file = new UploadedFile(
                            $file->getRealPath(),
                            $file->getFilename(),
                            $file->getMimeType(),
                        );

                        return ImageLibrary::upload($file, $get('disk'))->id;
                    }),
            ])
            ->action(function (array $data, Set $set, Component $component) : void {
                $imageIds = Arr::wrap($data['images'] ?? []);

                $set(
                    $component->getStatePath(false),
                    $this->getAllowsMultiple()
                    ? collect($component->getState())->concat($imageIds)->toArray()
                    : Arr::wrap($imageIds[0])
                );

                Notification::make()
                    ->success()
                    ->title(
                        count($imageIds) > 1
                        ? __('filament-image-library::translations.notifications.images_uploaded.title')
                        : __('filament-image-library::translations.notifications.image_uploaded.title')
                    )
                    ->send();
            })
            ->closeModalByClickingAway(false);
    }

    protected function getSelectExisting() : Action
    {
        return Action::make('selectExisting')
            ->label(__('filament-image-library::translations.actions.select_existing'))
            ->icon('heroicon-o-photo')
            ->color('gray')
            ->modalSubmitActionLabel(__('filament-image-library::translations.actions.apply'))
            ->form([
                ImageLibrarySelectExisting::make('images')
                    ->hiddenLabel()
                    ->multiple(fn () => $this->getAllowsMultiple())
                    ->itemsPerPage($this->existingItemsPerPage),
            ])
            ->fillForm(fn (Component $component) : array => [
                'images' => $component->getState(),
            ])
            ->action(function (array $data, Set $set, Component $component) : void {
                $imageIds = $data['images'];

                if ($this->getAllowsMultiple()) {
                    $set(
                        $component->getStatePath(false),
                        $imageIds
                    );

                    return;
                }

                $set(
                    $component->getStatePath(false),
                    Arr::wrap($imageIds[0])
                );
            })
            ->closeModalByClickingAway(false);
    }

    public function getEditAction() : Action
    {
        return Action::make('edit')
            ->hiddenLabel()
            ->label(__('filament-image-library::translations.actions.edit'))
            ->tooltip(__('filament-image-library::translations.actions.edit'))
            ->modalSubmitActionLabel(__('filament-image-library::translations.actions.save'))
            ->color('gray')
            ->icon('heroicon-o-pencil')
            ->form(function () {
                $titleField = TextInput::make('title')
                    ->label(__('filament-image-library::translations.form.labels.title'))
                    ->helperText(__('filament-image-library::translations.form.help.title'))
                    ->nullable();

                $altField = TextInput::make('alt')
                    ->label(__('filament-image-library::translations.form.labels.alt'))
                    ->helperText(__('filament-image-library::translations.form.help.alt'))
                    ->nullable();

                if (app('filament')->hasPlugin(FilamentTranslatableFieldsPlugin::class)) {
                    $titleField = $titleField->translatable();
                    $altField = $altField->translatable();
                }

                return [
                    $titleField,
                    $altField,
                ];
            })
            ->fillForm(function (array $arguments) : array {
                $image = ImageLibrary::imageModel()::find($arguments['id']);

                if (ImageLibrary::isSpatieTranslatable()) {
                    return [
                        'title' => $image->getTranslations('title') ?? [],
                        'alt' => $image->getTranslations('alt') ?? [],
                    ];
                }

                return [
                    'title' => $image->title,
                    'alt' => $image->alt,
                ];
            })
            ->action(function (array $data, array $arguments) : void {
                $image = ImageLibrary::imageModel()::find($arguments['id']);

                $image->update([
                    'title' => $data['title'],
                    'alt' => $data['alt'],
                ]);

                Notification::make()
                    ->success()
                    ->title(__('filament-image-library::translations.notifications.image_updated.title'))
                    ->send();
            })
            ->badge(function (array $arguments) : string {
                if (! $this->getAllowsImageEditBadges()) {
                    return '';
                }

                $image = ImageLibrary::imageModel()::find($arguments['id']);

                $count = 0;

                if (ImageLibrary::isSpatieTranslatable()) {
                    $titleTranslationsCount = collect($image->getTranslations('title') ?? [])
                        ->filter(fn ($title) => ! blank($title))
                        ->count();

                    $altTranslationsCount = collect($image->getTranslations('alt') ?? [])
                        ->filter(fn ($alt) => ! blank($alt))
                        ->count();

                    $supportedLocalesCount = app('filament')->hasPlugin(FilamentTranslatableFieldsPlugin::class) ? count(FilamentTranslatableFieldsPlugin::get()->getSupportedLocales()) : 1;

                    if ($titleTranslationsCount < $supportedLocalesCount) {
                        $count += $supportedLocalesCount - $titleTranslationsCount;
                    }

                    if ($altTranslationsCount < $supportedLocalesCount) {
                        $count += $supportedLocalesCount - $altTranslationsCount;
                    }

                    return $count > 0 ? $count : '';
                }

                if (blank($image->title)) {
                    $count++;
                }

                if (blank($image->alt)) {
                    $count++;
                }

                return $count > 0 ? $count : '';
            })
            ->badgeColor('danger')
            ->closeModalByClickingAway(false);
    }

    public function getCropAction() : Action
    {
        return Action::make('crop')
            ->hiddenLabel()
            ->label(__('filament-image-library::translations.actions.crop'))
            ->tooltip(__('filament-image-library::translations.actions.crop'))
            ->modalSubmitActionLabel(__('filament-image-library::translations.actions.save'))
            ->color('gray')
            ->icon('heroicon-o-scissors')
            ->fillForm(function (array $arguments) : array {
                $image = ImageLibrary::imageModel()::find($arguments['id']);

                return $this->getImageConversions($image)
                    ->mapWithKeys(function (ImageConversion $conversion) use ($image) {
                        return [
                            "conversion_{$conversion->id}" => [
                                'id' => $conversion->id,
                                'x' => $conversion->x ?? 0,
                                'y' => $conversion->y ?? 0,
                                'width' => $conversion->width ?? $image->width,
                                'height' => $conversion->height ?? $image->height,
                                'rotate' => $conversion->rotate ?? 0,
                                'scale_x' => $conversion->scale_x ?? 1,
                                'scale_y' => $conversion->scale_y ?? 1,
                            ],
                        ];
                    })
                    ->toArray();
            })
            ->form(function (array $arguments) {
                return [
                    Tabs::make('Crop')
                        ->tabs(function () use ($arguments) {
                            $image = ImageLibrary::imageModel()::find($arguments['id']);

                            return $this->getImageConversions($image)
                                ->map(function (ImageConversion $conversion) use ($image) {
                                    return Tabs\Tab::make($conversion->id)
                                        ->label($conversion->definition->label)
                                        ->schema([
                                            ImageLibraryCropper::make("conversion_{$conversion->id}")
                                                ->image($image)
                                                ->conversion($conversion),
                                        ]);
                                })
                                ->toArray();
                        }),
                ];
            })
            ->action(function (array $data, array $arguments) : void {
                $image = ImageLibrary::imageModel()::find($arguments['id']);

                foreach ($data as $key => $value) {
                    $conversion = $image->conversions->firstWhere('id', $value['id']);

                    if (! $conversion) {
                        continue;
                    }

                    $conversion->update([
                        'x' => $value['x'],
                        'y' => $value['y'],
                        'width' => $value['width'],
                        'height' => $value['height'],
                        'rotate' => $value['rotate'],
                        'scale_x' => $value['scale_x'],
                        'scale_y' => $value['scale_y'],
                    ]);
                }

                Notification::make()
                    ->success()
                    ->title(__('filament-image-library::translations.notifications.image_cropped.title'))
                    ->send();
            })
            ->closeModalByClickingAway(false);
    }

    public function getDeselectAction() : Action
    {
        return Action::make('deselect')
            ->hiddenLabel()
            ->label(__('filament-image-library::translations.actions.deselect'))
            ->tooltip(__('filament-image-library::translations.actions.deselect'))
            ->color('danger')
            ->icon('heroicon-o-x-mark')
            ->action(function (array $arguments, Set $set, Component $component) : void {
                $imageIds = Arr::wrap($component->getState());
                $idToDeselect = $arguments['id'];

                if ($this->getAllowsMultiple()) {
                    $set(
                        $component->getStatePath(false),
                        collect($imageIds)->filter(fn ($id) => (string) $id !== (string) $idToDeselect)->toArray()
                    );

                    return;
                }

                $set(
                    $component->getStatePath(false),
                    []
                );
            })
            ->closeModalByClickingAway(false);
    }

    public function getImageConversions(Image $image) : Collection
    {
        return $image->conversions
            ->filter(function (ImageConversion $conversion) {
                return $this->allowsImageConversion($conversion);
            });
    }

    public function getRelationship() : ?BelongsToMany
    {
        $modelInstance = $this->getModelInstance();

        if (is_null($modelInstance)) {
            return null;
        }

        if (! method_exists($this->getModelInstance(), $this->getName())) {
            return null;
        }

        return $this->getModelInstance()->{$this->getName()}();
    }

    public function getState() : mixed
    {
        $state = parent::getState();

        if ($this->getAllowsMultiple() && $state === null) {
            $relationship = $this->getRelationship();

            if ($relationship instanceof BelongsToMany) {
                $results = $relationship->getResults();

                $this->state($results
                    ->pluck($relationship->getRelatedKeyName())
                    ->toArray());
            }
        }

        return $state;
    }
}
