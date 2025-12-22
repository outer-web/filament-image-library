<?php

declare(strict_types=1);

namespace Outerweb\FilamentImageLibrary;

use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentImageLibraryServiceProvider extends PackageServiceProvider
{
    public static string $name = 'filament-image-library';

    public static string $viewNamespace = 'filament-image-library';

    public function configurePackage(Package $package): void
    {
        $package->name(static::$name);

        $configFileName = $package->shortName();

        if (file_exists($package->basePath("/../config/{$configFileName}.php"))) {
            $package->hasConfigFile();
        }

        if (file_exists($package->basePath('/../resources/lang'))) {
            $package->hasTranslations();
        }

        if (file_exists($package->basePath('/../resources/views'))) {
            $package->hasViews(static::$viewNamespace);
        }
    }

    public function packageBooted(): void
    {
        FilamentAsset::register(
            [
                Js::make(
                    'alpine-sort',
                    'https://cdn.jsdelivr.net/npm/@alpinejs/sort@3.x.x/dist/cdn.min.js',
                ),
                Js::make(
                    'filament-image-library',
                    __DIR__.'/../resources/dist/filament-image-library.js',
                ),
            ],
            'outerweb/filament-image-library',
        );
    }
}
