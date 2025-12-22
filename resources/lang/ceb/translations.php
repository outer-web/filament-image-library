<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Mga Aksyon sa Pagpili',
        'bulk_delete' => 'Tangtanga',
        'cancel' => 'Kanselahon',
        'delete' => 'Tangtanga',
        'detach' => 'Ibulag',
        'deselect' => 'Dili Pilia',
        'upload' => 'I-upload',
        'save' => 'Tipiga',
        'select' => 'Pilia',
        'add_existing' => 'Dugangi ang Kasamtangan',
        'next' => 'Sunod',
        'previous' => 'Miagi',
        'crop' => 'Putla',
        'flip_horizontal' => 'Baliskad nga Pinahigda',
        'flip_vertical' => 'Baliskad nga Patindog',
        'rotate_left' => 'Likoliko sa Wala',
        'rotate_right' => 'Likoliko sa Tuo',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Storage Disk',
            'images' => 'Hulagway',
            'alt_text' => 'Alternatibong Teksto',
            'file_name' => 'Ngalan sa File',
            'search' => 'Pangita',
            'width' => 'Gilapdon',
            'height' => 'Gitas-on',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Likoliko',
        ],
        'helper_texts' => [
            'alt_text' => 'Paghulagway sa gipakita sa hulagway para sa mas maayong accessibility ug SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Walay napiling hulagway.',
            'no_images_selected' => 'Walay napiling hulagway.',
            'no_images_found' => 'Walay nakitang hulagway.',
            'search' => 'Pangita pinaagi sa ngalan sa file o alternatibong teksto...',
        ],
        'prefixes' => [
            'width' => 'Gilapdon',
            'height' => 'Gitas-on',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Likoliko',
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
            'bulk_delete' => '{1} Tangtangon ang :count ka Hulagway?|[2,*] Tangtangon ang :count ka Hulagway?',
            'delete' => 'Tangtanga ang Hulagway',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Sigurado ka ba nga gusto nimo tangtangon ang napiling hulagway?|[2,*] Sigurado ka ba nga gusto nimo tangtangon ang :count ka napiling hulagway?',
            'delete' => 'Sigurado ka ba nga gusto nimo tangtangon kini nga hulagway?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Ang hulagway malampusong natangtang.',
            'failure' => 'Napakyas ang pagtangtang sa hulagway.',
        ],
        'upload' => [
            'success' => '{1} Ang hulagway malampusong na-upload.|[2,*] Ang mga hulagway malampusong na-upload.',
            'failure' => '{1} Napakyas ang pag-upload sa gihatag nga hulagway.|[2,*] Napakyas ang pag-upload sa gihatag nga mga hulagway.',
        ],
        'edit_source_image' => [
            'success' => 'Ang source nga hulagway malampusong na-update.',
            'failure' => 'Napakyas ang pag-update sa source nga hulagway.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Walay nakitang hulagway',
        ],
        'title' => 'Library sa Hulagway',
    ],
    'tooltips' => [
        'crop' => 'Putla',
        'deselect' => 'Dili Pilia',
        'edit' => 'I-edit',
        'delete' => 'Tangtanga',
        'detach' => 'Ibulag',
        'select' => 'Pilia',
        'drag_handle' => 'I-drag para sa pag-reorder',
        'rotate_right' => 'Likoliko sa Tuo',
        'rotate_left' => 'Likoliko sa Wala',
        'flip_horizontal' => 'Baliskad nga Pinahigda',
        'flip_vertical' => 'Baliskad nga Patindog',
        'view' => 'Tan-awa',
    ],
];
