<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Valiku Toimingud',
        'bulk_delete' => 'Kustuta',
        'cancel' => 'Tühista',
        'delete' => 'Kustuta',
        'detach' => 'Lahuta',
        'deselect' => 'Tühista valik',
        'upload' => 'Laadi üles',
        'save' => 'Salvesta',
        'select' => 'Vali',
        'add_existing' => 'Lisa Olemasolev',
        'next' => 'Järgmine',
        'previous' => 'Eelmine',
        'crop' => 'Kärbi',
        'flip_horizontal' => 'Pööra Horisontaalselt',
        'flip_vertical' => 'Pööra Vertikaalselt',
        'rotate_left' => 'Pööra Vasakule',
        'rotate_right' => 'Pööra Paremale',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Salvestusketas',
            'images' => 'Pilt(idid)',
            'alt_text' => 'Alt Tekst',
            'file_name' => 'Faili Nimi',
            'search' => 'Otsi',
            'width' => 'Laius',
            'height' => 'Kõrgus',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Pööra',
        ],
        'helper_texts' => [
            'alt_text' => 'Kirjeldus sellest, mis pildil näidatud on, parema ligipääsetavuse ja SEO jaoks.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Ühtegi pilti pole valitud.',
            'no_images_selected' => 'Ühtegi pilti pole valitud.',
            'no_images_found' => 'Ühtegi pilti ei leitud.',
            'search' => 'Otsi faili nime või alt teksti järgi...',
        ],
        'prefixes' => [
            'width' => 'Laius',
            'height' => 'Kõrgus',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Pööra',
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
            'bulk_delete' => '{1} Kustuta :count Pilt?|[2,*] Kustuta :count Pilti?',
            'delete' => 'Kustuta Pilt',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Oled sa kindel, et soovid kustutada valitud pildi?|[2,*] Oled sa kindel, et soovid kustutada :count valitud pilti?',
            'delete' => 'Oled sa kindel, et soovid seda pilti kustutada?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Pilt edukalt kustutatud.',
            'failure' => 'Pildi kustutamine ebaõnnestus.',
        ],
        'upload' => [
            'success' => '{1} Pilt edukalt üles laaditud.|[2,*] Pildid edukalt üles laaditud.',
            'failure' => '{1} Esitatud pildi üleslaadimine ebaõnnestus.|[2,*] Esitatud piltide üleslaadimine ebaõnnestus.',
        ],
        'edit_source_image' => [
            'success' => 'Lähte pilt edukalt uuendatud.',
            'failure' => 'Lähte pildi uuendamine ebaõnnestus.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Ühtegi pilti ei leitud',
        ],
        'title' => 'Pildiraamatukogu',
    ],
    'tooltips' => [
        'crop' => 'Kärbi',
        'deselect' => 'Tühista valik',
        'edit' => 'Muuda',
        'delete' => 'Kustuta',
        'detach' => 'Lahuta',
        'select' => 'Vali',
        'drag_handle' => 'Lohista järjestuse muutmiseks',
        'rotate_right' => 'Pööra Paremale',
        'rotate_left' => 'Pööra Vasakule',
        'flip_horizontal' => 'Pööra Horisontaalselt',
        'flip_vertical' => 'Pööra Vertikaalselt',
        'view' => 'Vaata',
    ],
];
