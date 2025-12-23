<?php

declare(strict_types=1);

namespace Outerweb\FilamentImageLibrary\Pages;

use BackedEnum;
use Exception;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Forms\Components\Field;
use Filament\Forms\Components\TextInput;
use Filament\Pages\Page;
use Filament\Schemas\Components\Component;
use Filament\Support\Enums\Width;
use Filament\Support\Icons\Heroicon;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\Str;
use Livewire\WithPagination;
use Outerweb\FilamentImageLibrary\Forms\Components\SourceImageUpload;
use Outerweb\FilamentImageLibrary\ImageLibraryPlugin;
use Outerweb\ImageLibrary\Facades\ImageLibrary as ImageLibraryFacade;
use Outerweb\ImageLibrary\Models\SourceImage;
use UnitEnum;

class ImageLibrary extends Page
{
    use WithPagination;

    public int $itemsPerPage = 48;

    public $selectedImages = [];

    protected string $view = 'filament-image-library::pages.image-library';

    public static function canAccess(): bool
    {
        return ImageLibraryPlugin::get()->getCanAccess();
    }

    public static function getNavigationGroup(): string|UnitEnum|null
    {
        return ImageLibraryPlugin::get()->getNavigationGroup();
    }

    public static function getNavigationIcon(): string|BackedEnum|null
    {
        return ImageLibraryPlugin::get()->getNavigationIcon();
    }

    public static function getNavigationSort(): ?int
    {
        return ImageLibraryPlugin::get()->getNavigationSort();
    }

    public static function getCustomPropertiesSchema(): ?array
    {
        return ImageLibraryPlugin::get()->getCustomPropertiesSchemaForSourceImages();
    }

    public function getTitle(): string|Htmlable
    {
        return __('filament-image-library::translations.page.title');
    }

    public function getHeaderActions(): array
    {
        return [
            $this->bulkSelectionActions(),
            $this->uploadAction(),
        ];
    }

    public function editAction(): Action
    {
        return Action::make('edit')
            ->iconButton()
            ->icon(Heroicon::OutlinedPencilSquare)
            ->color('gray')
            ->tooltip(__('filament-image-library::translations.tooltips.edit'))
            ->fillForm(function (array $arguments): array {
                $sourceImage = ImageLibraryFacade::getSourceImageModel()::query()
                    ->findOrFail($arguments['recordId']);

                return [
                    'name' => $sourceImage->name,
                    'alt_text' => ImageLibraryPlugin::get()->usesTranslatablePlugin() ? $sourceImage->getTranslations('alt_text') : $sourceImage->alt_text,
                    'custom_properties' => $sourceImage->custom_properties,
                ];
            })
            ->schema(function () {
                $altTextField = TextInput::make('alt_text') /** @phpstan-ignore method.notFound */
                    ->label(__('filament-image-library::translations.forms.labels.alt_text'))
                    ->helperText(__('filament-image-library::translations.forms.helper_texts.alt_text'))
                    ->nullable()
                    ->maxLength(255);

                if (ImageLibraryPlugin::get()->usesTranslatablePlugin()) {
                    $altTextField = $altTextField->translatable();
                }

                return [
                    TextInput::make('name')
                        ->label(__('filament-image-library::translations.forms.labels.file_name'))
                        ->required()
                        ->maxLength(255),
                    $altTextField,
                    ...collect($this->getCustomPropertiesSchema() ?? [])
                        ->map(function (Component $component) {
                            return $this->prepareCustomPropertyFieldRecursively($component);
                        })
                        ->all(),
                ];
            })
            ->modalSubmitActionLabel(__('filament-image-library::translations.actions.save'))
            ->successNotificationTitle(__('filament-image-library::translations.notifications.edit_source_image.success'))
            ->failureNotificationTitle(__('filament-image-library::translations.notifications.edit_source_image.failure'))
            ->action(function (Action $action, array $arguments, array $data): void {
                try {
                    ImageLibraryFacade::getSourceImageModel()::query()
                        ->findOrFail($arguments['recordId'])
                        ->update([
                            'name' => $data['name'],
                            'alt_text' => $data['alt_text'] ?? null,
                            'custom_properties' => collect($data)
                                ->undot()
                                ->get('custom_properties', []),
                        ]);
                } catch (Exception $exception) {
                    $action->failure();
                }

                $action->success();
            });
    }

