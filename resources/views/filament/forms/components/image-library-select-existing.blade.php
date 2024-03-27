@php
	$images = $getImages();
@endphp

<x-dynamic-component
	:component="$getFieldWrapperView()"
	:field="$field"
	x-data="{
    allowsMultiple: {{ json_encode($getAllowsMultiple()) }},
    state: $wire.$entangle('{{ $getStatePath() }}'),
    currentPage: 1,
    itemsPerPage: {{ $getItemsPerPage() }},
    totalItems: {{ count($images ?? []) }},
    showItem(index) {
        return index >= (this.currentPage - 1) * this.itemsPerPage && index < this.currentPage * this.itemsPerPage;
    },
    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    },
    nextPage() {
        if (this.currentPage < Math.ceil(this.totalItems / this.itemsPerPage)) {
            this.currentPage++;
        }
    },
    showPreviousButton() {
        return this.currentPage > 1 && this.totalItems > this.itemsPerPage;
    },
    showNextButton() {
        return this.currentPage < Math.ceil(this.totalItems / this.itemsPerPage) && this.totalItems > this.itemsPerPage;
    },
}"
>
	<div
		class="flex items-center justify-between"
		x-show="showPreviousButton() || showNextButton()"
	>
		<x-filament::button
			color="gray"
			x-bind:class="{ 'opacity-0': !showPreviousButton() }"
			x-on:click="previousPage"
		>
			{{ __('filament-image-library::translations.pagination.previous') }}
		</x-filament::button>
		<x-filament::button
			color="gray"
			x-bind:class="{ 'opacity-0': !showNextButton() }"
			x-on:click="nextPage"
		>
			{{ __('filament-image-library::translations.pagination.next') }}
		</x-filament::button>
	</div>
	<div class="grid grid-cols-2 gap-3 mb-2 xl:grid-cols-3">
		@forelse ($images as $image)
			<label
				wire:key="image-{{ $image->id }}"
				class="relative bg-white rounded-lg cursor-pointer overflhidden ring-1 ring-gray-950/10 dark:ring-white/20"
				x-show="showItem({{ $loop->index }})"
			>
				<input
					type="{{ $getAllowsMultiple() ? 'checkbox' : 'radio' }}"
					:checked="state?.includes({{ $image->id }})"
					value="{{ $image->id }}"
					x-on:change="if (! allowsMultiple) state = [{{ $image->id }}]; else state?.includes({{ $image->id }}) ? state = state.filter(id => id !== {{ $image->id }}) : state = [...state, {{ $image->id }}]"
					class="absolute inset-0 opacity-0"
				/>
				<x-image-library-image
					:image="$image"
					conversion="filament-thumbnail"
					class="w-full"
					draggable="false"
				/>
				<div class="flex flex-wrap items-center justify-end gap-3 p-3">
					<x-filament::button
						color="gray"
						x-show="! state?.includes({{ $image->id }})"
						class="pointer-events-none"
					>
						{{ __('filament-image-library::translations.actions.select') }}
					</x-filament::button>
					<x-filament::button
						color="success"
						icon="heroicon-o-check"
						x-show="state?.includes({{ $image->id }})"
						class="pointer-events-none"
					>
						{{ __('filament-image-library::translations.states.selected') }}
					</x-filament::button>
				</div>
			</label>
		@empty
			<div class="py-5 text-center text-gray-500 col-span-full">
				{{ __('filament-image-library::translations.no_images_found') }}
			</div>
		@endforelse
	</div>
	<div
		class="flex items-center justify-between"
		x-show="showPreviousButton() || showNextButton()"
	>
		<x-filament::button
			color="gray"
			x-bind:class="{ 'opacity-0': !showPreviousButton() }"
			x-on:click="previousPage"
		>
			{{ __('filament-image-library::translations.pagination.previous') }}
		</x-filament::button>
		<x-filament::button
			color="gray"
			x-bind:class="{ 'opacity-0': !showNextButton() }"
			x-on:click="nextPage"
		>
			{{ __('filament-image-library::translations.pagination.next') }}
		</x-filament::button>
	</div>
</x-dynamic-component>
