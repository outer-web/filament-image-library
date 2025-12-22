<x-dynamic-component
    :component="$getFieldWrapperView()"
    :field="$field"
>
    {{ $getChildSchema() }}
</x-dynamic-component>
