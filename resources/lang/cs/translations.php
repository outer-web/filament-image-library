<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Výběrové Akce',
        'bulk_delete' => 'Smazat',
        'cancel' => 'Zrušit',
        'delete' => 'Smazat',
        'detach' => 'Odpojit',
        'deselect' => 'Zrušit výběr',
        'upload' => 'Nahrát',
        'save' => 'Uložit',
        'select' => 'Vybrat',
        'add_existing' => 'Přidat Existující',
        'next' => 'Další',
        'previous' => 'Předchozí',
        'crop' => 'Oříznout',
        'flip_horizontal' => 'Překlopit Horizontálně',
        'flip_vertical' => 'Překlopit Vertikálně',
        'rotate_left' => 'Otočit Vlevo',
        'rotate_right' => 'Otočit Vpravo',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Úložný Disk',
            'images' => 'Obrázek(y)',
            'alt_text' => 'Alt Text',
            'file_name' => 'Název Souboru',
            'search' => 'Hledat',
            'width' => 'Šířka',
            'height' => 'Výška',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Otočit',
        ],
        'helper_texts' => [
            'alt_text' => 'Popis toho, co je na obrázku zobrazeno pro lepší přístupnost a SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Nebyl vybrán žádný obrázek.',
            'no_images_selected' => 'Nebyly vybrány žádné obrázky.',
            'no_images_found' => 'Nebyly nalezeny žádné obrázky.',
            'search' => 'Hledat podle názvu souboru nebo alt textu...',
        ],
        'prefixes' => [
            'width' => 'Šířka',
            'height' => 'Výška',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Otočit',
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
            'bulk_delete' => '{1} Smazat :count Obrázek?|[2,4] Smazat :count Obrázky?|[5,*] Smazat :count Obrázků?',
            'delete' => 'Smazat Obrázek',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Opravdu chcete smazat vybraný obrázek?|[2,4] Opravdu chcete smazat vybrané :count obrázky?|[5,*] Opravdu chcete smazat vybraných :count obrázků?',
            'delete' => 'Opravdu chcete smazat tento obrázek?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Obrázek byl úspěšně smazán.',
            'failure' => 'Nepodařilo se smazat obrázek.',
        ],
        'upload' => [
            'success' => '{1} Obrázek byl úspěšně nahrán.|[2,4] Obrázky byly úspěšně nahrány.|[5,*] Obrázků bylo úspěšně nahráno.',
            'failure' => '{1} Nepodařilo se nahrát poskytnutý obrázek.|[2,4] Nepodařilo se nahrát poskytnuté obrázky.|[5,*] Nepodařilo se nahrát poskytnuté obrázky.',
        ],
        'edit_source_image' => [
            'success' => 'Zdrojový obrázek byl úspěšně aktualizován.',
            'failure' => 'Nepodařilo se aktualizovat zdrojový obrázek.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Nebyly nalezeny žádné obrázky',
        ],
        'title' => 'Knihovna Obrázků',
    ],
    'tooltips' => [
        'crop' => 'Oříznout',
        'deselect' => 'Zrušit výběr',
        'edit' => 'Upravit',
        'delete' => 'Smazat',
        'detach' => 'Odpojit',
        'select' => 'Vybrat',
        'drag_handle' => 'Přetáhnout pro změnu pořadí',
        'rotate_right' => 'Otočit Vpravo',
        'rotate_left' => 'Otočit Vlevo',
        'flip_horizontal' => 'Překlopit Horizontálně',
        'flip_vertical' => 'Překlopit Vertikálně',
        'view' => 'Zobrazit',
    ],
];
