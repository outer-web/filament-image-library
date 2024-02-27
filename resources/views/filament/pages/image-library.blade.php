<x-filament::page>
	<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mb-2">
		@forelse ($images as $image)
			<div
				class="relative overflhidden rounded-lg ring-1 ring-gray-950/10 dark:ring-white/20 bg-white"
			>
				<x-image-library-image
					:image="$image"
					conversion="filament-thumbnail"
					class="w-full"
					draggable="false"
				/>
				<div class="flex flex-wrap justify-end items-center gap-3 p-3">
					{{ $this->getCropAction()([
					    'id' => $image->id,
					]) }}
					{{ $this->getEditAction()([
					    'id' => $image->id,
					]) }}
					{{ $this->getDeleteAction()([
					    'id' => $image->id,
					]) }}
				</div>
			</div>
		@empty
			<div class="text-gray-500 col-span-full text-center py-5">
				{{ __('filament-image-library::translations.no_images_found') }}
			</div>
		@endforelse
	</div>
	<x-filament::pagination
		:paginator="$images"
		:page-options="[12, 24, 48, 96]"
		current-page-option-property="itemsPerPage"
	/>
	<x-image-library-scripts />
</x-filament::page>
