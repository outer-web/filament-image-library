<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Valhandlingar',
        'bulk_delete' => 'Eyða',
        'cancel' => 'Hætta við',
        'delete' => 'Eyða',
        'detach' => 'Aftengja',
        'deselect' => 'Afvelja',
        'upload' => 'Hlaða upp',
        'save' => 'Vista',
        'select' => 'Velja',
        'add_existing' => 'Bæta við Fyrirliggjandi',
        'next' => 'Næsta',
        'previous' => 'Fyrri',
        'crop' => 'Skera',
        'flip_horizontal' => 'Snúa Lárétt',
        'flip_vertical' => 'Snúa Lóðrétt',
        'rotate_left' => 'Snúa til Vinstri',
        'rotate_right' => 'Snúa til Hægri',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Geymslumedia',
            'images' => 'Myndir',
            'alt_text' => 'Annar Texti',
            'file_name' => 'Skrárnafn',
            'search' => 'Leita',
            'width' => 'Breidd',
            'height' => 'Hæð',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Snúa',
        ],
        'helper_texts' => [
            'alt_text' => 'Lýsing á því sem sýnt er í myndinni fyrir betri aðgengi og SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Engin mynd valin.',
            'no_images_selected' => 'Engar myndir valdar.',
            'no_images_found' => 'Engar myndir fundnar.',
            'search' => 'Leita eftir skrárnafni eða öðrum texta...',
        ],
        'prefixes' => [
            'width' => 'Breidd',
            'height' => 'Hæð',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Snúa',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'gráður',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} Eyða :count Mynd?|[2,*] Eyða :count Myndum?',
            'delete' => 'Eyða Mynd',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Ertu viss um að þú viljir eyða valdri mynd?|[2,*] Ertu viss um að þú viljir eyða völdum :count myndum?',
            'delete' => 'Ertu viss um að þú viljir eyða þessari mynd?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Mynd eytt með góðum árangri.',
            'failure' => 'Mistókst að eyða mynd.',
        ],
        'upload' => [
            'success' => '{1} Mynd hlaðið upp með góðum árangri.|[2,*] Myndir hlaðnar upp með góðum árangri.',
            'failure' => '{1} Mistókst að hlaða upp tilgreindri mynd.|[2,*] Mistókst að hlaða upp tilgreindum myndum.',
        ],
        'edit_source_image' => [
            'success' => 'Upprunamynd uppfærð með góðum árangri.',
            'failure' => 'Mistókst að uppfæra upprunamynd.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Engar myndir fundnar',
        ],
        'title' => 'Myndasafn',
    ],
    'tooltips' => [
        'crop' => 'Skera',
        'deselect' => 'Afvelja',
        'edit' => 'Breyta',
        'delete' => 'Eyða',
        'detach' => 'Aftengja',
        'select' => 'Velja',
        'drag_handle' => 'Draga til að endurraða',
        'rotate_right' => 'Snúa til Hægri',
        'rotate_left' => 'Snúa til Vinstri',
        'flip_horizontal' => 'Snúa Lárétt',
        'flip_vertical' => 'Snúa Lóðrétt',
        'view' => 'Skoða',
    ],
];
