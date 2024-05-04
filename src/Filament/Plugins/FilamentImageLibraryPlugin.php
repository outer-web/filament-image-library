<?php

namespace Outerweb\FilamentImageLibrary\Filament\Plugins;

use Filament\Contracts\Plugin;
use Filament\Panel;
use Outerweb\FilamentImageLibrary\Filament\Pages\ImageLibrary;

class FilamentImageLibraryPlugin implements Plugin
{
    protected array $allowedDisks = [];
    protected string $defaultDisk = 'public';

    protected ?int $navigationSort = null;

    public static function make() : static
    {
        return app(static::class);
    }

    public static function get() : static
    {
        return filament(app(static::class)->getId());
    }

    public function getId() : string
    {
        return 'outerweb-filament-image-library';
    }

    public function register(Panel $panel) : void
    {
        $panel->pages([
            config('filament-image-library.page_class', ImageLibrary::class),
        ]);
    }

    public function boot(Panel $panel) : void
    {

    }

    public function addAllowedDisk(string $disk, ?string $label = null) : static
    {
        $this->allowedDisks[$disk] = $label ?? $disk;

        return $this;
    }

    public function allowedDisks(array $disks) : static
    {
        $this->allowedDisks = $disks;

        return $this;
    }

    public function defaultDisk(string $disk) : static
    {
        if (! in_array($disk, $this->allowedDisks)) {
            throw new \Exception("The default disk [{$disk}] is not in the allowed disks.");
        }

        $this->defaultDisk = $disk;

        return $this;
    }

    public function navigationSort(?int $sort) : static
    {
        $this->navigationSort = $sort;

        return $this;
    }

    public function getAllowedDisks() : array
    {
        if (empty($this->allowedDisks)) {
            return [
                'public' => __('filament-image-library::translations.disks.public'),
            ];
        }

        return $this->allowedDisks;
    }

    public function getDefaultDisk() : string
    {
        return $this->defaultDisk;
    }

    public function getNavigationSort() : ?int
    {
        return $this->navigationSort;
    }
}
