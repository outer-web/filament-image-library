<x-dynamic-component
	:component="$getEntryWrapperView()"
	:entry="$entry"
	class="@container"
>
	<div class="grid grid-cols-1 @lg:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4 gap-4">
		@forelse ($getImagesByUniqueFilamentUuids() as $image)
			<div @class([
				'rounded-xl overflow-hidden shadow relative',
				'bg-white dark:bg-gray-900 ring',
				'ring-gray-950/5 dark:ring-white/10',
			])>
				<div class="relative w-full aspect-square group overflow-hidden">
					<img
						:src="'{{ $image->sourceImage->url() }}'"
						:alt="'{{ $image->sourceImage->alt_text }}'"
						class="w-full h-full object-cover object-center transition-all duration-500 ease-in-out group-hover:blur-md z-0"
					/>
					<img
						:src="'{{ $image->sourceImage->url() }}'"
						:alt="'{{ $image->sourceImage->alt_text }}'"
						class="w-full h-full object-contain object-center absolute inset-0 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out pointer-events-none z-1"
					/>
				</div>
				<div @class([
					'absolute top-0 left-0 right-0 z-2',
					'flex justify-between items-stretch w-full p-2',
				])>
					<div>
						{{-- Empty --}}
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
						{{ $getAction('view')([
						    'uuid' => $image->custom_properties['filament_uuid'],
						]) }}
					</div>
				</div>
			</div>
		@empty
			<p class="fi-in-placeholder">
				{{ $getPlaceholder() }}
			</p>
		@endforelse
	</div>
</x-dynamic-component>
