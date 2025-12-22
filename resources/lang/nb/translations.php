<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Utvalgshandlinger',
        'bulk_delete' => 'Slett',
        'cancel' => 'Avbryt',
        'delete' => 'Slett',
        'detach' => 'Koble fra',
        'deselect' => 'Opphev valg',
        'upload' => 'Last opp',
        'save' => 'Lagre',
        'select' => 'Velg',
        'add_existing' => 'Legg til eksisterende',
        'next' => 'Neste',
        'previous' => 'Forrige',
        'crop' => 'Beskjær',
        'flip_horizontal' => 'Vend horisontalt',
        'flip_vertical' => 'Vend vertikalt',
        'rotate_left' => 'Roter venstre',
        'rotate_right' => 'Roter høyre',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Lagringsdisk',
            'images' => 'Bilde(r)',
            'alt_text' => 'Alternativ tekst',
            'file_name' => 'Filnavn',
            'search' => 'Søk',
            'width' => 'Bredde',
            'height' => 'Høyde',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Roter',
        ],
        'helper_texts' => [
            'alt_text' => 'Beskrivelse av det som vises i bildet for forbedret tilgjengelighet og SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Ingen bilde valgt.',
            'no_images_selected' => 'Ingen bilder valgt.',
            'no_images_found' => 'Ingen bilder funnet.',
            'search' => 'Søk etter filnavn eller alternativ tekst...',
        ],
        'prefixes' => [
            'width' => 'Bredde',
            'height' => 'Høyde',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Roter',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'grader',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} Slett :count bilde?|[2,*] Slett :count bilder?',
            'delete' => 'Slett bilde',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Er du sikker på at du vil slette det valgte bildet?|[2,*] Er du sikker på at du vil slette de :count valgte bildene?',
            'delete' => 'Er du sikker på at du vil slette dette bildet?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Bildet ble slettet vellykket.',
            'failure' => 'Kunne ikke slette bildet.',
        ],
        'upload' => [
            'success' => '{1} Bildet ble lastet opp vellykket.|[2,*] Bildene ble lastet opp vellykket.',
            'failure' => '{1} Kunne ikke laste opp det oppgitte bildet.|[2,*] Kunne ikke laste opp de oppgitte bildene.',
        ],
        'edit_source_image' => [
            'success' => 'Kildebildet ble oppdatert vellykket.',
            'failure' => 'Kunne ikke oppdatere kildebildet.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Ingen bilder funnet',
        ],
        'title' => 'Bildebibliotek',
    ],
    'tooltips' => [
        'crop' => 'Beskjær',
        'deselect' => 'Opphev valg',
        'edit' => 'Rediger',
        'delete' => 'Slett',
        'detach' => 'Koble fra',
        'select' => 'Velg',
        'drag_handle' => 'Dra for å omorganisere',
        'rotate_right' => 'Roter høyre',
        'rotate_left' => 'Roter venstre',
        'flip_horizontal' => 'Vend horisontalt',
        'flip_vertical' => 'Vend vertikalt',
        'view' => 'Vis',
    ],
];
