<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Accions de Selecció',
        'bulk_delete' => 'Eliminar',
        'cancel' => 'Cancel·lar',
        'delete' => 'Eliminar',
        'detach' => 'Separar',
        'deselect' => 'Deseleccionar',
        'upload' => 'Pujar',
        'save' => 'Desar',
        'select' => 'Seleccionar',
        'add_existing' => 'Afegir Existent',
        'next' => 'Següent',
        'previous' => 'Anterior',
        'crop' => 'Retallar',
        'flip_horizontal' => 'Capgirar Horitzontalment',
        'flip_vertical' => 'Capgirar Verticalment',
        'rotate_left' => 'Girar a l\'Esquerra',
        'rotate_right' => 'Girar a la Dreta',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Disc d\'Emmagatzematge',
            'images' => 'Imatge(s)',
            'alt_text' => 'Text Alt',
            'file_name' => 'Nom del Fitxer',
            'search' => 'Cercar',
            'width' => 'Amplada',
            'height' => 'Alçada',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Girar',
        ],
        'helper_texts' => [
            'alt_text' => 'Descripció del que es mostra a la imatge per millorar l\'accessibilitat i el SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Cap imatge seleccionada.',
            'no_images_selected' => 'Cap imatge seleccionada.',
            'no_images_found' => 'No s\'han trobat imatges.',
            'search' => 'Cercar per nom de fitxer o text alt...',
        ],
        'prefixes' => [
            'width' => 'Amplada',
            'height' => 'Alçada',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Girar',
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
            'bulk_delete' => '{1} Eliminar :count Imatge?|[2,*] Eliminar :count Imatges?',
            'delete' => 'Eliminar Imatge',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Esteu segur que voleu eliminar la imatge seleccionada?|[2,*] Esteu segur que voleu eliminar les :count imatges seleccionades?',
            'delete' => 'Esteu segur que voleu eliminar aquesta imatge?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Imatge eliminada correctament.',
            'failure' => 'Error en eliminar la imatge.',
        ],
        'upload' => [
            'success' => '{1} Imatge pujada correctament.|[2,*] Imatges pujades correctament.',
            'failure' => '{1} Error en pujar la imatge proporcionada.|[2,*] Error en pujar les imatges proporcionades.',
        ],
        'edit_source_image' => [
            'success' => 'Imatge font actualitzada correctament.',
            'failure' => 'Error en actualitzar la imatge font.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'No s\'han trobat imatges',
        ],
        'title' => 'Biblioteca d\'Imatges',
    ],
    'tooltips' => [
        'crop' => 'Retallar',
        'deselect' => 'Deseleccionar',
        'edit' => 'Editar',
        'delete' => 'Eliminar',
        'detach' => 'Separar',
        'select' => 'Seleccionar',
        'drag_handle' => 'Arrossegar per reordenar',
        'rotate_right' => 'Girar a la Dreta',
        'rotate_left' => 'Girar a l\'Esquerra',
        'flip_horizontal' => 'Capgirar Horitzontalment',
        'flip_vertical' => 'Capgirar Verticalment',
        'view' => 'Veure',
    ],
];
