<x-dynamic-component
	:component="$getFieldWrapperView()"
	:field="$field"
>
	<div class="mb-4">
		{{ $getChildSchema('search') }}
	</div>
	<div
		class="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4"
		x-data="{ state: $wire.{{ $applyStateBindingModifiers("\$entangle('{$getStatePath()}')") }}, allowsMultiple: {{ $getMultiple() ? 'true' : 'false' }} }"
	>
		@forelse ($getSourceImages() as $sourceImage)
			<template x-if="state !== undefined">
				<div
					@class([
						'rounded-xl overflow-hidden shadow relative',
						'bg-white dark:bg-gray-900 ring',
					])
					x-bind:class="{
					    'ring-2 ring-primary-600 dark:ring-primary-500': state.images?.includes({{ $sourceImage->getKey() }}),
					    'ring-gray-950/5 dark:ring-white/10': !state.images?.includes({{ $sourceImage->getKey() }}),
					}"
					x-on:click="$refs['checkbox-{{ $sourceImage->getKey() }}'].click()"
				>
					<div class="relative w-full aspect-square group overflow-hidden">
						<img
							:src="'{{ $sourceImage->url() }}'"
							:alt="'{{ $sourceImage->alt_text }}'"
							class="w-full h-full object-cover object-center transition-all duration-500 ease-in-out group-hover:blur-md z-0"
						/>
						<img
							:src="'{{ $sourceImage->url() }}'"
							:alt="'{{ $sourceImage->alt_text }}'"
							class="w-full h-full object-contain object-center absolute inset-0 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out pointer-events-none z-1"
						/>
					</div>
					<div @class([
						'absolute top-0 left-0 right-0 z-2',
						'flex justify-between items-stretch w-full p-2',
					])>
						<div
							@class(array: [
									'flex justify-end items-center gap-3',
									'p-3 rounded-xl backdrop-blur-sm ring',
									'bg-white/80 dark:bg-black/80 ring-gray-950/5 dark:ring-white/10',
								]
							)
							x-on:click.stop
						>
							<x-filament::input.checkbox
								x-ref="checkbox-{{ $sourceImage->getKey() }}"
								x-model.number="state.images"
								:value="$sourceImage->getKey()"
								x-on:click.stop="allowsMultiple ? null : (state.images = [{{ $sourceImage->getKey() }}])"
								x-tooltip="{
                                    content: state.images?.includes({{ $sourceImage->getKey() }})
                                        ? '{{ __('filament-image-library::translations.tooltips.deselect') }}'
                                        : '{{ __('filament-image-library::translations.tooltips.select') }}',
                                    theme: $store.theme,
                                    allowHTML: false,
                                }"
							/>
						</div>
					</div>
				</div>
			</template>
		@empty
			<p class="text-gray-500 dark:text-gray-400 col-span-full text-center">
				{{ __('filament-image-library::translations.forms.placeholders.no_images_found') }}
			</p>
		@endforelse
	</div>
	<div class="flex items-center justify-center gap-4 mt-4">
		{{ $getAction('previousPage') }}
		{{ $getAction('nextPage') }}
	</div>
</x-dynamic-component>
