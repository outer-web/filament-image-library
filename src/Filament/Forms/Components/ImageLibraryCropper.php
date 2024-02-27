<?php

namespace Outerweb\FilamentImageLibrary\Filament\Forms\Components;

use Filament\Forms\Components\Field;
use Outerweb\ImageLibrary\Entities\ConversionDefinition;
use Outerweb\ImageLibrary\Facades\ImageLibrary;
use Outerweb\ImageLibrary\Models\Image;
use Outerweb\ImageLibrary\Models\ImageConversion;

class ImageLibraryCropper extends Field
{
    protected string $view = 'filament-image-library::filament.forms.components.image-library-cropper';

    protected ?Image $image = null;

    protected ?ImageConversion $conversion = null;

    protected ?ConversionDefinition $conversionDefinition = null;

    public function setUp(): void
    {
        parent::setUp();

        $this->hiddenLabel();

        $this->dehydrateStateUsing(function ($state) {
            return [
                'id' => $state['id'],
                'x' => $state['x'],
                'y' => $state['y'],
                'width' => $state['width'],
                'height' => $state['height'],
                'rotate' => $state['rotate'],
                'scale_x' => $state['scale_x'],
                'scale_y' => $state['scale_y'],
            ];
        });
    }

    public function getImage(): Image
    {
        return $this->image;
    }

    public function image(Image $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getConversion(): ?ImageConversion
    {
        return $this->conversion;
    }

    public function conversion(ImageConversion $conversion): static
    {
        $this->conversion = $conversion;

        return $this;
    }

    public function getConversionDefinition(): ConversionDefinition
    {
        if (!is_null($this->conversionDefinition)) {
            return $this->conversionDefinition;
        }

        return $this->conversionDefinition = ImageLibrary::getConversionDefinition($this->conversion->conversion_name);
    }

    public function getImageWidth(): int
    {
        return $this->image->width;
    }

    public function getImageHeight(): int
    {
        return $this->image->height;
    }

    public function getImageAspectRatio(bool $asString = false): float|string
    {
        $x = $this->getImageWidth();
        $y = $this->getImageHeight();

        if ($asString) {
            return "{$x}/{$y}";
        }

        return round($x / $y, 2);
    }

    public function getConversionAspectRatio(bool $asString = false): float|string
    {
        $x = $this->getConversion()->width;
        $y = $this->getConversion()->height;

        if ($asString) {
            return "{$x}/{$y}";
        }

        return round($x / $y, 2);
    }
}
