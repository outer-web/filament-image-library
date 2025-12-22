<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Mga Pagkilos sa Pagpili',
        'bulk_delete' => 'Burahin',
        'cancel' => 'Kanselahin',
        'delete' => 'Burahin',
        'detach' => 'Tanggalin',
        'deselect' => 'Hindi piliin',
        'upload' => 'I-upload',
        'save' => 'I-save',
        'select' => 'Piliin',
        'add_existing' => 'Magdagdag ng Umiiral',
        'next' => 'Susunod',
        'previous' => 'Nakaraan',
        'crop' => 'I-crop',
        'flip_horizontal' => 'I-flip nang Pahalang',
        'flip_vertical' => 'I-flip nang Patayo',
        'rotate_left' => 'I-rotate Pakaliwa',
        'rotate_right' => 'I-rotate Pakanan',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Storage Disk',
            'images' => 'Larawan (mga)',
            'alt_text' => 'Alt Text',
            'file_name' => 'Pangalan ng File',
            'search' => 'Maghanap',
            'width' => 'Lapad',
            'height' => 'Taas',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'I-rotate',
        ],
        'helper_texts' => [
            'alt_text' => 'Paglalarawan ng kung ano ang ipinakikita sa larawan para sa mas magandang accessibility at SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Walang napilinig larawan.',
            'no_images_selected' => 'Walang napilinig mga larawan.',
            'no_images_found' => 'Walang nahanap na mga larawan.',
            'search' => 'Maghanap ayon sa pangalan ng file o alt text...',
        ],
        'prefixes' => [
            'width' => 'Lapad',
            'height' => 'Taas',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'I-rotate',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => '°',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} Burahin ang :count Larawan?|[2,*] Burahin ang :count mga Larawan?',
            'delete' => 'Burahin ang Larawan',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Sigurado ka bang gusto mong burahin ang napiling larawan?|[2,*] Sigurado ka bang gusto mong burahin ang :count napiling mga larawan?',
            'delete' => 'Sigurado ka bang gusto mong burahin ang larawang ito?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Matagumpay na nabura ang larawan.',
            'failure' => 'Hindi nabura ang larawan.',
        ],
        'upload' => [
            'success' => '{1} Matagumpay na na-upload ang larawan.|[2,*] Matagumpay na na-upload ang mga larawan.',
            'failure' => '{1} Hindi na-upload ang binigay na larawan.|[2,*] Hindi na-upload ang mga binigay na larawan.',
        ],
        'edit_source_image' => [
            'success' => 'Matagumpay na na-update ang source image.',
            'failure' => 'Hindi na-update ang source image.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Walang nahanap na mga larawan',
        ],
        'title' => 'Image Library',
    ],
    'tooltips' => [
        'crop' => 'I-crop',
        'deselect' => 'Hindi piliin',
        'edit' => 'I-edit',
        'delete' => 'Burahin',
        'detach' => 'Tanggalin',
        'select' => 'Piliin',
        'drag_handle' => 'I-drag para sa pag-reorder',
        'rotate_right' => 'I-rotate Pakanan',
        'rotate_left' => 'I-rotate Pakaliwa',
        'flip_horizontal' => 'I-flip nang Pahalang',
        'flip_vertical' => 'I-flip nang Patayo',
        'view' => 'Tingnan',
    ],
];
