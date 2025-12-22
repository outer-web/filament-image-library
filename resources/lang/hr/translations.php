<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Skupne Radnje Odabira',
        'bulk_delete' => 'Obriši',
        'cancel' => 'Otkaži',
        'delete' => 'Obriši',
        'detach' => 'Odvoji',
        'deselect' => 'Poništi Odabir',
        'upload' => 'Prenesu',
        'save' => 'Spremi',
        'select' => 'Odaberi',
        'add_existing' => 'Dodaj Postojeći',
        'next' => 'Sljedeći',
        'previous' => 'Prethodni',
        'crop' => 'Obreži',
        'flip_horizontal' => 'Okreni Vodoravno',
        'flip_vertical' => 'Okreni Okomito',
        'rotate_left' => 'Rotiraj Lijevo',
        'rotate_right' => 'Rotiraj Desno',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Disk za Pohranu',
            'images' => 'Slika(e)',
            'alt_text' => 'Alternativni Tekst',
            'file_name' => 'Naziv Datoteke',
            'search' => 'Pretraži',
            'width' => 'Širina',
            'height' => 'Visina',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Rotiraj',
        ],
        'helper_texts' => [
            'alt_text' => 'Opis onoga što je prikazano na slici radi bolje dostupnosti i SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Nijedna slika nije odabrana.',
            'no_images_selected' => 'Nijedna slika nije odabrana.',
            'no_images_found' => 'Nijedna slika nije pronađena.',
            'search' => 'Pretraži po nazivu datoteke ili alternativnom tekstu...',
        ],
        'prefixes' => [
            'width' => 'Širina',
            'height' => 'Visina',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Rotiraj',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'stupnjeva',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} Obrisati :count Sliku?|[2,*] Obrisati :count Slika?',
            'delete' => 'Obriši Sliku',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Jeste li sigurni da želite obrisati odabranu sliku?|[2,*] Jeste li sigurni da želite obrisati odabrane :count slike?',
            'delete' => 'Jeste li sigurni da želite obrisati ovu sliku?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Slika je uspješno obrisana.',
            'failure' => 'Neuspješno brisanje slike.',
        ],
        'upload' => [
            'success' => '{1} Slika je uspješno prenesena.|[2,*] Slike su uspješno prenesene.',
            'failure' => '{1} Neuspješno prenošenje pružene slike.|[2,*] Neuspješno prenošenje pruženih slika.',
        ],
        'edit_source_image' => [
            'success' => 'Izvorna slika je uspješno ažurirana.',
            'failure' => 'Neuspješno ažuriranje izvorne slike.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Nijedna slika nije pronađena',
        ],
        'title' => 'Biblioteka Slika',
    ],
    'tooltips' => [
        'crop' => 'Obreži',
        'deselect' => 'Poništi Odabir',
        'edit' => 'Uredi',
        'delete' => 'Obriši',
        'detach' => 'Odvoji',
        'select' => 'Odaberi',
        'drag_handle' => 'Povuci za promjenu redoslijeda',
        'rotate_right' => 'Rotiraj Desno',
        'rotate_left' => 'Rotiraj Lijevo',
        'flip_horizontal' => 'Okreni Vodoravno',
        'flip_vertical' => 'Okreni Okomito',
        'view' => 'Pogledaj',
    ],
];
