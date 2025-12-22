<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Akcije Odabira',
        'bulk_delete' => 'Obriši',
        'cancel' => 'Otkaži',
        'delete' => 'Obriši',
        'detach' => 'Odvoji',
        'deselect' => 'Poništi Odabir',
        'upload' => 'Otpremi',
        'save' => 'Sačuvaj',
        'select' => 'Odaberi',
        'add_existing' => 'Dodaj Postojeće',
        'next' => 'Sledeće',
        'previous' => 'Prethodno',
        'crop' => 'Iseči',
        'flip_horizontal' => 'Obrni Horizontalno',
        'flip_vertical' => 'Obrni Vertikalno',
        'rotate_left' => 'Rotiraj Levo',
        'rotate_right' => 'Rotiraj Desno',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Disk za Čuvanje',
            'images' => 'Slike',
            'alt_text' => 'Alternativni Tekst',
            'file_name' => 'Ime Datoteke',
            'search' => 'Pretraži',
            'width' => 'Širina',
            'height' => 'Visina',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Rotiraj',
        ],
        'helper_texts' => [
            'alt_text' => 'Opis onoga što se prikazuje na slici radi bolje dostupnosti i SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Nijedna slika nije odabrana.',
            'no_images_selected' => 'Nijedna slika nije odabrana.',
            'no_images_found' => 'Nijedna slika nije pronađena.',
            'search' => 'Pretraži po imenu datoteke ili alternativnom tekstu...',
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
            'rotate' => 'stepeni',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} Obrisati :count sliku?|[2,*] Obrisati :count slika?',
            'delete' => 'Obriši Sliku',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Da li ste sigurni da želite obrisati odabranu sliku?|[2,*] Da li ste sigurni da želite obrisati odabrane :count slike?',
            'delete' => 'Da li ste sigurni da želite obrisati ovu sliku?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Slika je uspešno obrisana.',
            'failure' => 'Brisanje slike neuspešno.',
        ],
        'upload' => [
            'success' => '{1} Slika je uspešno otpremljena.|[2,*] Slike su uspešno otpremljene.',
            'failure' => '{1} Otpremanje pružene slike neuspešno.|[2,*] Otpremanje pruženih slika neuspešno.',
        ],
        'edit_source_image' => [
            'success' => 'Izvorna slika je uspešno ažurirana.',
            'failure' => 'Ažuriranje izvorne slike neuspešno.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Nijedna slika nije pronađena',
        ],
        'title' => 'Biblioteka Slika',
    ],
    'tooltips' => [
        'crop' => 'Iseči',
        'deselect' => 'Poništi Odabir',
        'edit' => 'Uredi',
        'delete' => 'Obriši',
        'detach' => 'Odvoji',
        'select' => 'Odaberi',
        'drag_handle' => 'Prevuci za preraspoređivanje',
        'rotate_right' => 'Rotiraj Desno',
        'rotate_left' => 'Rotiraj Levo',
        'flip_horizontal' => 'Obrni Horizontalno',
        'flip_vertical' => 'Obrni Vertikalno',
        'view' => 'Pogledaj',
    ],
];
