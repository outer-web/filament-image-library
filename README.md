# Filament Image Library

[![Latest Version on Packagist](https://img.shields.io/packagist/v/outerweb/filament-image-library.svg?style=flat-square)](https://packagist.org/packages/outerweb/filament-image-library)
[![Total Downloads](https://img.shields.io/packagist/dt/outerweb/filament-image-library.svg?style=flat-square)](https://packagist.org/packages/outerweb/filament-image-library)

This package adds a way to interact with outerweb/image-library in Filament.

It adds:

- A new field type to select an image from the image library or upload a new one.
- A page to manage the uploaded images.
- A cropper to crop each configured image conversion.
- A `drag to reorder` feature.
- Editable image html attributes: title and alt.
- Automatically works with spatie/laravel-translatable by using our filament-translatable-fields package.

## Installation

You can install the package via composer:

```bash
composer require outerweb/filament-image-library
```

Configure the Outerweb/ImageLibrary package as described in the [Settings documentation](https://github.com/outer-web/image-library).

Add the plugin to your desired Filament panel:

```php
use OuterWeb\FilamentImageLibrary\Filament\Plugins\FilamentImageLibraryPlugin;

class FilamentPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            // ...
            ->plugins([
                FilamentImageLibraryPlugin::make(),
            ]);
    }
}
```

You can specify the allowed storage disks where the user may upload images:

```php
use OuterWeb\FilamentImageLibrary\Filament\Plugins\FilamentImageLibraryPlugin;

class FilamentPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            // ...
            ->plugins([
                FilamentImageLibraryPlugin::make()
                    ->allowedDisks([
                        'public' => 'Public images',
                    ]),
            ]);
    }
}
```

In the example above, the user will be able to upload images to the `public` disk and select images from it.
The UI will show the disk name as `Public images`. You can also add a translation for the disk name.

By default, the plugin will enable the public disk if you didn't specify any allowed disks.

## Usage

You can add the `ImageLibraryPicker` form field to your form:

```php
use Outerweb\FilamentImageLibrary\Filament\Forms\Components\ImageLibraryPicker;

ImageLibraryPicker::make('image'),
```

### Allowing multiple images

You can allow the user to select or upload multiple images by adding the `multiple` method:

```php
use Outerweb\FilamentImageLibrary\Filament\Forms\Components\ImageLibraryPicker;

ImageLibraryPicker::make('images')
    ->multiple(),
```

### Disabling the upload feature

You can disable the upload feature by adding the `disableUpload` method:

```php
use Outerweb\FilamentImageLibrary\Filament\Forms\Components\ImageLibraryPicker;

ImageLibraryPicker::make('image')
    ->disableUpload(),
```

This will prevent the user from uploading new images via this field.

### Disabling the select existing feature

You can disable the select existing feature by adding the `disableExisting` method:

```php
use Outerweb\FilamentImageLibrary\Filament\Forms\Components\ImageLibraryPicker;

ImageLibraryPicker::make('image')
    ->disableExisting(),
```

This will prevent the user from selecting existing images via this field.

### Disabling the image deselect feature

You can disable the image deselect feature by adding the `disableImageDeselect` method:

```php
use Outerweb\FilamentImageLibrary\Filament\Forms\Components\ImageLibraryPicker;

ImageLibraryPicker::make('image')
    ->disableImageDeselect(),
```

This will prevent the user from deselecting the image(s) via this field.

### Disabling the image edit feature

You can disable the image edit feature by adding the `disableImageEdit` method:

```php
use Outerweb\FilamentImageLibrary\Filament\Forms\Components\ImageLibraryPicker;

ImageLibraryPicker::make('image')
    ->disableImageEdit(),
```

This will prevent the user from editing the image(s) via this field.
Editing is the feature that allows the user to set the image title and alt attributes.

### Disabling the image edit badge feature

You can disable the image edit badge feature by adding the `disableImageEditBadges` method:

```php
use Outerweb\FilamentImageLibrary\Filament\Forms\Components\ImageLibraryPicker;

ImageLibraryPicker::make('image')
    ->disableImageEditBadges(),
```

This will prevent the user from seeing the edit badge on the image(s) via this field.
This badge shows the user if the image title and alt attributes are missing.

### Disabling the image ordering feature

You can disable the image ordering feature by adding the `disableOrderingImages` method:

```php
use Outerweb\FilamentImageLibrary\Filament\Forms\Components\ImageLibraryPicker;

ImageLibraryPicker::make('images')
    ->disableOrderingImages(),
```

This will prevent the user from re-ordering the images via this field.
Note: This feature is only available when the field is set to allow multiple images.

### Disabling the image cropping feature

You can disable the image cropping feature by adding the `disableImageCrop` method:

```php
use Outerweb\FilamentImageLibrary\Filament\Forms\Components\ImageLibraryPicker;

ImageLibraryPicker::make('image')
    ->disableImageCrop(),
```

This will prevent the user from cropping the image(s) via this field.

### Configuring the items per page when selecting existing images

You can configure the items per page when selecting existing images by adding the `existingItemsPerPage` method:

```php
use Outerweb\FilamentImageLibrary\Filament\Forms\Components\ImageLibraryPicker;

ImageLibraryPicker::make('image')
    ->existingItemsPerPage(20),
```

This will set the amount of items to show in the select existing images modal.
This is set to 9 by default. To fit the style of the modal, it is recommended to use a number that can be divided by 2 and 3.

### Filtering the shown image conversions

You can filter the shown image conversions by adding the `filteredConversionDefinitions` method:

```php
use Outerweb\FilamentImageLibrary\Filament\Forms\Components\ImageLibraryPicker;
use Outerweb\ImageLibrary\Entities\ConversionDefinition;

ImageLibraryPicker::make('image')
    ->filteredConversionDefinitions([
        'thumbnail',
        ConversionDefinition::get('16:9'),
    ]),
```

This will only show the `thumbnail` and `16:9` image conversions in the image picker.
You can use strings or `ConversionDefinition` instances.

By default, all image conversions are shown, except the ones defined by this package.

### Disabling one or more image conversions

You can disable one or more image conversions by adding the `disabledConversionDefinitions` method:

```php
use Outerweb\FilamentImageLibrary\Filament\Forms\Components\ImageLibraryPicker;
use Outerweb\ImageLibrary\Entities\ConversionDefinition;

ImageLibraryPicker::make('image')
    ->disabledConversionDefinitions([
        'thumbnail',
        ConversionDefinition::get('16:9'),
    ]),
```

This will disable the `thumbnail` and `16:9` image conversions in the image picker.
All other image conversions will be shown.
You can use strings or `ConversionDefinition` instances.

You may always combine the `filteredConversionDefinitions` and `disabledConversionDefinitions` methods.

### Enabling the package conversions

You can enable the package conversions by adding the `enablePackageConversionDefinitions` method:

```php
use Outerweb\FilamentImageLibrary\Filament\Forms\Components\ImageLibraryPicker;

ImageLibraryPicker::make('image')
    ->enablePackageConversionDefinitions(),
```

This will enable the package conversions in the image picker.
By default, the package conversions are disabled because they do not seem relevant in your forms.

### Setting the relation order column

You can set the relation order column by adding the `relationOrderColumn` method:

```php
use Outerweb\FilamentImageLibrary\Filament\Forms\Components\ImageLibraryPicker;

ImageLibraryPicker::make('image')
    ->relationOrderColumn('sort_order'),
```

When working with multiple images, you will typically work with a belongsToMany relation.
We already included code to sync the images to the pivot table.
If you want to order the images, you can add a column to the pivot table to store the order..

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [Simon Broekaert](https://github.com/SimonBroekaert)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
