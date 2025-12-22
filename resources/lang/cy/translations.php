<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Gweithredoedd Dewis',
        'bulk_delete' => 'Dileu',
        'cancel' => 'Diddymu',
        'delete' => 'Dileu',
        'detach' => 'Datgysylltu',
        'deselect' => 'Dad-ddewis',
        'upload' => 'Llwytho i Fyny',
        'save' => 'Cadw',
        'select' => 'Dewis',
        'add_existing' => 'Ychwanegu Cyfredol',
        'next' => 'Nesaf',
        'previous' => 'Blaenorol',
        'crop' => 'Tocio',
        'flip_horizontal' => 'Fflipio\'n Lorweddol',
        'flip_vertical' => 'Fflipio\'n Fertigol',
        'rotate_left' => 'Troi i\'r Chwith',
        'rotate_right' => 'Troi i\'r Dde',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Disg Storio',
            'images' => 'Delwedd(au)',
            'alt_text' => 'Testun Alt',
            'file_name' => 'Enw Ffeil',
            'search' => 'Chwilio',
            'width' => 'Lled',
            'height' => 'Uchder',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Troi',
        ],
        'helper_texts' => [
            'alt_text' => 'Disgrifiad o\'r hyn sy\'n cael ei ddangos yn y ddelwedd ar gyfer hygyrchedd gwell a SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Dim delwedd wedi\'i dewis.',
            'no_images_selected' => 'Dim delweddau wedi\'u dewis.',
            'no_images_found' => 'Dim delweddau wedi\'u canfod.',
            'search' => 'Chwilio yn ôl enw ffeil neu destun alt...',
        ],
        'prefixes' => [
            'width' => 'Lled',
            'height' => 'Uchder',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Troi',
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
            'bulk_delete' => '{1} Dileu :count Delwedd?|[2,*] Dileu :count Delwedd?',
            'delete' => 'Dileu Delwedd',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Ydych chi\'n siŵr eich bod am ddileu\'r ddelwedd a ddewiswyd?|[2,*] Ydych chi\'n siŵr eich bod am ddileu\'r :count delwedd a ddewiswyd?',
            'delete' => 'Ydych chi\'n siŵr eich bod am ddileu\'r ddelwedd hon?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Delwedd wedi\'i dileu\'n llwyddiannus.',
            'failure' => 'Methwyd dileu\'r ddelwedd.',
        ],
        'upload' => [
            'success' => '{1} Delwedd wedi\'i llwytho\'n llwyddiannus.|[2,*] Delweddau wedi\'u llwytho\'n llwyddiannus.',
            'failure' => '{1} Methwyd llwytho\'r ddelwedd a ddarparwyd.|[2,*] Methwyd llwytho\'r delweddau a ddarparwyd.',
        ],
        'edit_source_image' => [
            'success' => 'Delwedd ffynhonnell wedi\'i diweddaru\'n llwyddiannus.',
            'failure' => 'Methwyd diweddaru\'r ddelwedd ffynhonnell.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Dim delweddau wedi\'u canfod',
        ],
        'title' => 'Llyfrgell Delweddau',
    ],
    'tooltips' => [
        'crop' => 'Tocio',
        'deselect' => 'Dad-ddewis',
        'edit' => 'Golygu',
        'delete' => 'Dileu',
        'detach' => 'Datgysylltu',
        'select' => 'Dewis',
        'drag_handle' => 'Llusgo i ail-drefnu',
        'rotate_right' => 'Troi i\'r Dde',
        'rotate_left' => 'Troi i\'r Chwith',
        'flip_horizontal' => 'Fflipio\'n Lorweddol',
        'flip_vertical' => 'Fflipio\'n Fertigol',
        'view' => 'Gweld',
    ],
];
