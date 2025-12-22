<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Batch Selection Actions',
        'bulk_delete' => 'Delete',
        'cancel' => 'Cancel',
        'delete' => 'Delete',
        'detach' => 'Detach',
        'deselect' => 'Deselect',
        'upload' => 'Upload',
        'save' => 'Save',
        'select' => 'Select',
        'add_existing' => 'Add Existing',
        'next' => 'Next',
        'previous' => 'Previous',
        'crop' => 'Crop',
        'flip_horizontal' => 'Flip Horizontal',
        'flip_vertical' => 'Flip Vertical',
        'rotate_left' => 'Rotate Left',
        'rotate_right' => 'Rotate Right',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Storage Disk',
            'images' => 'Image(s)',
            'alt_text' => 'Alt Text',
            'file_name' => 'File Name',
            'search' => 'Search',
            'width' => 'Width',
            'height' => 'Height',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Rotate',
        ],
        'helper_texts' => [
            'alt_text' => 'Description of what is shown in the image for improved accessibility and SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'No image selected.',
            'no_images_selected' => 'No images selected.',
            'no_images_found' => 'No images found.',
            'search' => 'Search by file name or alt text...',
        ],
        'prefixes' => [
            'width' => 'Width',
            'height' => 'Height',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Rotate',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'deg',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} Delete :count Image?|[2,*] Delete :count Images?',
            'delete' => 'Delete Image',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Are you sure you want to delete the selected image?|[2,*] Are you sure you want to delete the selected :count images?',
            'delete' => 'Are you sure you want to delete this image?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Image deleted successfully.',
            'failure' => 'Failed to delete image.',
        ],
        'upload' => [
            'success' => '{1} Image uploaded successfully.|[2,*] Images uploaded successfully.',
            'failure' => '{1} Failed to upload the provided image.|[2,*] Failed to upload the provided images.',
        ],
        'edit_source_image' => [
            'success' => 'Source image updated successfully.',
            'failure' => 'Failed to update source image.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'No images found',
        ],
        'title' => 'Image Library',
    ],
    'tooltips' => [
        'crop' => 'Crop',
        'deselect' => 'Deselect',
        'edit' => 'Edit',
        'delete' => 'Delete',
        'detach' => 'Detach',
        'select' => 'Select',
        'drag_handle' => 'Drag to reorder',
        'rotate_right' => 'Rotate Right',
        'rotate_left' => 'Rotate Left',
        'flip_horizontal' => 'Flip Horizontal',
        'flip_vertical' => 'Flip Vertical',
        'view' => 'View',
    ],
];
