<x-dynamic-component
	:component="$getFieldWrapperView()"
	:field="$field"
	x-data="{
    state: $wire.$entangle('{{ $getStatePath() }}'),
    cropper: null,
    cropperLoaded: false,
    initialStateSet: false,
    initCropper() {
        const self = this;
        self.cropperLoaded = false;
        self.initialStateSet = false;
        self.cropper = new ImageLibraryCropper(document.getElementById('cropper-{{ $getImage()->uuid }}-{{ $getConversion()->id }}'), {
            aspectRatio: {{ $getConversionAspectRatio() }},
            viewMode: 2,
            dragMode: 'move',
            ready() {
                self.cropper.setData({
                    width: self.state.width,
                    height: self.state.height,
                    x: self.state.x,
                    y: self.state.y,
                });
                self.initialStateSet = true;
            },
            crop(event) {
                if (!self.initialStateSet) {
                    return;
                }

                self.state = {
                    ...self.state,
                    width: Math.round(event.detail.width),
                    height: Math.round(event.detail.height),
                    x: Math.round(event.detail.x),
                    y: Math.round(event.detail.y),
                };
            },
        });
        setTimeout(() => {
            self.cropperLoaded = true;
        }, 400);
    },
    init() {
        const self = this;

        if (self.state === null) {
            return;
        }

        if (this.tab) {
            this.$watch('tab', function(value, oldValue) {
                if (value !== oldValue) {
                    self.cropper.destroy();
                    self.initCropper();
                }
            });
        }

        if (self.cropper) {
            self.cropper.destroy();
        }

        self.$nextTick(() => {
            setTimeout(() => {
                self.initCropper();
            }, 100);
        });
    },
}"
>
	<div
		class="w-full aspect-[4/3] max-w-full relative overflauto"
		data-cropper-container
		x-on:visible="alert('visible')"
	>
		<div class="w-full h-full z-0">
			<img
				wire:ignore
				src="{{ $getImage()->getUrl() }}"
				id="cropper-{{ $getImage()->uuid }}-{{ $getConversion()->id }}"
				wire:key="filament-image-library::cropper-{{ $getImage()->uuid }}-{{ $getConversion()->id }}"
				class="block max-w-full"
				x-on:focus="init"
			>
		</div>
		<div
			class="absolute inset-0 w-full h-full bg-gray-50 flex items-center justify-center z-10"
			x-show="!cropperLoaded"
		>
			<x-filament::loading-indicator class="h-5 w-5" />
		</div>
	</div>
</x-dynamic-component>
