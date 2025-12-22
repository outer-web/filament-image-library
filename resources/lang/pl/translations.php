<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Akcje Wyboru',
        'bulk_delete' => 'Usuń',
        'cancel' => 'Anuluj',
        'delete' => 'Usuń',
        'detach' => 'Odłącz',
        'deselect' => 'Odznacz',
        'upload' => 'Prześlij',
        'save' => 'Zapisz',
        'select' => 'Wybierz',
        'add_existing' => 'Dodaj Istniejący',
        'next' => 'Następny',
        'previous' => 'Poprzedni',
        'crop' => 'Przytnij',
        'flip_horizontal' => 'Odwróć Poziomo',
        'flip_vertical' => 'Odwróć Pionowo',
        'rotate_left' => 'Obróć w Lewo',
        'rotate_right' => 'Obróć w Prawo',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Dysk Pamięci',
            'images' => 'Obrazy',
            'alt_text' => 'Tekst Alternatywny',
            'file_name' => 'Nazwa Pliku',
            'search' => 'Szukaj',
            'width' => 'Szerokość',
            'height' => 'Wysokość',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Obróć',
        ],
        'helper_texts' => [
            'alt_text' => 'Opis tego, co jest pokazane na obrazie dla lepszej dostępności i SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Nie wybrano obrazu.',
            'no_images_selected' => 'Nie wybrano obrazów.',
            'no_images_found' => 'Nie znaleziono obrazów.',
            'search' => 'Szukaj po nazwie pliku lub tekście alternatywnym...',
        ],
        'prefixes' => [
            'width' => 'Szerokość',
            'height' => 'Wysokość',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Obróć',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'stopni',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} Usunąć :count Obraz?|[2,*] Usunąć :count Obrazów?',
            'delete' => 'Usuń Obraz',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Czy na pewno chcesz usunąć wybrany obraz?|[2,*] Czy na pewno chcesz usunąć wybrane :count obrazy?',
            'delete' => 'Czy na pewno chcesz usunąć ten obraz?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Obraz został pomyślnie usunięty.',
            'failure' => 'Nie udało się usunąć obrazu.',
        ],
        'upload' => [
            'success' => '{1} Obraz został pomyślnie przesłany.|[2,*] Obrazy zostały pomyślnie przesłane.',
            'failure' => '{1} Nie udało się przesłać podanego obrazu.|[2,*] Nie udało się przesłać podanych obrazów.',
        ],
        'edit_source_image' => [
            'success' => 'Obraz źródłowy został pomyślnie zaktualizowany.',
            'failure' => 'Nie udało się zaktualizować obrazu źródłowego.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Nie znaleziono obrazów',
        ],
        'title' => 'Biblioteka Obrazów',
    ],
    'tooltips' => [
        'crop' => 'Przytnij',
        'deselect' => 'Odznacz',
        'edit' => 'Edytuj',
        'delete' => 'Usuń',
        'detach' => 'Odłącz',
        'select' => 'Wybierz',
        'drag_handle' => 'Przeciągnij, aby zmienić kolejność',
        'rotate_right' => 'Obróć w Prawo',
        'rotate_left' => 'Obróć w Lewo',
        'flip_horizontal' => 'Odwróć Poziomo',
        'flip_vertical' => 'Odwróć Pionowo',
        'view' => 'Pokaż',
    ],
];