    public function deleteAction(): Action
    {
        return Action::make('delete')
            ->iconButton()
            ->icon(Heroicon::OutlinedTrash)
            ->color('danger')
            ->tooltip(__('filament-image-library::translations.tooltips.delete'))
            ->requiresConfirmation()
            ->modalHeading(__('filament-image-library::translations.modals.headings.delete'))
            ->modalDescription(__('filament-image-library::translations.modals.descriptions.delete'))
            ->modalSubmitActionLabel(__('filament-image-library::translations.actions.delete'))
            ->modalCancelActionLabel(__('filament-image-library::translations.actions.cancel'))
            ->closeModalByClickingAway(false)
            ->successNotificationTitle(__('filament-image-library::translations.notifications.delete.success'))
            ->failureNotificationTitle(__('filament-image-library::translations.notifications.delete.failure'))
            ->action(function (Action $action, array $arguments): void {
                try {
                    $sourceImage = ImageLibraryFacade::getSourceImageModel()::query()
                        ->findOrFail($arguments['recordId']);

                    $sourceImage->delete();

                    $action->success();
                } catch (Exception $exception) {
                    report($exception);

                    $action->failure();
                }
            });
    }

    public function bulkDeleteAction(): Action
    {
        return Action::make('delete')
            ->label(__('filament-image-library::translations.actions.bulk_delete'))
            ->color('danger')
            ->icon(Heroicon::OutlinedTrash)
            ->requiresConfirmation()
            ->modalHeading(trans_choice('filament-image-library::translations.modals.headings.bulk_delete', count($this->selectedImages)))
            ->modalDescription(trans_choice('filament-image-library::translations.modals.descriptions.bulk_delete', count($this->selectedImages)))
            ->modalSubmitActionLabel(__('filament-image-library::translations.actions.bulk_delete'))
            ->modalCancelActionLabel(__('filament-image-library::translations.actions.cancel'))
            ->closeModalByClickingAway(false)
            ->successNotificationTitle(function () {
                return trans_choice(
                    'filament-image-library::translations.notifications.delete.success',
                    count($this->selectedImages)
                );
            })
            ->failureNotificationTitle(__('filament-image-library::translations.notifications.delete.failure'))
            ->hidden(fn () => count($this->selectedImages) === 0)
            ->action(function (Action $action, array $arguments): void {
                try {
                    $sourceImages = ImageLibraryFacade::getSourceImageModel()::query()
                        ->whereIn('id', $this->selectedImages)
                        ->get()
                        ->each(fn (SourceImage $sourceImage): ?bool => $sourceImage->delete());

                    $this->selectedImages = [];

                    $action->success();
                } catch (Exception $exception) {
                    report($exception);

                    $action->failure();
                }
            });
    }

    public function bulkDeselectAction(): Action
    {
        return Action::make('deselect')
            ->label(__('filament-image-library::translations.actions.deselect'))
            ->icon(Heroicon::OutlinedXMark)
            ->hidden(fn () => count($this->selectedImages) === 0)
            ->action(function (): void {
                $this->selectedImages = [];
            });
    }

    public function bulkSelectionActions(): ActionGroup
    {
        return ActionGroup::make([
            $this->bulkDeselectAction(),
            $this->bulkDeleteAction(),
        ])
            ->button()
            ->color('gray')
            ->label(__('filament-image-library::translations.actions.bulk_selection_actions'))
            ->hidden(fn () => count($this->selectedImages) === 0);
    }

    public function uploadAction(): Action
    {
        return Action::make('upload')
            ->label(__('filament-image-library::translations.actions.upload'))
            ->button()
            ->color('primary')
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
                    ->multiple()
                    ->required()
                    ->hiddenLabel()
                    ->disks([
                        'public' => 'Public',
                        's3' => 'Amazon S3',
                    ]),
            ])
            ->action(function (Action $action): void {
                $action->success();
            });
    }

    protected function getViewData(): array
    {
        return [
            'sourceImages' => ImageLibraryFacade::getSourceImageModel()::query()
                ->latest()
                ->paginate($this->itemsPerPage),
        ];
    }

    private function prepareCustomPropertyFieldRecursively(Component $component): Component
    {
        if (is_a($component, Field::class)) {
            return $component
                ->statePath(Str::start($component->getStatePath(false), 'custom_properties.'));
        }

        return $component->childComponents(
            collect($component->getChildComponents())
                ->map(fn (Component $childComponent) => $this->prepareCustomPropertyFieldRecursively($childComponent))
                ->all()
        );
    }
}
