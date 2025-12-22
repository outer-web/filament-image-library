<?php

declare(strict_types=1);

namespace Outerweb\FilamentImageLibrary;

use BackedEnum;
use Closure;
use Filament\Contracts\Plugin;
use Filament\Panel;
use Filament\Support\Concerns\EvaluatesClosures;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Facades\Config;
use Outerweb\FilamentImageLibrary\Pages\ImageLibrary as ImageLibraryPage;
use UnitEnum;

class ImageLibraryPlugin implements Plugin
{
    use EvaluatesClosures;

    protected ?Closure $canAccess = null;

    protected string|UnitEnum|null $navigationGroup = null;

    protected string|BackedEnum|null $navigationIcon = null;

    protected ?int $navigationSort = null;

    protected array|Closure $disks = [];

    protected int|Closure|null $minUploadSize = null;

    protected int|Closure|null $maxUploadSize = null;

    public static function make(): static
    {
        return app(static::class);
    }

    public static function get(): static
    {
        /** @var static $plugin */
        $plugin = filament(app(static::class)->getId());

        return $plugin;
    }

    public function getId(): string
    {
        return 'outerweb-filament-image-library';
    }

    public function register(Panel $panel): void
    {
        $panel->pages([
            ImageLibraryPage::class,
        ]);
    }

    // @codeCoverageIgnoreStart
    public function boot(Panel $panel): void {}
    // @codeCoverageIgnoreEnd

    public function canAccess(?Closure $callback): self
    {
        $this->canAccess = $callback;

        return $this;
    }

    public function getCanAccess(): bool
    {
        return $this->evaluate($this->canAccess, $this->getEvaluationInjections()) ?? true;
    }

    public function navigationGroup(string|UnitEnum|null $group): self
    {
        $this->navigationGroup = $group;

        return $this;
    }

    public function getNavigationGroup(): string|UnitEnum|null
    {
        return $this->navigationGroup;
    }

    public function navigationIcon(string|BackedEnum|null $icon): self
    {
        $this->navigationIcon = $icon;

        return $this;
    }

    public function getNavigationIcon(): string|BackedEnum|null
    {
        return $this->navigationIcon ?? Heroicon::OutlinedPhoto;
    }

    public function navigationSort(?int $sort): self
    {
        $this->navigationSort = $sort;

        return $this;
    }

    public function getNavigationSort(): ?int
    {
        return $this->navigationSort;
    }

    public function disks(array|Closure $disks): self
    {
        $this->disks = $disks;

        return $this;
    }

    public function getDisks(): array
    {
        $disks = $this->evaluate($this->disks, $this->getEvaluationInjections());

        if (! is_array($disks) || count($disks) === 0) {
            $disks = [Config::string('image-library.defaults.disk', 'public')];
        }

        return $disks;
    }

    public function minUploadSize(int|Closure|null $sizeInKilobytes): self
    {
        $this->minUploadSize = $sizeInKilobytes;

        return $this;
    }

    public function getMinUploadSize(): int
    {
        return $this->evaluate($this->minUploadSize, $this->getEvaluationInjections()) ?? 0;
    }

    public function maxUploadSize(int|Closure|null $sizeInKilobytes): self
    {
        $this->maxUploadSize = $sizeInKilobytes;

        return $this;
    }

    public function getMaxUploadSize(): int
    {
        return $this->evaluate($this->maxUploadSize, $this->getEvaluationInjections()) ?? PHP_INT_MAX;
    }

    private function getEvaluationInjections(): array
    {
        return [
            'panel' => filament()->getPanel(),
            'plugin' => $this,
        ];
    }
}
