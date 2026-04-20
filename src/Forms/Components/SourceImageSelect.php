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

    protected string $view = 'filament-image-library::forms.components.source-image-select';

    protected bool|Closure $acceptsMultiple = false;

    protected string|Closure|null $defaultDisk = null;

    protected array|Closure $disks = [];

    public function setUp(): void
    {
        parent::setUp();

        $this->afterStateHydrated(function (SourceImageSelect $component, array|SourceImage|null $state): void {
            $images = is_array($state) ? ($state['images'] ?? $state) : [$state];

            $component->state([
                'images' => collect($images)
                    ->map(function ($item) {
                        if ($item instanceof SourceImage) {
                            return $item->getKey();
                        }

                        return $item;
                    })
                    ->filter(fn ($item): bool => ! blank($item))
                    ->values()
                    ->all(),
                'search' => is_array($state) ? ($state['search'] ?? '') : '',
                'page' => is_array($state) ? max(1, (int) ($state['page'] ?? 1)) : 1,
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
                        $this->setPage(1);
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
        $this->setPage($this->getPage() + 1);
    }

    public function previousPage(): void
    {
        if ($this->getPage() > 1) {
            $this->setPage($this->getPage() - 1);
        }
    }

    public function hasNextPage(): bool
    {
        return $this->getSourceImages()->hasMorePages();
    }

    public function hasPreviousPage(): bool
    {
        return $this->getPage() > 1;
    }

    public function getSourceImages(): LengthAwarePaginator
    {
        $search = $this->getSearch();

        return ImageLibrary::getSourceImageModel()::query()
            ->whereIn('disk', array_keys($this->getDisks()))
            ->when($search !== '', function ($query) use ($search) {
                $query->where('name', 'like', '%'.$search.'%')
                    ->orWhere('alt_text', 'like', '%'.$search.'%');
            })
            ->latest()
            ->paginate(
                perPage: $this->itemsPerPage,
                page: $this->getPage()
            );
    }

    public function getPage(): int
    {
        return max(1, (int) ($this->getState()['page'] ?? 1));
    }

    public function getSearch(): string
    {
        return (string) ($this->getState()['search'] ?? '');
    }

    protected function setPage(int $page): void
    {
        $this->state([
            ...($this->getState() ?? []),
            'page' => max(1, $page),
        ]);
    }
}
