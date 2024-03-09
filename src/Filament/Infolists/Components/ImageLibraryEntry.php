<?php

namespace Outerweb\FilamentImageLibrary\Filament\Infolists\Components;

use Filament\Infolists\Components\Entry;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Outerweb\ImageLibrary\Models\Image;

class ImageLibraryEntry extends Entry
{
    protected string $view = 'filament-image-library::filament.infolists.components.image-library-entry';

    public function getImages() : Collection
    {
        $nameParts = explode('.', $this->getName());

        $state = $this->getRecord()->getAttribute(array_shift($nameParts));

        foreach ($nameParts as $namePart) {
            if (is_null($state) || ! method_exists($state, 'getAttribute')) {
                $state = null;
                break;
            }
            $state = $state?->getAttribute($namePart);
        }

        if ($state instanceof Collection) {
            return $state;
        }

        if (! $state instanceof Image) {
            return collect();
        }

        return collect(Arr::wrap($state));
    }
}
