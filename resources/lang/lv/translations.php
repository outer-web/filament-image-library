<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Izvēles Darbības',
        'bulk_delete' => 'Dzēst',
        'cancel' => 'Atcelt',
        'delete' => 'Dzēst',
        'detach' => 'Atdalīt',
        'deselect' => 'Noņemt izvēli',
        'upload' => 'Augšupielādēt',
        'save' => 'Saglabāt',
        'select' => 'Izvēlēties',
        'add_existing' => 'Pievienot Esošo',
        'next' => 'Nākamais',
        'previous' => 'Iepriekšējais',
        'crop' => 'Apgriezt',
        'flip_horizontal' => 'Pagriezt Horizontāli',
        'flip_vertical' => 'Pagriezt Vertikāli',
        'rotate_left' => 'Pagriezt Pa Kreisi',
        'rotate_right' => 'Pagriezt Pa Labi',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Glabāšanas Disks',
            'images' => 'Attēls(-i)',
            'alt_text' => 'Alternatīvais Teksts',
            'file_name' => 'Faila Nosaukums',
            'search' => 'Meklēt',
            'width' => 'Platums',
            'height' => 'Augstums',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Pagriezt',
        ],
        'helper_texts' => [
            'alt_text' => 'Attēlā redzamā satura apraksts labākai pieejamībai un SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Nav izvēlēts neviens attēls.',
            'no_images_selected' => 'Nav izvēlēti nekādi attēli.',
            'no_images_found' => 'Attēli nav atrasti.',
            'search' => 'Meklēt pēc faila nosaukuma vai alternatīvā teksta...',
        ],
        'prefixes' => [
            'width' => 'Platums',
            'height' => 'Augstums',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Pagriezt',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'grādi',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} Dzēst :count Attēlu?|[2,*] Dzēst :count Attēlus?',
            'delete' => 'Dzēst Attēlu',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Vai tiešām vēlaties dzēst izvēlēto attēlu?|[2,*] Vai tiešām vēlaties dzēst izvēlētos :count attēlus?',
            'delete' => 'Vai tiešām vēlaties dzēst šo attēlu?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Attēls veiksmīgi dzēsts.',
            'failure' => 'Neizdevās dzēst attēlu.',
        ],
        'upload' => [
            'success' => '{1} Attēls veiksmīgi augšupielādēts.|[2,*] Attēli veiksmīgi augšupielādēti.',
            'failure' => '{1} Neizdevās augšupielādēt norādīto attēlu.|[2,*] Neizdevās augšupielādēt norādītos attēlus.',
        ],
        'edit_source_image' => [
            'success' => 'Avota attēls veiksmīgi atjaunināts.',
            'failure' => 'Neizdevās atjaunināt avota attēlu.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Attēli nav atrasti',
        ],
        'title' => 'Attēlu Bibliotēka',
    ],
    'tooltips' => [
        'crop' => 'Apgriezt',
        'deselect' => 'Noņemt izvēli',
        'edit' => 'Rediģēt',
        'delete' => 'Dzēst',
        'detach' => 'Atdalīt',
        'select' => 'Izvēlēties',
        'drag_handle' => 'Velciet, lai pārkārtotu',
        'rotate_right' => 'Pagriezt Pa Labi',
        'rotate_left' => 'Pagriezt Pa Kreisi',
        'flip_horizontal' => 'Pagriezt Horizontāli',
        'flip_vertical' => 'Pagriezt Vertikāli',
        'view' => 'Skatīt',
    ],
];
