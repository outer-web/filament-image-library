<x-dynamic-component
	:component="$getEntryWrapperView()"
	:entry="$entry"
>
	<div class="grid grid-cols-2 gap-3 mb-2 xl:grid-cols-3">
		@forelse ($getImages() as $image)
			<div
				class="relative overflow-hidden bg-white rounded-lg ring-1 ring-gray-950/10 dark:ring-white/20"
				data-reorder-item
				data-id="{{ $image->id }}"
				wire-key="{{ $image->id }}-{{ $getStatePath() }}"
			>
				<x-image-library-image
					:image="$image"
					conversion="filament-thumbnail"
					class="w-full"
					draggable="false"
				/>
			</div>
		@empty
			<div>
				{{ $getPlaceholder() }}
			</div>
		@endforelse
	</div>

	<x-image-library-scripts />
</x-dynamic-component>
