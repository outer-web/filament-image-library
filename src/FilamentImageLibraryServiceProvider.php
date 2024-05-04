<?php

namespace Outerweb\FilamentImageLibrary;

use Filament\Support\Assets\Css;
use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;
use Filament\Support\Facades\FilamentView;
use Outerweb\ImageLibrary\Entities\ConversionDefinition;
use Outerweb\ImageLibrary\Facades\ImageLibrary;
use Spatie\LaravelPackageTools\Commands\InstallCommand;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentImageLibraryServiceProvider extends PackageServiceProvider
{
    public const FILAMENT_THUMBNAIL_CONVERSION_DEFINITION = 'filament-thumbnail';

    public function configurePackage(Package $package): void
    {
        $package
            ->name('filament-image-library')
            ->hasConfigFile()
            ->hasTranslations()
            ->hasViews()
            ->hasInstallCommand(function (InstallCommand $command) {
                $composerFile = file_get_contents(__DIR__ . '/../composer.json');

                if ($composerFile) {
                    $githubRepo = json_decode($composerFile, true)['homepage'] ?? null;

                    if ($githubRepo) {
                        $command
                            ->askToStarRepoOnGitHub($githubRepo);
                    }
                }
            });
    }

    public function packageBooted(): void
    {
        parent::packageBooted();

        FilamentAsset::register([
            Js::make('filament-image-library', __DIR__ . '/../dist/js/filament-image-library.js'),
        ], 'outerweb/filament-image-library');

        ImageLibrary::addConversionDefinition(
            ConversionDefinition::make()
                ->name(self::FILAMENT_THUMBNAIL_CONVERSION_DEFINITION)
                ->label('filament-image-library::translations.conversions.labels.thumbnail')
                ->translateLabel()
                ->aspectRatio('4:3')
                ->createSync()
        );
    }
}
