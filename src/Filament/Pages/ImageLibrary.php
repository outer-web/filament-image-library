<?php

namespace Outerweb\FilamentImageLibrary\Filament\Pages;

use Filament\Actions\Action;
use Filament\Forms\Components\Tabs;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Outerweb\FilamentImageLibrary\Filament\Forms\Components\ImageLibraryCropper;
use Outerweb\FilamentImageLibrary\Filament\Forms\Components\ImageLibraryPicker;
use Outerweb\FilamentImageLibrary\Filament\Plugins\FilamentImageLibraryPlugin;
use Outerweb\FilamentTranslatableFields\Filament\Plugins\FilamentTranslatableFieldsPlugin;
use Outerweb\ImageLibrary\Facades\ImageLibrary as FacadesImageLibrary;
use Outerweb\ImageLibrary\Models\ImageConversion;

class ImageLibrary extends Page
{
    public int|string $itemsPerPage = 48;

    protected static ?string $navigationIcon = 'heroicon-o-photo';

    public static function getNavigationLabel() : string
    {
        return __('filament-image-library::translations.page.navigation_label');
    }

    public static function getNavigationSort() : ?int
    {
        return FilamentImageLibraryPlugin::get()->getNavigationSort();
    }

    public function getLayout() : string
    {
        return static::$layout ?? 'filament-panels::components.layout.index';
    }

    public function getView() : string
    {
        return static::$view ?? 'filament-image-library::filament/pages/image-library';
    }

    public function getTitle() : string
    {
        return __('filament-image-library::translations.page.title');
    }

    public function getViewData() : array
    {
        return [
            'images' => $this->getImages(),
        ];
    }

    public function getImages() : LengthAwarePaginator
    {
        return FacadesImageLibrary::imageModel()::query()
            ->latest()
            ->paginate($this->itemsPerPage);
    }

    public function getDeleteAction() : Action
    {
        return Action::make('getDeleteAction')
            ->hiddenLabel()
            ->label(__('filament-image-library::translations.actions.delete'))
            ->tooltip(__('filament-image-library::translations.actions.delete'))
            ->color('danger')
            ->icon('heroicon-o-trash')
            ->requiresConfirmation()
            ->modalHeading(__('filament-image-library::translations.modals.delete.heading'))
            ->modalDescription(__('filament-image-library::translations.modals.delete.description'))
            ->modalSubmitActionLabel(__('filament-image-library::translations.modals.delete.submit'))
            ->modalIcon('heroicon-o-trash')
            ->action(function (array $arguments) {
                $image = FacadesImageLibrary::imageModel()::find($arguments['id']);

                $image?->delete();

                Notification::make()
                    ->success()
                    ->title(__('filament-image-library::translations.notifications.image_deleted.title'))
                    ->send();
            })
            ->closeModalByClickingAway(false);
    }

    public function getEditAction() : Action
    {
        return Action::make('getEditAction')
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
                $image = FacadesImageLibrary::imageModel()::find($arguments['id']);

                if (FacadesImageLibrary::isSpatieTranslatable()) {
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
                $image = FacadesImageLibrary::imageModel()::find($arguments['id']);

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
                $image = FacadesImageLibrary::imageModel()::find($arguments['id']);

                $count = 0;

                if (FacadesImageLibrary::isSpatieTranslatable()) {
                    $titleTranslationsCount = collect($image->getTranslations('title') ?? [])
                        ->filter(fn ($title) => empty ($title))
                        ->count();

                    $altTranslationsCount = collect($image->getTranslations('alt') ?? [])
                        ->filter(fn ($alt) => empty ($alt))
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

                if (empty ($image->title)) {
                    $count++;
                }

                if (empty ($image->alt)) {
                    $count++;
                }

                return $count > 0 ? $count : '';
            })
            ->badgeColor('danger')
            ->closeModalByClickingAway(false);
    }

    public function getCropAction() : Action
    {
        return Action::make('getCropAction')
            ->hiddenLabel()
            ->label(__('filament-image-library::translations.actions.crop'))
            ->tooltip(__('filament-image-library::translations.actions.crop'))
            ->modalSubmitActionLabel(__('filament-image-library::translations.actions.save'))
            ->color('gray')
            ->icon('heroicon-o-scissors')
            ->fillForm(function (array $arguments) : array {
                $image = FacadesImageLibrary::imageModel()::find($arguments['id']);

                return $image
                    ->conversions
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
                            $image = FacadesImageLibrary::imageModel()::find($arguments['id']);

                            return $image
                                ->conversions
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
                $image = FacadesImageLibrary::imageModel()::find($arguments['id']);

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

    protected function getHeaderActions() : array
    {
        return [
            Action::make('upload')
                ->label(__('filament-image-library::translations.actions.upload'))
                ->modalSubmitActionLabel(__('filament-image-library::translations.actions.close_upload_action'))
                ->icon('heroicon-o-arrow-up-tray')
                ->form([
                    ImageLibraryPicker::make('image_id')
                        ->label(__('filament-image-library::translations.form.labels.image_picker.multiple.upload_only'))
                        ->multiple()
                        ->disableImageDeselect()
                        ->disableExisting()
                        ->enablePackageConversionDefinitions(),
                ]),
        ];
    }
}
