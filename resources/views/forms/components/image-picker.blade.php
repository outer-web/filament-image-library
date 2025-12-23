@use('Illuminate\Support\Js')

<x-dynamic-component
	:component="$getFieldWrapperView()"
	:field="$field"
	class="@container"
>
	@php
		$usedSourceImages = $getUsedSourceImages();
	@endphp

	<div
		@class([
			'gap-4 py-4',
			'grid grid-cols-1 @lg:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4' => $getAllowsMultiple(),
			'flex items-center justify-center' => !$getAllowsMultiple(),
		])
		@if ($getSortable()) x-sort="$wire.mountAction('sort', { uuid: $item || 0, position: $position }, {{ Js::from($getAction('sort')->getContext()) }})" @endif
	>
		@forelse ($getRenderableImages() as $image)
			@php
				$sourceImage = collect($usedSourceImages)->firstWhere(
				    fn($sourceImage): bool => $sourceImage->getKey() === $image['source_image_key'],
				);
			@endphp

			<div
				@class([
					'rounded-xl overflow-hidden shadow relative',
					'bg-white dark:bg-gray-900 ring',
					'ring-gray-950/5 dark:ring-white/10',
					'max-w-[300px]' => !$getAllowsMultiple(),
				])
				x-sort:item="'{{ $image['filament_uuid'] }}'"
			>
				<div class="relative w-full aspect-square group overflow-hidden">
					<img
						:src="'{{ $sourceImage->url() }}'"
						:alt="'{{ $image['alt_text'][app()->getLocale()] ?? null }}'"
						class="w-full h-full object-cover object-center transition-all duration-500 ease-in-out group-hover:blur-md z-0"
					/>
					<img
						:src="'{{ $sourceImage->url() }}'"
						:alt="'{{ $image['alt_text'][app()->getLocale()] ?? null }}'"
						class="w-full h-full object-contain object-center absolute inset-0 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out pointer-events-none z-1"
					/>
				</div>
				<div @class([
					'absolute top-0 left-0 right-0 z-2',
					'flex justify-between items-stretch w-full',
					'p-3',
				])>
					<div
						@class(array: [
								'flex justify-end items-center',
								'gap-3',
								'p-3 rounded-xl backdrop-blur-sm ring',
								'bg-white/80 dark:bg-black/80 ring-gray-950/5 dark:ring-white/10',
								'opacity-0' => !$getSortable(),
							]
						)
						x-on:click.stop
					>
						@if ($getSortable())
							<x-filament::icon-button
								icon="heroicon-o-bars-2"
								x-sort:handle
								color="gray"
								x-tooltip="{
                                content: '{{ __('filament-image-library::translations.tooltips.drag_handle') }}',
                                theme: $store.theme,
                                allowHTML: false,
                            }"
							/>
						@endif
					</div>
					<div
						@class(array: [
								'flex justify-end items-center',
								'gap-3',
								'p-3 rounded-xl backdrop-blur-sm ring',
								'bg-white/80 dark:bg-black/80 ring-gray-950/5 dark:ring-white/10',
							]
						)
						x-on:click.stop
					>
						{{ $getAction('edit')([
						    'uuid' => $image['filament_uuid'],
						]) }}
						{{ $getAction('crop')([
						    'uuid' => $image['filament_uuid'],
						]) }}
						{{ $getAction('detach')([
						    'uuid' => $image['filament_uuid'],
						]) }}
					</div>
				</div>
			</div>
		@empty
			<p class="text-gray-500 dark:text-gray-400 col-span-full text-center">
				{{ $getAllowsMultiple()
				    ? __('filament-image-library::translations.forms.placeholders.no_images_selected')
				    : __('filament-image-library::translations.forms.placeholders.no_image_selected') }}
			</p>
		@endforelse
	</div>
</x-dynamic-component>
