<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Valg Handlinger',
        'bulk_delete' => 'Slet',
        'cancel' => 'Annuller',
        'delete' => 'Slet',
        'detach' => 'Frigør',
        'deselect' => 'Fravælg',
        'upload' => 'Upload',
        'save' => 'Gem',
        'select' => 'Vælg',
        'add_existing' => 'Tilføj Eksisterende',
        'next' => 'Næste',
        'previous' => 'Forrige',
        'crop' => 'Beskær',
        'flip_horizontal' => 'Vend Vandret',
        'flip_vertical' => 'Vend Lodret',
        'rotate_left' => 'Roter Venstre',
        'rotate_right' => 'Roter Højre',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Lager Disk',
            'images' => 'Billede(r)',
            'alt_text' => 'Alt Tekst',
            'file_name' => 'Filnavn',
            'search' => 'Søg',
            'width' => 'Bredde',
            'height' => 'Højde',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Roter',
        ],
        'helper_texts' => [
            'alt_text' => 'Beskrivelse af hvad der vises i billedet for forbedret tilgængelighed og SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Intet billede valgt.',
            'no_images_selected' => 'Ingen billeder valgt.',
            'no_images_found' => 'Ingen billeder fundet.',
            'search' => 'Søg efter filnavn eller alt tekst...',
        ],
        'prefixes' => [
            'width' => 'Bredde',
            'height' => 'Højde',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Roter',
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
            'bulk_delete' => '{1} Slet :count Billede?|[2,*] Slet :count Billeder?',
            'delete' => 'Slet Billede',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Er du sikker på, at du vil slette det valgte billede?|[2,*] Er du sikker på, at du vil slette de :count valgte billeder?',
            'delete' => 'Er du sikker på, at du vil slette dette billede?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Billede slettet med succes.',
            'failure' => 'Kunne ikke slette billede.',
        ],
        'upload' => [
            'success' => '{1} Billede uploadet med succes.|[2,*] Billeder uploadet med succes.',
            'failure' => '{1} Kunne ikke uploade det angivne billede.|[2,*] Kunne ikke uploade de angivne billeder.',
        ],
        'edit_source_image' => [
            'success' => 'Kildebillede opdateret med succes.',
            'failure' => 'Kunne ikke opdatere kildebillede.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Ingen billeder fundet',
        ],
        'title' => 'Billedbibliotek',
    ],
    'tooltips' => [
        'crop' => 'Beskær',
        'deselect' => 'Fravælg',
        'edit' => 'Rediger',
        'delete' => 'Slet',
        'detach' => 'Frigør',
        'select' => 'Vælg',
        'drag_handle' => 'Træk for at omorganisere',
        'rotate_right' => 'Roter Højre',
        'rotate_left' => 'Roter Venstre',
        'flip_horizontal' => 'Vend Vandret',
        'flip_vertical' => 'Vend Lodret',
        'view' => 'Vis',
    ],
];
