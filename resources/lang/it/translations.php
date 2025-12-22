<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Azioni di Selezione',
        'bulk_delete' => 'Elimina',
        'cancel' => 'Annulla',
        'delete' => 'Elimina',
        'detach' => 'Scollega',
        'deselect' => 'Deseleziona',
        'upload' => 'Carica',
        'save' => 'Salva',
        'select' => 'Seleziona',
        'add_existing' => 'Aggiungi Esistente',
        'next' => 'Avanti',
        'previous' => 'Precedente',
        'crop' => 'Ritaglia',
        'flip_horizontal' => 'Capovolgi Orizzontale',
        'flip_vertical' => 'Capovolgi Verticale',
        'rotate_left' => 'Ruota a Sinistra',
        'rotate_right' => 'Ruota a Destra',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Disco di Archiviazione',
            'images' => 'Immagine/i',
            'alt_text' => 'Testo Alt',
            'file_name' => 'Nome File',
            'search' => 'Cerca',
            'width' => 'Larghezza',
            'height' => 'Altezza',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Ruota',
        ],
        'helper_texts' => [
            'alt_text' => 'Descrizione di ciò che è mostrato nell\'immagine per migliorare l\'accessibilità e la SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Nessuna immagine selezionata.',
            'no_images_selected' => 'Nessuna immagine selezionata.',
            'no_images_found' => 'Nessuna immagine trovata.',
            'search' => 'Cerca per nome file o testo alt...',
        ],
        'prefixes' => [
            'width' => 'Larghezza',
            'height' => 'Altezza',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Ruota',
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
            'bulk_delete' => '{1} Eliminare :count Immagine?|[2,*] Eliminare :count Immagini?',
            'delete' => 'Elimina Immagine',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Sei sicuro di voler eliminare l\'immagine selezionata?|[2,*] Sei sicuro di voler eliminare le :count immagini selezionate?',
            'delete' => 'Sei sicuro di voler eliminare questa immagine?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Immagine eliminata con successo.',
            'failure' => 'Impossibile eliminare l\'immagine.',
        ],
        'upload' => [
            'success' => '{1} Immagine caricata con successo.|[2,*] Immagini caricate con successo.',
            'failure' => '{1} Impossibile caricare l\'immagine fornita.|[2,*] Impossibile caricare le immagini fornite.',
        ],
        'edit_source_image' => [
            'success' => 'Immagine sorgente aggiornata con successo.',
            'failure' => 'Impossibile aggiornare l\'immagine sorgente.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Nessuna immagine trovata',
        ],
        'title' => 'Libreria Immagini',
    ],
    'tooltips' => [
        'crop' => 'Ritaglia',
        'deselect' => 'Deseleziona',
        'edit' => 'Modifica',
        'delete' => 'Elimina',
        'detach' => 'Scollega',
        'select' => 'Seleziona',
        'drag_handle' => 'Trascina per riordinare',
        'rotate_right' => 'Ruota a Destra',
        'rotate_left' => 'Ruota a Sinistra',
        'flip_horizontal' => 'Capovolgi Orizzontale',
        'flip_vertical' => 'Capovolgi Verticale',
        'view' => 'Visualizza',
    ],
];
