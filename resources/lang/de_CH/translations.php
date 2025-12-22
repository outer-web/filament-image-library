<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Auswahl Aktionen',
        'bulk_delete' => 'Lösche',
        'cancel' => 'Abbreche',
        'delete' => 'Lösche',
        'detach' => 'Trenne',
        'deselect' => 'Abwähle',
        'upload' => 'Ufeglade',
        'save' => 'Speichere',
        'select' => 'Wähle',
        'add_existing' => 'Vorhandeni hinzuefüege',
        'next' => 'Nöchscht',
        'previous' => 'Vorigi',
        'crop' => 'Zuschnide',
        'flip_horizontal' => 'Horizontal spiegle',
        'flip_vertical' => 'Vertikal spiegle',
        'rotate_left' => 'Links dreje',
        'rotate_right' => 'Rechts dreje',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Speicher-Disk',
            'images' => 'Bild(er)',
            'alt_text' => 'Alt-Text',
            'file_name' => 'Dateiname',
            'search' => 'Sueche',
            'width' => 'Breiti',
            'height' => 'Höchi',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Dreje',
        ],
        'helper_texts' => [
            'alt_text' => 'Beschribig vo dem was im Bild zeigt wird für besseri Barrierefreiheit und SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Kei Bild usgwählt.',
            'no_images_selected' => 'Kei Bilder usgwählt.',
            'no_images_found' => 'Kei Bilder gfunde.',
            'search' => 'Nach Dateiname oder Alt-Text sueche...',
        ],
        'prefixes' => [
            'width' => 'Breiti',
            'height' => 'Höchi',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Dreje',
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
            'bulk_delete' => '{1} :count Bild lösche?|[2,*] :count Bilder lösche?',
            'delete' => 'Bild lösche',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Sind Sie sicher, dass Sie das usgwählti Bild lösche wönd?|[2,*] Sind Sie sicher, dass Sie die :count usgwählte Bilder lösche wönd?',
            'delete' => 'Sind Sie sicher, dass Sie das Bild lösche wönd?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Bild erfolgrich glöscht.',
            'failure' => 'Fehler bim Lösche vom Bild.',
        ],
        'upload' => [
            'success' => '{1} Bild erfolgrich ufeglade.|[2,*] Bilder erfolgrich ufeglade.',
            'failure' => '{1} Fehler bim Uflade vom bereitgstellte Bild.|[2,*] Fehler bim Uflade vo de bereitgstellte Bilder.',
        ],
        'edit_source_image' => [
            'success' => 'Quellbild erfolgrich aktualisiert.',
            'failure' => 'Fehler bim Aktualisiere vom Quellbild.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Kei Bilder gfunde',
        ],
        'title' => 'Bild-Bibliothek',
    ],
    'tooltips' => [
        'crop' => 'Zuschnide',
        'deselect' => 'Abwähle',
        'edit' => 'Bearbeite',
        'delete' => 'Lösche',
        'detach' => 'Trenne',
        'select' => 'Wähle',
        'drag_handle' => 'Zum Neuordne zieje',
        'rotate_right' => 'Rechts dreje',
        'rotate_left' => 'Links dreje',
        'flip_horizontal' => 'Horizontal spiegle',
        'flip_vertical' => 'Vertikal spiegle',
        'view' => 'Azeige',
    ],
];
