<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Pasirinkimo Veiksmai',
        'bulk_delete' => 'Ištrinti',
        'cancel' => 'Atšaukti',
        'delete' => 'Ištrinti',
        'detach' => 'Atskirti',
        'deselect' => 'Atžymėti',
        'upload' => 'Įkelti',
        'save' => 'Išsaugoti',
        'select' => 'Pasirinkti',
        'add_existing' => 'Pridėti Esamą',
        'next' => 'Kitas',
        'previous' => 'Ankstesnis',
        'crop' => 'Apkirpti',
        'flip_horizontal' => 'Apversti Horizontaliai',
        'flip_vertical' => 'Apversti Vertikaliai',
        'rotate_left' => 'Sukti Kairėn',
        'rotate_right' => 'Sukti Dešinėn',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Saugojimo Diskas',
            'images' => 'Paveikslėlis(-ai)',
            'alt_text' => 'Alternatyvus Tekstas',
            'file_name' => 'Failo Pavadinimas',
            'search' => 'Ieškoti',
            'width' => 'Plotis',
            'height' => 'Aukštis',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Sukti',
        ],
        'helper_texts' => [
            'alt_text' => 'Paveikslėlyje rodomo turinio aprašymas geresniam prieinamumui ir SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Nepasirinktas joks paveikslėlis.',
            'no_images_selected' => 'Nepasirinkti jokie paveikslėliai.',
            'no_images_found' => 'Paveikslėlių nerasta.',
            'search' => 'Ieškoti pagal failo pavadinimą arba alternatyvų tekstą...',
        ],
        'prefixes' => [
            'width' => 'Plotis',
            'height' => 'Aukštis',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Sukti',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'laipsniai',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} Ištrinti :count Paveikslėlį?|[2,*] Ištrinti :count Paveikslėlius?',
            'delete' => 'Ištrinti Paveikslėlį',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Ar tikrai norite ištrinti pasirinktą paveikslėlį?|[2,*] Ar tikrai norite ištrinti pasirinktus :count paveikslėlius?',
            'delete' => 'Ar tikrai norite ištrinti šį paveikslėlį?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Paveikslėlis sėkmingai ištrintas.',
            'failure' => 'Nepavyko ištrinti paveikslėlio.',
        ],
        'upload' => [
            'success' => '{1} Paveikslėlis sėkmingai įkeltas.|[2,*] Paveikslėliai sėkmingai įkelti.',
            'failure' => '{1} Nepavyko įkelti pateikto paveikslėlio.|[2,*] Nepavyko įkelti pateiktų paveikslėlių.',
        ],
        'edit_source_image' => [
            'success' => 'Šaltinio paveikslėlis sėkmingai atnaujintas.',
            'failure' => 'Nepavyko atnaujinti šaltinio paveikslėlio.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Paveikslėlių nerasta',
        ],
        'title' => 'Paveikslėlių Biblioteka',
    ],
    'tooltips' => [
        'crop' => 'Apkirpti',
        'deselect' => 'Atžymėti',
        'edit' => 'Redaguoti',
        'delete' => 'Ištrinti',
        'detach' => 'Atskirti',
        'select' => 'Pasirinkti',
        'drag_handle' => 'Vilkite, kad perkeltumėte',
        'rotate_right' => 'Sukti Dešinėn',
        'rotate_left' => 'Sukti Kairėn',
        'flip_horizontal' => 'Apversti Horizontaliai',
        'flip_vertical' => 'Apversti Vertikaliai',
        'view' => 'Žiūrėti',
    ],
];
