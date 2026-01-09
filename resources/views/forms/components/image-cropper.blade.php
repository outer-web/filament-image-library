<div x-data="{
    state: $wire.$entangle('{{ $getStatePath() }}').live,
    cropper: null,
    observer: null,
    initialStateSet: false,
    debounceSyncState: null,

    init() {
        this.observer = new IntersectionObserver(
            (entries) => {
                const visible = entries[0].isIntersecting;

                if (visible && !this.cropper) {
                    this.initCropper();
                } else if (!visible && this.cropper) {
                    this.destroyCropper();
                }
            }, {
                threshold: 0.1,
            }
        );

        this.observer.observe(this.$el);

        $watch('state', (value) => {
            if (this.debounceSyncState) {
                clearTimeout(this.debounceSyncState);
            }

            this.debounceSyncState = setTimeout(() => {
                if (this.cropper && this.initialStateSet) {
                    this.cropper.setData({
                        width: parseInt(value.width),
                        height: parseInt(value.height),
                        x: parseInt(value.x),
                        y: parseInt(value.y),
                        rotate: parseInt(value.rotate),
                        scaleX: parseInt(value.scaleX),
                        scaleY: parseInt(value.scaleY),
                    });
                }
            }, 500);
        });
    },

    initCropper() {
        const self = this;

        this.cropper = new ImageLibraryCropper(this.$refs.image, {
            viewMode: 2,
            dragMode: 'move',
            aspectRatio: {{ $getAspectRatio()?->toFloat() ?? 'null' }},
            ready() {
                self.cropper.setData({
                    width: self.state.width,
                    height: self.state.height,
                    x: self.state.x,
                    y: self.state.y,
                    rotate: self.state.rotate,
                    scaleX: self.state.scaleX,
                    scaleY: self.state.scaleY,
                });
                self.initialStateSet = true;
            },
            cropend(event) {
                if (!self.initialStateSet) {
                    return;
                }

                self.state = {
                    ...self.state,
                    width: Math.round(self.cropper.getData().width),
                    height: Math.round(self.cropper.getData().height),
                    x: Math.round(self.cropper.getData().x),
                    y: Math.round(self.cropper.getData().y),
                    rotate: Math.round(self.cropper.getData().rotate),
                    scaleX: self.cropper.getData().scaleX,
                    scaleY: self.cropper.getData().scaleY,
                };

                self.$wire.set('{{ $getStatePath() }}', self.state);
            },
        });
    },

    destroyCropper() {
        this.debounceSyncState = null;
        this.initialStateSet = false;
        if (this.cropper) {
            this.cropper.destroy();
            this.cropper = null;
        }
    },
}">
	<div class="grid grid-cols-12 gap-4">
		<div class="col-span-12 md:col-span-8 xl:col-span-10">
			<div
				class="w-full aspect-9/12 md:aspect-12/9 max-h-[50svh] [&>.cropper-container]:h-full"
				wire:ignore
			>
				<img
					class="w-full h-full object-center object-contain"
					src="{{ $getSourceImage()->url() }}"
					x-ref="image"
				>
			</div>
		</div>
		<div class="col-span-12 md:col-span-4 xl:col-span-2">
			{{ $getChildSchema() }}
		</div>
	</div>
</div>
