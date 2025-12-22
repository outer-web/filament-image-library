<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Tömeges Kijelölési Műveletek',
        'bulk_delete' => 'Törlés',
        'cancel' => 'Mégse',
        'delete' => 'Törlés',
        'detach' => 'Leválasztás',
        'deselect' => 'Kijelölés megszüntetése',
        'upload' => 'Feltöltés',
        'save' => 'Mentés',
        'select' => 'Kijelölés',
        'add_existing' => 'meglévő hozzáadása',
        'next' => 'Következő',
        'previous' => 'Előző',
        'crop' => 'Vágás',
        'flip_horizontal' => 'Vízszintes tükrözés',
        'flip_vertical' => 'Függőleges tükrözés',
        'rotate_left' => 'Forgatás balra',
        'rotate_right' => 'Forgatás jobbra',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Tárolólemez',
            'images' => 'Kép(ek)',
            'alt_text' => 'Alternatív szöveg',
            'file_name' => 'Fájlnév',
            'search' => 'Keresés',
            'width' => 'Szélesség',
            'height' => 'Magasság',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Forgatás',
        ],
        'helper_texts' => [
            'alt_text' => 'A képen látható dolgok leírása a jobb akadálymentesítés és SEO érdekében.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Nincs kép kiválasztva.',
            'no_images_selected' => 'Nincsenek képek kiválasztva.',
            'no_images_found' => 'Nem találhatók képek.',
            'search' => 'Keresés fájlnév vagy alternatív szöveg alapján...',
        ],
        'prefixes' => [
            'width' => 'Szélesség',
            'height' => 'Magasság',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Forgatás',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'fok',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} :count kép törlése?|[2,*] :count kép törlése?',
            'delete' => 'Kép törlése',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Biztosan törölni szeretné a kiválasztott képet?|[2,*] Biztosan törölni szeretné a kiválasztott :count képet?',
            'delete' => 'Biztosan törölni szeretné ezt a képet?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Kép sikeresen törölve.',
            'failure' => 'Nem sikerült törölni a képet.',
        ],
        'upload' => [
            'success' => '{1} Kép sikeresen feltöltve.|[2,*] Képek sikeresen feltöltve.',
            'failure' => '{1} Nem sikerült feltölteni a megadott képet.|[2,*] Nem sikerült feltölteni a megadott képeket.',
        ],
        'edit_source_image' => [
            'success' => 'Forráskép sikeresen frissítve.',
            'failure' => 'Nem sikerült frissíteni a forrásképet.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Nem találhatók képek',
        ],
        'title' => 'Képkönyvtár',
    ],
    'tooltips' => [
        'crop' => 'Vágás',
        'deselect' => 'Kijelölés megszüntetése',
        'edit' => 'Szerkesztés',
        'delete' => 'Törlés',
        'detach' => 'Leválasztás',
        'select' => 'Kijelölés',
        'drag_handle' => 'Húzza az átrendezéshez',
        'rotate_right' => 'Forgatás jobbra',
        'rotate_left' => 'Forgatás balra',
        'flip_horizontal' => 'Vízszintes tükrözés',
        'flip_vertical' => 'Függőleges tükrözés',
        'view' => 'Megtekintés',
    ],
];
