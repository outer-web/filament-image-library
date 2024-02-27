<x-dynamic-component
	:component="$getFieldWrapperView()"
	:field="$field"
	x-data="{
    allowsMultiple: {{ json_encode($getAllowsMultiple()) }},
    state: $wire.$entangle('{{ $getStatePath() }}'),
}"
>
	@php
		$images = $getImages();
	@endphp
	<div class="grid grid-cols-2 xl:grid-cols-3 gap-3 mb-2">
		@forelse ($images as $image)
			<label
				wire:key="image-{{ $image->id }}"
				class="relative overflhidden rounded-lg ring-1 ring-gray-950/10 dark:ring-white/20 bg-white cursor-pointer"
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
				<div class="flex flex-wrap justify-end items-center gap-3 p-3">
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
			<div class="text-gray-500 col-span-full text-center py-5">
				{{ __('filament-image-library::translations.no_images_found') }}
			</div>
		@endforelse
	</div>
	<x-filament::pagination
		:paginator="$images"
		current-page-option-property="itemsPerPage"
	/>
</x-dynamic-component>
