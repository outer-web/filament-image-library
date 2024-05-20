![Filament Image Library](docs/images/banner.png)

# Filament Image Library

[![Latest Version on Packagist](https://img.shields.io/packagist/v/outerweb/filament-image-library.svg?style=flat-square)](https://packagist.org/packages/outerweb/filament-image-library)
[![Total Downloads](https://img.shields.io/packagist/dt/outerweb/filament-image-library.svg?style=flat-square)](https://packagist.org/packages/outerweb/filament-image-library)

This package adds a way to interact with outerweb/image-library in Filament.

It adds:

- A new field type to select an image from the image library or upload a new one.
- A page to manage the uploaded images.
- A cropper to crop each configured image conversion.
- A 'drag to reorder' feature.
- Editable image html attributes: title and alt.
- Works with spatie/laravel-translatable by using our filament-translatable-fields package.

## Installation

You can install the package via composer:

```bash
composer require outerweb/filament-image-library
```

You can publish the config file with:

```bash
php artisan vendor:publish --tag="filament-image-library-config"
```

You can publish the translations using:

```bash
php artisan vendor:publish --tag="filament-image-library-translations"
```

### Create or Update your custom theme

To comply with the recommended way of styling a Filament plugin, you will have to **create a custom theme**.
You can follow the steps described [here](https://filamentphp.com/docs/3.x/panels/themes#creating-a-custom-theme) in the offical documentation.

This is done so that all tailwind classes defined in the plugin will get bundles in your custom theme. So it will fit perfectly within your theme.

After that, you may add the following to the `resources/css/filament/filament/tailwind.config.js` file in the `content` array:

```js
import preset from "../../../../vendor/filament/filament/tailwind.config.preset";

export default {
  presets: [preset],
  content: [
    // ...
    "./vendor/outerweb/filament-image-library/resources/views/**/*.blade.php",
  ],
};
```

You can then run `npm run build` to build your custom theme's assets.

### Configure the underlying outerweb/image-library

Configure the `outerweb/image-library` package as described in the [Image Library documentation](https://github.com/outer-web/image-library).

### Customize the Image Library Page

If you need to customize the image library page, you can create a new Filament page that extends the ImageLibrary class. Set your custom page in the configuration file and then make your customizations.

### Configure the Navigation group

To configure the navigation group, publish the translation files, then edit the navigation_group value.

### Add the plugin to your panel

Add the plugin to your desired Filament panel:

```php
use Outerweb\FilamentImageLibrary\Filament\Plugins\FilamentImageLibraryPlugin;

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
use Outerweb\FilamentImageLibrary\Filament\Plugins\FilamentImageLibraryPlugin;

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

You can also use the `addAllowedDisk` method to add a disk:

```php
use Outerweb\FilamentImageLibrary\Filament\Plugins\FilamentImageLibraryPlugin;

class FilamentPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            // ...
            ->plugins([
                FilamentImageLibraryPlugin::make()
                    ->addAllowedDisk('public', 'Public images'),
            ]);
    }
}
```

### Set the navigation sort of the image library page

You can set the navigation sort of the image library page by adding the `navigationSort` method:

```php
use Outerweb\FilamentImageLibrary\Filament\Plugins\FilamentImageLibraryPlugin;

class FilamentPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            // ...
            ->plugins([
                FilamentImageLibraryPlugin::make()
                    ->navigationSort(10),
            ]);
    }
}
```

This will let you customize the index of the image library page in the navigation.

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

### Displaying the selected images in the Infolist

You can display the selected images in the infolist by adding the `ImageLibraryEntry` infolist component:

```php
use Outerweb\FilamentImageLibrary\Filament\Infolists\Components\ImageLibraryEntry;

ImageLibraryEntry::make('image')
    ->label('Image(s)'),
```

This will display the selected images in the infolist. The argument of the `make` method is the name of the relation in your model.

If you would like the display the image(s) of a nested relation, you can use the dot notation:

```php
use Outerweb\FilamentImageLibrary\Filament\Infolists\Components\ImageLibraryEntry;

ImageLibraryEntry::make('seoData.image')
    ->label('Image(s)'),
```

## Working with translations

If you are using the `spatie/laravel-translatable` package, you can use our `filament-translatable-fields` package to make the image picker translatable. This package is a requirement of this package, so the only things you need to do are:

- Set the `spatie_translatable ` config option in the `image-library.php` config file to `true`.
- follow the installation steps in the [README](https://github.com/outer-web/filament-translatable-fields/blob/main/README.md#installation).

## Laravel support

| Laravel Version | Package version |
| --------------- | --------------- |
| ^11.0           | ^2.1.1          |
| ^10.0           | ^1.0.0, ^2.0.0  |

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [Simon Broekaert](https://github.com/SimonBroekaert)
- [Karam Nassar](https://github.com/KaramNassar)
- [Nuhel](https://github.com/Nuhel)
- [All Contributors](../../contributors)

## License

MIT License (MIT). Read the [License File](LICENSE.md) for more information.
