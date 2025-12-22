<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Gníomhartha Roghnaithe',
        'bulk_delete' => 'Scrios',
        'cancel' => 'Cealaigh',
        'delete' => 'Scrios',
        'detach' => 'Scaoil',
        'deselect' => 'Díroghnú',
        'upload' => 'Uasluchtaigh',
        'save' => 'Sábháil',
        'select' => 'Roghnaigh',
        'add_existing' => 'Cuir Ceann Atá Ann Cheana',
        'next' => 'Ar Aghaidh',
        'previous' => 'Roimhe Seo',
        'crop' => 'Bearr',
        'flip_horizontal' => 'Iompaigh go Cothrománach',
        'flip_vertical' => 'Iompaigh go hIngearach',
        'rotate_left' => 'Rothlaigh ar Chlé',
        'rotate_right' => 'Rothlaigh ar Dheis',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Diosca Stórála',
            'images' => 'Íomhá(nna)',
            'alt_text' => 'Téacs Malartach',
            'file_name' => 'Ainm Comhaid',
            'search' => 'Cuardaigh',
            'width' => 'Leithead',
            'height' => 'Airde',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Rothlaigh',
        ],
        'helper_texts' => [
            'alt_text' => 'Cur síos ar a bhfuil le feiceáil san íomhá chun inrochtaineacht agus SEO a fheabhsú.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Níl aon íomhá roghnaithe.',
            'no_images_selected' => 'Níl aon íomhánna roghnaithe.',
            'no_images_found' => 'Níor aimsíodh aon íomhánna.',
            'search' => 'Cuardaigh de réir ainm comhaid nó téacs malartach...',
        ],
        'prefixes' => [
            'width' => 'Leithead',
            'height' => 'Airde',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Rothlaigh',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'céim',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} Scrios :count Íomhá?|[2,*] Scrios :count Íomhánna?',
            'delete' => 'Scrios Íomhá',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} An bhfuil tú cinnte gur mian leat an íomhá roghnaithe a scriosadh?|[2,*] An bhfuil tú cinnte gur mian leat na :count íomhánna roghnaithe a scriosadh?',
            'delete' => 'An bhfuil tú cinnte gur mian leat an íomhá seo a scriosadh?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Scriosadh an íomhá go rathúil.',
            'failure' => 'Theip ar scriosadh na híomhá.',
        ],
        'upload' => [
            'success' => '{1} Uasluchtaíodh an íomhá go rathúil.|[2,*] Uasluchtaíodh na híomhánna go rathúil.',
            'failure' => '{1} Theip ar uasluchtú na híomhá a cuireadh ar fáil.|[2,*] Theip ar uasluchtú na n-íomhánna a cuireadh ar fáil.',
        ],
        'edit_source_image' => [
            'success' => 'Nuashonraíodh íomhá fhoinse go rathúil.',
            'failure' => 'Theip ar nuashonrú íomhá fhoinse.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Níor aimsíodh aon íomhánna',
        ],
        'title' => 'Leabharlann Íomhánna',
    ],
    'tooltips' => [
        'crop' => 'Bearr',
        'deselect' => 'Díroghnú',
        'edit' => 'Cuir in Eagar',
        'delete' => 'Scrios',
        'detach' => 'Scaoil',
        'select' => 'Roghnaigh',
        'drag_handle' => 'Tarraing chun athordú',
        'rotate_right' => 'Rothlaigh ar Dheis',
        'rotate_left' => 'Rothlaigh ar Chlé',
        'flip_horizontal' => 'Iompaigh go Cothrománach',
        'flip_vertical' => 'Iompaigh go hIngearach',
        'view' => 'Amharc',
    ],
];
