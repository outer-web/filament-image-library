<?php

declare(strict_types=1);

namespace Outerweb\FilamentImageLibrary\Forms\Components;

use Closure;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Forms\Components\Field;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Support\Icons\Heroicon;
use Outerweb\ImageLibrary\Entities\AspectRatio;
use Outerweb\ImageLibrary\Models\SourceImage;

class ImageCropper extends Field
{
    public SourceImage|Closure|null $sourceImage = null;

    public AspectRatio|Closure|null $aspectRatio = null;

    protected string $view = 'filament-image-library::forms.components.image-cropper';

    public function setUp(): void
    {
        parent::setUp();

        $this->childComponents(
            [
                $this->widthInput(),
                $this->heightInput(),
                $this->xInput(),
                $this->yInput(),
                Grid::make()
                    ->columns(2)
                    ->schema([
                        ActionGroup::make([
                            $this->rotateLeftAction(),
                            $this->rotateRightAction(),
                        ])
                            ->buttonGroup(),
                        ActionGroup::make([
                            $this->flipHorizontalAction(),
                            $this->flipVerticalAction(),
                        ])
                            ->buttonGroup(),
                    ]),
            ],
        );

        $this->registerActions([
            $this->rotateRightAction(),
            $this->rotateLeftAction(),
            $this->flipHorizontalAction(),
            $this->flipVerticalAction(),
        ]);

        $this->afterStateHydrated(function (?array $state, Set $set): void {
            $state ??= [];

            $sourceImage = $this->getSourceImage();

            $x = 0;
            $y = 0;
            $width = $sourceImage->width;
            $height = $sourceImage->height;

            $aspectRatio = $this->getAspectRatio();

            if ($aspectRatio && $aspectRatio->toFloat() >= 1) {
                $height = (int) round($width / $aspectRatio->toFloat());
                $y = (int) round(($sourceImage->height - $height) / 2);
            } elseif ($aspectRatio && $aspectRatio->toFloat() < 1) {
                $width = (int) round($height * $aspectRatio->toFloat());
                $x = (int) round(($sourceImage->width - $width) / 2);
            }

            $set(
                $this->getStatePath(false),
                array_merge([
                    'x' => $state['x'] ?? $x,
                    'y' => $state['y'] ?? $y,
                    'width' => $state['width'] ?? $width,
                    'height' => $state['height'] ?? $height,
                    'rotate' => $state['rotate'] ?? 0,
                    'scaleX' => $state['scaleX'] ?? 1,
                    'scaleY' => $state['scaleY'] ?? 1,
                ]),
            );
        });

        $this->dehydrateStateUsing(function ($state) {
            return [
                'x' => $state['x'],
                'y' => $state['y'],
                'width' => $state['width'],
                'height' => $state['height'],
                'rotate' => $state['rotate'],
                'scaleX' => $state['scaleX'],
                'scaleY' => $state['scaleY'],
            ];
        });
    }

    public function aspectRatio(AspectRatio|Closure|null $aspectRatio = null): static
    {
        $this->aspectRatio = $aspectRatio;

        return $this;
    }

    public function getAspectRatio(): ?AspectRatio
    {
        return $this->evaluate($this->aspectRatio);
    }

    public function sourceImage(SourceImage $sourceImage): static
    {
        $this->sourceImage = $sourceImage;

        return $this;
    }

    public function getSourceImage(): SourceImage
    {
        return $this->evaluate($this->sourceImage);
    }

    public function widthInput(): TextInput
    {
        return TextInput::make('width')
            ->label(__('filament-image-library::translations.forms.labels.width'))
            ->prefix(__('filament-image-library::translations.forms.prefixes.width'))
            ->suffix(__('filament-image-library::translations.forms.suffixes.width'))
            ->hiddenLabel()
            ->live()
            ->afterStateUpdated(function (array $state, Set $set, self $component): void {
                $sourceImage = $component->getSourceImage();

                if ($state < 0) {
                    $state = 0;
                }

                if ($state + $component->getState()['x'] > $sourceImage->width) {
                    $state = $sourceImage->width - $component->getState()['x'];
                }

                $set(
                    $component->getStatePath(false),
                    array_merge($component->getState(), [
                        'width' => $state,
                    ]),
                );
            });
    }

