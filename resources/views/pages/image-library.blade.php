<x-filament-panels::page x-data="{ selectedImages: $wire.entangle('selectedImages').live }">
	@if ($sourceImages->isNotEmpty())
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
			@foreach ($sourceImages as $sourceImage)
				<div
					@class([
						'rounded-xl overflow-hidden shadow relative',
						'bg-white dark:bg-gray-900 ring',
					])
					x-bind:class="{
					    'ring-2 ring-primary-600 dark:ring-primary-500': selectedImages.includes({{ $sourceImage->getKey() }}),
					    'ring-gray-950/5 dark:ring-white/10': !selectedImages.includes({{ $sourceImage->getKey() }}),
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
								x-model.number="selectedImages"
								:value="$sourceImage->getKey()"
								x-tooltip="{
                                    content: selectedImages.includes({{ $sourceImage->getKey() }})
                                        ? '{{ __('filament-image-library::translations.tooltips.deselect') }}'
                                        : '{{ __('filament-image-library::translations.tooltips.select') }}',
                                    theme: $store.theme,
                                    allowHTML: false,
                                }"
							/>
						</div>
						<div
							@class(array: [
									'flex justify-end items-center gap-3',
									'p-3 rounded-xl backdrop-blur-sm ring',
									'bg-white/80 dark:bg-black/80 ring-gray-950/5 dark:ring-white/10',
								]
							)
							x-on:click.stop
						>
							{{ $this->editAction()([
							    'recordId' => $sourceImage->getKey(),
							]) }}
							{{ $this->deleteAction()([
							    'recordId' => $sourceImage->getKey(),
							]) }}
						</div>
					</div>
				</div>
			@endforeach
		</div>
		<x-filament::pagination
			:paginator="$sourceImages"
			:page-options="[12, 24, 48, 96]"
			current-page-option-property="itemsPerPage"
		/>
	@else
		<x-filament::empty-state icon="heroicon-o-photo">
			<x-slot name="heading">
				{{ __('filament-image-library::translations.page.empty_state.heading') }}
			</x-slot>
			<x-slot name="footer">
				{{ $this->uploadAction() }}
			</x-slot>
		</x-filament::empty-state>
	@endif
</x-filament-panels::page>
