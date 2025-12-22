<?php

declare(strict_types=1);

namespace Outerweb\FilamentImageLibrary\Infolists\Components;

use Closure;
use Filament\Actions\Action;
use Filament\Infolists\Components\Entry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Collection;
use LogicException;
use Outerweb\ImageLibrary\Contracts\ConfiguresBreakpoints;
use Outerweb\ImageLibrary\Facades\ImageLibrary as ImageLibraryFacade;
use Outerweb\ImageLibrary\Models\Image;

class ImageEntry extends Entry
{
    protected string $view = 'filament-image-library::infolists.components.image-entry';

    protected ?Closure $modifyQueryUsing = null;

    public function setUp(): void
    {
        parent::setUp();

        $this->state(function (): Collection {
            $record = $this->getModelInstance();
            $relationshipName = $this->getName();

            if ($record->hasAttribute($relationshipName) || (! $record->isRelation($relationshipName))) {
                throw new LogicException("The relationship [{$relationshipName}] does not exist on the model [{$this->getModel()}].");
            }

            $query = $record->{$relationshipName}()
                ->ordered();

            if (! is_null($this->modifyQueryUsing)) {
                $query = $this->evaluate(
                    $this->modifyQueryUsing,
                    [
                        'query' => $query,
                        'record' => $record,
                        'relationshipName' => $relationshipName,
                    ]
                );
            }

            return $query->get();
        });

        $this->registerActions([
            $this->viewAction(),
        ]);
    }

    public function getImagesByUniqueFilamentUuids(): Collection
    {
        $images = $this->getState() ?? [];

        return collect($images)
            ->unique(function (Image $image) {
                return $image->custom_properties['filament_uuid'] ?? null;
            });
    }

    public function viewAction(): Action
    {
        return Action::make('view')
            ->iconButton()
            ->icon(Heroicon::OutlinedEye)
            ->color('gray')
            ->tooltip(__('filament-image-library::translations.tooltips.view'))
            ->modalFooterActions(null)
            ->modalSubmitAction(false)
            ->modalCancelAction(false)
            ->schema(function (array $arguments): array {
                $imageUuid = $arguments['uuid'];

                $images = collect($this->getState() ?? [])
                    ->filter(fn (Image $image) => ($image->custom_properties['filament_uuid'] ?? null) === $imageUuid);

                return [
                    Tabs::make('image_tabs')
                        ->tabs(
                            $images->map(function (Image $image) {
                                $context = $image->context;

                                return Tab::make($context->getKey())
                                    ->label($context->getLabel())
                                    ->schema([
                                        $context->getUseBreakpoints()
                                            ? Tabs::make('breakpoints')
                                                ->contained(false)
                                                ->tabs(
                                                    collect(ImageLibraryFacade::getBreakpointEnum()::sortedCases())
                                                        ->map(function (ConfiguresBreakpoints $breakpoint) use ($image): Tab {
                                                            return Tab::make($breakpoint->value)
                                                                ->label($breakpoint->getLabel())
                                                                ->schema([
                                                                    TextEntry::make($image->uuid)
                                                                        ->state(function () use ($image, $breakpoint): string {
                                                                            $url = $image->urlForBreakpoint($breakpoint);

                                                                            return "<img src=\"{$url}\" alt=\"{$image->alt_text}\" />";
                                                                        })
                                                                        ->hiddenLabel()
                                                                        ->html(),
                                                                ]);
                                                        })
                                                        ->all()
                                                )
                                            : TextEntry::make($image->uuid)
                                                ->state(function () use ($image): string {
                                                    $url = $image->urlForBreakpoint();

                                                    return "<img src=\"{$url}\" alt=\"{$image->alt_text}\" />";
                                                })
                                                ->hiddenLabel()
                                                ->html(),
                                    ]);
                            })
                                ->all()
                        ),
                ];
            });
    }

    public function modifyQueryUsing(Closure $callback): static
    {
        $this->modifyQueryUsing = $callback;

        return $this;
    }
}
