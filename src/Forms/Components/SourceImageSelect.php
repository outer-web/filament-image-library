<?php

declare(strict_types=1);

namespace Outerweb\FilamentImageLibrary\Forms\Components;

use Closure;
use Filament\Actions\Action;
use Filament\Forms\Components\Field;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\TextInput;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Outerweb\FilamentImageLibrary\ImageLibraryPlugin;
use Outerweb\ImageLibrary\Facades\ImageLibrary;
use Outerweb\ImageLibrary\Models\SourceImage;

class SourceImageSelect extends Field
{
    public int $itemsPerPage = 12;

    public int $page = 1;

    protected string $view = 'filament-image-library::forms.components.source-image-select';

    protected bool|Closure $acceptsMultiple = false;

    protected string|Closure|null $defaultDisk = null;

    protected array|Closure $disks = [];

    public function setUp(): void
    {
        parent::setUp();

        $this->afterStateHydrated(function (SourceImageSelect $component, array|SourceImage|null $state): void {
            $component->state([
                'images' => collect($state ?? [])
                    ->filter(fn ($item): bool => $item instanceof SourceImage)
                    ->all(),
                'search' => '',
            ]);
        });

        $this->dehydrateStateUsing(function (array $state): array {
            $images = collect($state['images'] ?? [])
                ->map(function ($item): ?SourceImage {
                    if (is_null($item)) {
                        return null;
                    }

                    if ($item instanceof SourceImage) {
                        return $item;
                    }

                    return ImageLibrary::getSourceImageModel()::query()
                        ->find($item);
                })
                ->filter()
                ->all();

            return [
                'images' => $images,
            ];
        });

        $this->childComponents(
            [
                TextInput::make('search')
                    ->label(__('filament-image-library::translations.forms.labels.search'))
                    ->dehydrated(false)
                    ->reactive()
                    ->placeholder(__('filament-image-library::translations.forms.placeholders.search'))
                    ->columnSpanFull()
                    ->afterStateUpdated(function (): void {
                        $this->page = 1;
                    })
                    ->default(''),
            ],
            'search'
        );

        $this->childComponents([
            Hidden::make('images')
                ->dehydrated(true),
        ]);

        $this->registerActions([
            $this->nextPageAction(),
            $this->previousPageAction(),
        ]);
    }

    public function nextPageAction(): Action
    {
        return Action::make('nextPage')
            ->button()
            ->color('gray')
            ->size('sm')
            ->label(__('filament-image-library::translations.actions.next'))
            ->hidden(function (): bool {
                return ! $this->hasNextPage();
            })
            ->action(function (): void {
                $this->nextPage();
            });
    }

    public function previousPageAction(): Action
    {
        return Action::make('previousPage')
            ->button()
            ->color('gray')
            ->size('sm')
            ->label(__('filament-image-library::translations.actions.previous'))
            ->hidden(function (): bool {
                return ! $this->hasPreviousPage();
            })
            ->action(function (): void {
                $this->previousPage();
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

    public function nextPage(): void
    {
        $this->page++;
    }

    public function previousPage(): void
    {
        if ($this->page > 1) {
            $this->page--;
        }
    }

    public function hasNextPage(): bool
    {
        return $this->getSourceImages()->hasMorePages();
    }

    public function hasPreviousPage(): bool
    {
        return $this->page > 1;
    }

    public function getSourceImages(): LengthAwarePaginator
    {
        return ImageLibrary::getSourceImageModel()::query()
            ->whereIn('disk', array_keys($this->getDisks()))
            ->when($this->getState()['search'] !== '', function ($query) {
                $query->where('name', 'like', '%'.$this->getState()['search'].'%')
                    ->orWhere('alt_text', 'like', '%'.$this->getState()['search'].'%');
            })
            ->paginate(
                perPage: $this->itemsPerPage,
                page: $this->page
            );
    }
}
