<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Selectie Acties',
        'bulk_delete' => 'Verwijderen',
        'cancel' => 'Annuleren',
        'delete' => 'Verwijderen',
        'detach' => 'Loskoppelen',
        'deselect' => 'Deselecteren',
        'upload' => 'Uploaden',
        'save' => 'Opslaan',
        'select' => 'Selecteren',
        'add_existing' => 'Bestaande Toevoegen',
        'next' => 'Volgende',
        'previous' => 'Vorige',
        'crop' => 'Bijsnijden',
        'flip_horizontal' => 'Horizontaal Spiegelen',
        'flip_vertical' => 'Verticaal Spiegelen',
        'rotate_left' => 'Links Draaien',
        'rotate_right' => 'Rechts Draaien',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Opslagschijf',
            'images' => 'Afbeelding(en)',
            'alt_text' => 'Alt Tekst',
            'file_name' => 'Bestandsnaam',
            'search' => 'Zoeken',
            'width' => 'Breedte',
            'height' => 'Hoogte',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Draaien',
        ],
        'helper_texts' => [
            'alt_text' => 'Beschrijving van wat er in de afbeelding wordt getoond voor verbeterde toegankelijkheid en SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Geen afbeelding geselecteerd.',
            'no_images_selected' => 'Geen afbeeldingen geselecteerd.',
            'no_images_found' => 'Geen afbeeldingen gevonden.',
            'search' => 'Zoeken op bestandsnaam of alt tekst...',
        ],
        'prefixes' => [
            'width' => 'Breedte',
            'height' => 'Hoogte',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Draaien',
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
            'bulk_delete' => '{1} :count Afbeelding Verwijderen?|[2,*] :count Afbeeldingen Verwijderen?',
            'delete' => 'Afbeelding Verwijderen',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Weet je zeker dat je de geselecteerde afbeelding wilt verwijderen?|[2,*] Weet je zeker dat je de :count geselecteerde afbeeldingen wilt verwijderen?',
            'delete' => 'Weet je zeker dat je deze afbeelding wilt verwijderen?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Afbeelding succesvol verwijderd.',
            'failure' => 'Kan afbeelding niet verwijderen.',
        ],
        'upload' => [
            'success' => '{1} Afbeelding succesvol geüpload.|[2,*] Afbeeldingen succesvol geüpload.',
            'failure' => '{1} Kan de opgegeven afbeelding niet uploaden.|[2,*] Kan de opgegeven afbeeldingen niet uploaden.',
        ],
        'edit_source_image' => [
            'success' => 'Bronafbeelding succesvol bijgewerkt.',
            'failure' => 'Kan bronafbeelding niet bijwerken.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Geen afbeeldingen gevonden',
        ],
        'title' => 'Afbeeldingenbibliotheek',
    ],
    'tooltips' => [
        'crop' => 'Bijsnijden',
        'deselect' => 'Deselecteren',
        'edit' => 'Bewerken',
        'delete' => 'Verwijderen',
        'detach' => 'Loskoppelen',
        'select' => 'Selecteren',
        'drag_handle' => 'Slepen om te herordenen',
        'rotate_right' => 'Rechts Draaien',
        'rotate_left' => 'Links Draaien',
        'flip_horizontal' => 'Horizontaal Spiegelen',
        'flip_vertical' => 'Verticaal Spiegelen',
        'view' => 'Bekijken',
    ],
];
