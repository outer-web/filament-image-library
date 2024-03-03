# Changelog

All notable changes to `filament-image-library` will be documented in this file.

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
