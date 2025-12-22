<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Valåtgärder',
        'bulk_delete' => 'Ta bort',
        'cancel' => 'Avbryt',
        'delete' => 'Ta bort',
        'detach' => 'Koppla från',
        'deselect' => 'Avmarkera',
        'upload' => 'Ladda upp',
        'save' => 'Spara',
        'select' => 'Välj',
        'add_existing' => 'Lägg till befintlig',
        'next' => 'Nästa',
        'previous' => 'Föregående',
        'crop' => 'Beskär',
        'flip_horizontal' => 'Vänd horisontellt',
        'flip_vertical' => 'Vänd vertikalt',
        'rotate_left' => 'Rotera vänster',
        'rotate_right' => 'Rotera höger',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Lagringsdisk',
            'images' => 'Bild(er)',
            'alt_text' => 'Alternativ text',
            'file_name' => 'Filnamn',
            'search' => 'Sök',
            'width' => 'Bredd',
            'height' => 'Höjd',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Rotera',
        ],
        'helper_texts' => [
            'alt_text' => 'Beskrivning av vad som visas i bilden för förbättrad tillgänglighet och SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Ingen bild vald.',
            'no_images_selected' => 'Inga bilder valda.',
            'no_images_found' => 'Inga bilder hittades.',
            'search' => 'Sök efter filnamn eller alternativ text...',
        ],
        'prefixes' => [
            'width' => 'Bredd',
            'height' => 'Höjd',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Rotera',
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
            'bulk_delete' => '{1} Ta bort :count bild?|[2,*] Ta bort :count bilder?',
            'delete' => 'Ta bort bild',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Är du säker på att du vill ta bort den valda bilden?|[2,*] Är du säker på att du vill ta bort de :count valda bilderna?',
            'delete' => 'Är du säker på att du vill ta bort denna bild?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Bilden togs bort framgångsrikt.',
            'failure' => 'Misslyckades att ta bort bilden.',
        ],
        'upload' => [
            'success' => '{1} Bilden laddades upp framgångsrikt.|[2,*] Bilderna laddades upp framgångsrikt.',
            'failure' => '{1} Misslyckades att ladda upp den angivna bilden.|[2,*] Misslyckades att ladda upp de angivna bilderna.',
        ],
        'edit_source_image' => [
            'success' => 'Källbilden uppdaterades framgångsrikt.',
            'failure' => 'Misslyckades att uppdatera källbilden.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Inga bilder hittades',
        ],
        'title' => 'Bildbibliotek',
    ],
    'tooltips' => [
        'crop' => 'Beskär',
        'deselect' => 'Avmarkera',
        'edit' => 'Redigera',
        'delete' => 'Ta bort',
        'detach' => 'Koppla från',
        'select' => 'Välj',
        'drag_handle' => 'Dra för att ordna om',
        'rotate_right' => 'Rotera höger',
        'rotate_left' => 'Rotera vänster',
        'flip_horizontal' => 'Vänd horisontellt',
        'flip_vertical' => 'Vänd vertikalt',
        'view' => 'Visa',
    ],
];
