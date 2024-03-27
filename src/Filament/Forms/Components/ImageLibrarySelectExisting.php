<?php

namespace Outerweb\FilamentImageLibrary\Filament\Forms\Components;

use Closure;
use Filament\Forms\Components\Field;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;
use Outerweb\ImageLibrary\Facades\ImageLibrary;

class ImageLibrarySelectExisting extends Field
{
    public int $itemsPerPage = 9;

    protected string $view = 'filament-image-library::filament.forms.components.image-library-select-existing';

    protected bool|Closure $multiple = false;

    public function multiple(bool|Closure $multiple = true) : static
    {
        $this->multiple = $multiple;

        return $this;
    }

    public function itemsPerPage(int $perPage) : static
    {
        $this->itemsPerPage = $perPage;

        return $this;
    }

    public function getItemsPerPage() : int
    {
        return $this->itemsPerPage;
    }

    public function getAllowsMultiple() : bool
    {
        return (bool) $this->evaluate($this->multiple);
    }

    public function getImages() : Collection
    {
        return ImageLibrary::imageModel()::latest()->get();
    }

    public function getState() : mixed
    {
        return Arr::wrap(parent::getState() ?? []);
    }

    protected function setUp() : void
    {
        parent::setUp();

        $this->afterStateHydrated(static function (self $component, $state) : void {
            $component->state($state ?? []);
        });
    }
}
