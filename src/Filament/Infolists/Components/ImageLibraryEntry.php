<?php

namespace Outerweb\FilamentImageLibrary\Filament\Infolists\Components;

use Filament\Infolists\Components\Entry;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

class ImageLibraryEntry extends Entry
{
    protected string $view = 'filament-image-library::filament.infolists.components.image-library-entry';

    public function getImages() : Collection
    {
        $state = $this->getRecord()->getAttribute($this->getName());

        if ($state instanceof Collection) {
            return $state;
        }

        return collect(Arr::wrap($state));
    }
}
