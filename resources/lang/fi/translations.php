<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Valintatoiminnot',
        'bulk_delete' => 'Poista',
        'cancel' => 'Peruuta',
        'delete' => 'Poista',
        'detach' => 'Irrota',
        'deselect' => 'Poista valinta',
        'upload' => 'Lataa',
        'save' => 'Tallenna',
        'select' => 'Valitse',
        'add_existing' => 'Lisää Olemassa Oleva',
        'next' => 'Seuraava',
        'previous' => 'Edellinen',
        'crop' => 'Rajaa',
        'flip_horizontal' => 'Käännä Vaakasuunnassa',
        'flip_vertical' => 'Käännä Pystysuunnassa',
        'rotate_left' => 'Kierrä Vasemmalle',
        'rotate_right' => 'Kierrä Oikealle',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Tallennuslevy',
            'images' => 'Kuva(t)',
            'alt_text' => 'Alt-teksti',
            'file_name' => 'Tiedostonimi',
            'search' => 'Haku',
            'width' => 'Leveys',
            'height' => 'Korkeus',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Kierrä',
        ],
        'helper_texts' => [
            'alt_text' => 'Kuvaus siitä, mitä kuvassa näkyy paremman saavutettavuuden ja SEO:n vuoksi.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Ei kuvaa valittuna.',
            'no_images_selected' => 'Ei kuvia valittuna.',
            'no_images_found' => 'Kuvia ei löytynyt.',
            'search' => 'Hae tiedostonimellä tai alt-tekstillä...',
        ],
        'prefixes' => [
            'width' => 'Leveys',
            'height' => 'Korkeus',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Kierrä',
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
            'bulk_delete' => '{1} Poista :count kuva?|[2,*] Poista :count kuvaa?',
            'delete' => 'Poista Kuva',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Haluatko varmasti poistaa valitun kuvan?|[2,*] Haluatko varmasti poistaa valitut :count kuvaa?',
            'delete' => 'Haluatko varmasti poistaa tämän kuvan?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Kuva poistettu onnistuneesti.',
            'failure' => 'Kuvan poistaminen epäonnistui.',
        ],
        'upload' => [
            'success' => '{1} Kuva ladattu onnistuneesti.|[2,*] Kuvat ladattu onnistuneesti.',
            'failure' => '{1} Annetun kuvan lataaminen epäonnistui.|[2,*] Annettujen kuvien lataaminen epäonnistui.',
        ],
        'edit_source_image' => [
            'success' => 'Lähdekuva päivitetty onnistuneesti.',
            'failure' => 'Lähdekuvan päivittäminen epäonnistui.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Kuvia ei löytynyt',
        ],
        'title' => 'Kuvakirjasto',
    ],
    'tooltips' => [
        'crop' => 'Rajaa',
        'deselect' => 'Poista valinta',
        'edit' => 'Muokkaa',
        'delete' => 'Poista',
        'detach' => 'Irrota',
        'select' => 'Valitse',
        'drag_handle' => 'Vedä järjestääksesi uudelleen',
        'rotate_right' => 'Kierrä Oikealle',
        'rotate_left' => 'Kierrä Vasemmalle',
        'flip_horizontal' => 'Käännä Vaakasuunnassa',
        'flip_vertical' => 'Käännä Pystysuunnassa',
        'view' => 'Näytä',
    ],
];
