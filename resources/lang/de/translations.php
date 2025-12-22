<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Auswahlaktionen',
        'bulk_delete' => 'Löschen',
        'cancel' => 'Abbrechen',
        'delete' => 'Löschen',
        'detach' => 'Trennen',
        'deselect' => 'Abwählen',
        'upload' => 'Hochladen',
        'save' => 'Speichern',
        'select' => 'Auswählen',
        'add_existing' => 'Vorhandene hinzufügen',
        'next' => 'Weiter',
        'previous' => 'Zurück',
        'crop' => 'Zuschneiden',
        'flip_horizontal' => 'Horizontal spiegeln',
        'flip_vertical' => 'Vertikal spiegeln',
        'rotate_left' => 'Links drehen',
        'rotate_right' => 'Rechts drehen',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Speicher-Disk',
            'images' => 'Bild(er)',
            'alt_text' => 'Alt-Text',
            'file_name' => 'Dateiname',
            'search' => 'Suchen',
            'width' => 'Breite',
            'height' => 'Höhe',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Drehen',
        ],
        'helper_texts' => [
            'alt_text' => 'Beschreibung dessen, was im Bild gezeigt wird, für verbesserte Barrierefreiheit und SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Kein Bild ausgewählt.',
            'no_images_selected' => 'Keine Bilder ausgewählt.',
            'no_images_found' => 'Keine Bilder gefunden.',
            'search' => 'Nach Dateiname oder Alt-Text suchen...',
        ],
        'prefixes' => [
            'width' => 'Breite',
            'height' => 'Höhe',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Drehen',
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
            'bulk_delete' => '{1} :count Bild löschen?|[2,*] :count Bilder löschen?',
            'delete' => 'Bild löschen',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Sind Sie sicher, dass Sie das ausgewählte Bild löschen möchten?|[2,*] Sind Sie sicher, dass Sie die :count ausgewählten Bilder löschen möchten?',
            'delete' => 'Sind Sie sicher, dass Sie dieses Bild löschen möchten?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Bild erfolgreich gelöscht.',
            'failure' => 'Fehler beim Löschen des Bildes.',
        ],
        'upload' => [
            'success' => '{1} Bild erfolgreich hochgeladen.|[2,*] Bilder erfolgreich hochgeladen.',
            'failure' => '{1} Fehler beim Hochladen des bereitgestellten Bildes.|[2,*] Fehler beim Hochladen der bereitgestellten Bilder.',
        ],
        'edit_source_image' => [
            'success' => 'Quellbild erfolgreich aktualisiert.',
            'failure' => 'Fehler beim Aktualisieren des Quellbildes.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Keine Bilder gefunden',
        ],
        'title' => 'Bildbibliothek',
    ],
    'tooltips' => [
        'crop' => 'Zuschneiden',
        'deselect' => 'Abwählen',
        'edit' => 'Bearbeiten',
        'delete' => 'Löschen',
        'detach' => 'Trennen',
        'select' => 'Auswählen',
        'drag_handle' => 'Zum Neuordnen ziehen',
        'rotate_right' => 'Rechts drehen',
        'rotate_left' => 'Links drehen',
        'flip_horizontal' => 'Horizontal spiegeln',
        'flip_vertical' => 'Vertikal spiegeln',
        'view' => 'Anzeigen',
    ],
];
