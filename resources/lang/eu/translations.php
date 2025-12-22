<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Hautaketa Ekintzak',
        'bulk_delete' => 'Ezabatu',
        'cancel' => 'Utzi',
        'delete' => 'Ezabatu',
        'detach' => 'Deskonektatu',
        'deselect' => 'Hautaketa kendu',
        'upload' => 'Igo',
        'save' => 'Gorde',
        'select' => 'Hautatu',
        'add_existing' => 'Lehendik dagoena gehitu',
        'next' => 'Hurrengoa',
        'previous' => 'Aurrekoa',
        'crop' => 'Moztu',
        'flip_horizontal' => 'Horizontalki irauli',
        'flip_vertical' => 'Bertikalki irauli',
        'rotate_left' => 'Ezkerrera biratu',
        'rotate_right' => 'Eskuinera biratu',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Biltegiratzeko Diskoa',
            'images' => 'Irudi(ak)',
            'alt_text' => 'Alt Testua',
            'file_name' => 'Fitxategiaren Izena',
            'search' => 'Bilatu',
            'width' => 'Zabalera',
            'height' => 'Altuera',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Biratu',
        ],
        'helper_texts' => [
            'alt_text' => 'Irudian erakusten denaren deskribapena, erabilerraztasuna eta SEO hobetzeko.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Ez da irudirik hautatu.',
            'no_images_selected' => 'Ez da irudirik hautatu.',
            'no_images_found' => 'Ez da irudirik aurkitu.',
            'search' => 'Fitxategiaren izenaren edo alt testuaren arabera bilatu...',
        ],
        'prefixes' => [
            'width' => 'Zabalera',
            'height' => 'Altuera',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Biratu',
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
            'bulk_delete' => '{1} :count Irudia ezabatu?|[2,*] :count Irudiak ezabatu?',
            'delete' => 'Irudia Ezabatu',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Ziur zaude hautatutako irudia ezabatu nahi duzula?|[2,*] Ziur zaude hautatutako :count irudiak ezabatu nahi dituzula?',
            'delete' => 'Ziur zaude irudi hau ezabatu nahi duzula?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Irudia behar bezala ezabatu da.',
            'failure' => 'Irudia ezabatzeak huts egin du.',
        ],
        'upload' => [
            'success' => '{1} Irudia behar bezala igo da.|[2,*] Irudiak behar bezala igo dira.',
            'failure' => '{1} Emandako irudia igotzeak huts egin du.|[2,*] Emandako irudiak igotzeak huts egin du.',
        ],
        'edit_source_image' => [
            'success' => 'Iturburu-irudia behar bezala eguneratu da.',
            'failure' => 'Iturburu-irudia eguneratzeak huts egin du.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Ez da irudirik aurkitu',
        ],
        'title' => 'Irudi Liburutegia',
    ],
    'tooltips' => [
        'crop' => 'Moztu',
        'deselect' => 'Hautaketa kendu',
        'edit' => 'Editatu',
        'delete' => 'Ezabatu',
        'detach' => 'Deskonektatu',
        'select' => 'Hautatu',
        'drag_handle' => 'Arrastatu berrantolatzeko',
        'rotate_right' => 'Eskuinera biratu',
        'rotate_left' => 'Ezkerrera biratu',
        'flip_horizontal' => 'Horizontalki irauli',
        'flip_vertical' => 'Bertikalki irauli',
        'view' => 'Ikusi',
    ],
];
