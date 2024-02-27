<x-dynamic-component
	:component="$getFieldWrapperView()"
	:field="$field"
	x-data="{
    allowsMultiple: {{ json_encode($getAllowsMultiple()) }},
    allowsUpload: {{ json_encode($getAllowsUpload()) }},
    allowsExisting: {{ json_encode($getAllowsExisting()) }},
    allowsOrderingImages: {{ json_encode($getAllowsOrderingImages()) }},
    state: $wire.$entangle('{{ $getStatePath() }}'),
    init() {
        const self = this;
        const sortable = ImageLibrarySortable.create(self.$refs.reorderContainer, {
            sort: true,
            handle: '[data-reorder-handle]',
            animation: 150,
            ghostClass: '!bg-primary-500/20',
            onUpdate: function(event) {
                self.state = sortable.toArray();
            },
        });
    },
}"
>
	<div
		class="grid grid-cols-2 gap-3 mb-2 xl:grid-cols-3"
		x-ref="reorderContainer"
	>
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
				@if ($getAllowsImageCrop() || $getAllowsImageEdit() || $getAllowsImageDeselect())
					<div class="flex flex-wrap items-center justify-end gap-3 p-3">
						@if ($getAllowsOrderingImages() && $getAllowsMultiple())
							<x-filament::button
								icon="heroicon-o-arrows-right-left"
								color="gray"
								class="mr-auto"
								tooltip="{{ __('filament-image-library::translations.actions.reorder') }}"
								data-reorder-handle
							/>
						@endif
						@if ($getAllowsImageCrop())
							{{ $getAction('crop')([
							    'id' => $image->id,
							]) }}
						@endif
						@if ($getAllowsImageEdit())
							{{ $getAction('edit')([
							    'id' => $image->id,
							]) }}
						@endif
						@if ($getAllowsImageDeselect())
							{{ $getAction('deselect')([
							    'id' => $image->id,
							]) }}
						@endif
					</div>
				@endif
			</div>
		@empty
			<div class="py-5 text-center text-gray-500 col-span-full">
				<p>
					@if ($getAllowsMultiple())
						{{ __('filament-image-library::translations.form.messages.no_images_selected') }}
					@else
						{{ __('filament-image-library::translations.form.messages.no_image_selected') }}
					@endif
				</p>
				<p class="mt-2 text-sm">
					@if ($getAllowsMultiple())
						{{ __('filament-image-library::translations.form.messages.upload_or_select_existing_multiple') }}
					@else
						{{ __('filament-image-library::translations.form.messages.upload_or_select_existing') }}
					@endif
				</p>
			</div>
		@endforelse
	</div>

	<div class="flex items-center justify-center gap-3">
		@if ($getAllowsUpload())
			{{ $getAction('upload') }}
		@endif
		@if ($getAllowsExisting())
			{{ $getAction('selectExisting') }}
		@endif
	</div>

	<x-image-library-scripts />
</x-dynamic-component>
