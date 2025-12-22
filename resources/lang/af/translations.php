<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Seleksie Aksies',
        'bulk_delete' => 'Skrap',
        'cancel' => 'Kanselleer',
        'delete' => 'Skrap',
        'detach' => 'Ontkoppel',
        'deselect' => 'Deselekteer',
        'upload' => 'Oplaai',
        'save' => 'Stoor',
        'select' => 'Kies',
        'add_existing' => 'Voeg Bestaande Toe',
        'next' => 'Volgende',
        'previous' => 'Vorige',
        'crop' => 'Sny',
        'flip_horizontal' => 'Keer Horisontaal',
        'flip_vertical' => 'Keer Vertikaal',
        'rotate_left' => 'Draai Links',
        'rotate_right' => 'Draai Regs',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Berging Skyf',
            'images' => 'Beeld(e)',
            'alt_text' => 'Alt Teks',
            'file_name' => 'Lêernaam',
            'search' => 'Soek',
            'width' => 'Wydte',
            'height' => 'Hoogte',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Draai',
        ],
        'helper_texts' => [
            'alt_text' => 'Beskrywing van wat in die beeld gewys word vir verbeterde toeganklikheid en SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Geen beeld gekies nie.',
            'no_images_selected' => 'Geen beelde gekies nie.',
            'no_images_found' => 'Geen beelde gevind nie.',
            'search' => 'Soek volgens lêernaam of alt teks...',
        ],
        'prefixes' => [
            'width' => 'Wydte',
            'height' => 'Hoogte',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Draai',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'grad',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} Skrap :count Beeld?|[2,*] Skrap :count Beelde?',
            'delete' => 'Skrap Beeld',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Is jy seker jy wil die gekose beeld skrap?|[2,*] Is jy seker jy wil die gekose :count beelde skrap?',
            'delete' => 'Is jy seker jy wil hierdie beeld skrap?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Beeld suksesvol geskrap.',
            'failure' => 'Kon nie beeld skrap nie.',
        ],
        'upload' => [
            'success' => '{1} Beeld suksesvol opgelaai.|[2,*] Beelde suksesvol opgelaai.',
            'failure' => '{1} Kon nie die verskafde beeld oplaai nie.|[2,*] Kon nie die verskafde beelde oplaai nie.',
        ],
        'edit_source_image' => [
            'success' => 'Bron beeld suksesvol opgedateer.',
            'failure' => 'Kon nie bron beeld opdateer nie.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Geen beelde gevind',
        ],
        'title' => 'Beeld Biblioteek',
    ],
    'tooltips' => [
        'crop' => 'Sny',
        'deselect' => 'Deselekteer',
        'edit' => 'Redigeer',
        'delete' => 'Skrap',
        'detach' => 'Ontkoppel',
        'select' => 'Kies',
        'drag_handle' => 'Sleep om te herrangskik',
        'rotate_right' => 'Draai Regs',
        'rotate_left' => 'Draai Links',
        'flip_horizontal' => 'Keer Horisontaal',
        'flip_vertical' => 'Keer Vertikaal',
        'view' => 'Bekyk',
    ],
];