    public function heightInput(): TextInput
    {
        return TextInput::make('height')
            ->label(__('filament-image-library::translations.forms.labels.height'))
            ->prefix(__('filament-image-library::translations.forms.prefixes.height'))
            ->suffix(__('filament-image-library::translations.forms.suffixes.height'))
            ->hiddenLabel()
            ->live()
            ->afterStateUpdated(function (array $state, Set $set, self $component): void {
                $sourceImage = $component->getSourceImage();

                if ($state < 0) {
                    $state = 0;
                }

                if ($state + $component->getState()['y'] > $sourceImage->height) {
                    $state = $sourceImage->height - $component->getState()['y'];
                }

                $set(
                    $component->getStatePath(false),
                    array_merge($component->getState(), [
                        'height' => $state,
                    ]),
                );
            });
    }

    public function xInput(): TextInput
    {
        return TextInput::make('x')
            ->label(__('filament-image-library::translations.forms.labels.x'))
            ->prefix(__('filament-image-library::translations.forms.prefixes.x'))
            ->suffix(__('filament-image-library::translations.forms.suffixes.x'))
            ->hiddenLabel()
            ->live()
            ->afterStateUpdated(function (array $state, Set $set, self $component): void {
                $sourceImage = $component->getSourceImage();

                if ($state < 0) {
                    $state = 0;
                }

                if ($state + $component->getState()['width'] > $sourceImage->width) {
                    $state = $sourceImage->width - $component->getState()['width'];
                }

                $set(
                    $component->getStatePath(false),
                    array_merge($component->getState(), [
                        'x' => $state,
                    ]),
                );
            });
    }

    public function yInput(): TextInput
    {
        return TextInput::make('y')
            ->label(__('filament-image-library::translations.forms.labels.y'))
            ->prefix(__('filament-image-library::translations.forms.prefixes.y'))
            ->suffix(__('filament-image-library::translations.forms.suffixes.y'))
            ->hiddenLabel()
            ->live()
            ->afterStateUpdated(function (array $state, Set $set, self $component): void {
                $sourceImage = $component->getSourceImage();

                if ($state < 0) {
                    $state = 0;
                }

                if ($state + $component->getState()['height'] > $sourceImage->height) {
                    $state = $sourceImage->height - $component->getState()['height'];
                }

                $set(
                    $component->getStatePath(false),
                    array_merge($component->getState(), [
                        'y' => $state,
                    ]),
                );
            });
    }

    public function rotateRightAction(): Action
    {
        return Action::make('rotateRight')
            ->label(__('filament-image-library::translations.actions.rotate_right'))
            ->tooltip(__('filament-image-library::translations.tooltips.rotate_right'))
            ->color('gray')
            ->hiddenLabel()
            ->icon(Heroicon::OutlinedArrowUturnRight)
            ->action(function (ImageCropper $component) {
                $state = $component->getState();

                $state['rotate'] = ($state['rotate'] + 90) % 360;

                $component->state($state);
            });
    }

    public function rotateLeftAction(): Action
    {
        return Action::make('rotateLeft')
            ->label(__('filament-image-library::translations.actions.rotate_left'))
            ->tooltip(__('filament-image-library::translations.tooltips.rotate_left'))
            ->color('gray')
            ->hiddenLabel()
            ->icon(Heroicon::OutlinedArrowUturnLeft)
            ->action(function (ImageCropper $component) {
                $state = $component->getState();

                $state['rotate'] = ($state['rotate'] - 90 + 360) % 360;

                $component->state($state);
            });
    }

    public function flipHorizontalAction(): Action
    {
        return Action::make('flipHorizontal')
            ->label(__('filament-image-library::translations.actions.flip_horizontal'))
            ->tooltip(__('filament-image-library::translations.tooltips.flip_horizontal'))
            ->hiddenLabel()
            ->icon(Heroicon::OutlinedArrowsRightLeft)
            ->color('gray')
            ->action(function (ImageCropper $component) {
                $state = $component->getState();

                $state['scaleX'] = $state['scaleX'] * -1;

                $component->state($state);
            });
    }

    public function flipVerticalAction(): Action
    {
        return Action::make('flipVertical')
            ->label(__('filament-image-library::translations.actions.flip_vertical'))
            ->tooltip(__('filament-image-library::translations.tooltips.flip_vertical'))
            ->hiddenLabel()
            ->icon(Heroicon::OutlinedArrowsUpDown)
            ->color('gray')
            ->action(function (ImageCropper $component) {
                $state = $component->getState();

                $state['scaleY'] = $state['scaleY'] * -1;

                $component->state($state);
            });
    }
}
