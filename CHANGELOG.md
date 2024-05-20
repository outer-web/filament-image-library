# Changelog

All notable changes to `filament-image-library` will be documented in this file.

## 2.6.2 - 2024-05-20

### Added

- Added support for v2.0.0 of the `filament-translatable-fields` package to the dependencies.

## 2.6.1 - 2024-05-20

### Fixed

- Fixed styling so that the cropper does not overlap the modal action buttons (Thanks to Nuhel)
- Fixed dark mode styling of the image list (Thanks to Nuhel)

## 2.6.0 - 2024-05-04

### Added

- Added Arabic translations. (Thanks to Karam Nassar)
- Added the ability to customize the navigation icon of the image library page. (Thanks to Karam Nassar)
- Added the ability to customize the image library page itself. (Thanks to Karam Nassar)

### Fixed

- Actually added the `allowedDisks()` method described in the README.md

## 2.5.1 - 2024-03-27

### Fixed

- Fixed the pagination limit.

## 2.5.0 - 2024-03-27

### Fixed

- Fixed pagination on the image library page and the select-existing modal.
- Fixed localization in the edit modal

## 2.4.0 - 2024-03-24

### Added

- Added information about the translatable fields package used in the background.

### Fixed

- Added a check to see if the `FilamentTranslatableFieldsPlugin` package is installed in the current dashboard before using it.
- Use `CASE WHEN` instead of `FIELD()` to sort the images in the image library. This is done to make the plugin compatible with more database drivers.

## 2.3.0 - 2024-03-13

### Fixed

- Fixed a problem where the `ImageLibraryPicker` would not be able to save the selected images if the relationship was not found. Even though it should not find the relationship, it should still be able to save the selected images.

## 2.2.0 - 2024-03-12

### Fixed

- Fixed a problem where the `ImageLibraryPicker` would throw an exception when the model instance did not have the specified method. This is not always necessary, so it will now return null if the method does not exist.

## 2.1.1 - 2024-03-12

### Added

- Added support for Laravel 11.

## 2.1.0 - 2024-03-09

### Changed

- `ImageLibraryEntry` can now handle relation data too by supplying the nested attribute or method name using the dot notation.

## 2.0.0 - 2024-03-09

### Added

- Added the `ImageLibraryEntry` infolist component to display the selected images.

## 1.5.0 - 2024-03-04

### Added

- Added the `navigationSort(?int $sort)` method to the plugin to allow you to sort the image library page in your navigation.

## 1.4.0 - 2024-03-04

### Added

- Use the `Outerweb\ImageLibrary\Entities\ConversionDefinition::createSync()` method to inform the image library to dispatch the generateConversion job synchronously. This is done to make the filament thumbnail generation conversion visible immediately after uploading an image when using a async queue driver.

## 1.3.0 - 2024-03-04

### Fixed

- Fixed a bug where uploading a single image from the imagePicker returned a string instead of an array.

## 1.2.1 - 2024-03-03

### Changed

- Do not show crop button if no conversions are available (due to filtering the conversions)

## 1.2.0 - 2024-03-02

### Fixed

- Fixed a bug where getRelationsShip() would be called on a non existing modelInstance.

## 1.1.0 - 2024-02-26

### Fixed

- Fixed a bug where the `ImageLibrary` facade was not aliased correctly on the image library page.

## 1.0.1 - 2024-02-26

### Changed

- Updated the README to include the fact that it uses `spatie/laravel-translatable` under the hood.

## 1.0.0 - 2024-02-26

- Initial release
