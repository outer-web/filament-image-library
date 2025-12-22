<?php

declare(strict_types=1);

namespace Outerweb\FilamentImageLibrary\Forms\Components;

use Closure;
use Exception;
use Filament\Forms\Components\Field;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Support\Exceptions\Halt;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use Outerweb\FilamentImageLibrary\ImageLibraryPlugin;
use Outerweb\ImageLibrary\Facades\ImageLibrary as ImageLibraryFacade;
use Outerweb\ImageLibrary\Models\SourceImage;

class SourceImageUpload extends Field
{
    protected string $view = 'filament-image-library::forms.components.source-image-upload';

    protected bool|Closure $acceptsMultiple = false;

    protected string|Closure|null $defaultDisk = null;

    protected array|Closure $disks = [];

    protected int|Closure|null $minSize = null;

    protected int|Closure|null $maxSize = null;

    public function setUp(): void
    {
        parent::setUp();

        $this->schema([
            Select::make('disk')
                ->label(__('filament-image-library::translations.forms.labels.disk'))
                ->options(fn () => $this->getDisks())
                ->default(fn () => $this->getDefaultDisk())
                ->dehydrated(true)
                ->required(),
            FileUpload::make('source_images')
                ->label(__('filament-image-library::translations.forms.labels.images'))
                ->image()
                ->multiple(fn () => $this->getMultiple())
                ->required()
                ->minFiles(1)
                ->panelLayout('grid')
                ->storeFiles(false)
                ->minSize(fn () => $this->getMinSize())
                ->maxSize(fn () => $this->getMaxSize()),
        ]);

        $this->dehydrateStateUsing(function (array $state): array|SourceImage {
            try {
                $images = Collection::wrap($state['source_images'])
                    ->map(function (TemporaryUploadedFile $image) use ($state): SourceImage {
                        return ImageLibraryFacade::upload($image, [
                            'disk' => $state['disk'],
                        ]);
                    });

                return $this->getMultiple()
                    ? $images->all()
                    : $images->first();
            } catch (Exception $exception) {
                report($exception);

                throw new Halt(trans_choice(
                    'filament-image-library::translations.notifications.upload.failure',
                    $this->getMultiple() ? count($state['source_images']) : 1
                ));
            }
        });
    }

    public function multiple(bool|Closure $condition = true): static
    {
        $this->acceptsMultiple = $condition;

        return $this;
    }

    public function getMultiple(): bool
    {
        return $this->evaluate($this->acceptsMultiple);
    }

    public function disks(array|Closure $disks): static
    {
        $this->disks = $disks;

        return $this;
    }

    public function getDisks(): array
    {
        $array = $this->evaluate($this->disks);

        if (! is_array($array) || count($array) === 0) {
            $array = ImageLibraryPlugin::get()->getDisks();
        }

        if (Arr::isAssoc($array)) {
            return $array;
        }

        return array_combine($array, array_map(fn ($disk) => Str::title($disk), $array));
    }

    public function defaultDisk(string|Closure|null $disk): static
    {
        $this->defaultDisk = $disk;

        return $this;
    }

    public function getDefaultDisk(): ?string
    {
        $disk = $this->evaluate($this->defaultDisk);

        if (is_null($disk)) {
            return array_key_first($this->getDisks());
        }

        return $disk;
    }

    public function minSize(int|Closure|null $sizeInKilobytes): static
    {
        $this->minSize = $sizeInKilobytes;

        return $this;
    }

    public function getMinSize(): int
    {
        /** @var ?int $minSize */
        $minSize = $this->evaluate($this->minSize);

        return $minSize ?? ImageLibraryPlugin::get()->getMinUploadSize();
    }

    public function maxSize(int|Closure|null $sizeInKilobytes): static
    {
        $this->maxSize = $sizeInKilobytes;

        return $this;
    }

    public function getMaxSize(): int
    {
        /** @var ?int $maxSize */
        $maxSize = $this->evaluate($this->maxSize);

        return $maxSize ?? ImageLibraryPlugin::get()->getMaxUploadSize();
    }
}
