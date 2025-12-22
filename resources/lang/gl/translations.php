<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Accións de Selección',
        'bulk_delete' => 'Eliminar',
        'cancel' => 'Cancelar',
        'delete' => 'Eliminar',
        'detach' => 'Separar',
        'deselect' => 'Deseleccionar',
        'upload' => 'Subir',
        'save' => 'Gardar',
        'select' => 'Seleccionar',
        'add_existing' => 'Engadir Existente',
        'next' => 'Seguinte',
        'previous' => 'Anterior',
        'crop' => 'Recortar',
        'flip_horizontal' => 'Inverter Horizontalmente',
        'flip_vertical' => 'Inverter Verticalmente',
        'rotate_left' => 'Rotar á Esquerda',
        'rotate_right' => 'Rotar á Dereita',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Disco de Almacenamento',
            'images' => 'Imaxe(ns)',
            'alt_text' => 'Texto Alternativo',
            'file_name' => 'Nome do Ficheiro',
            'search' => 'Buscar',
            'width' => 'Ancho',
            'height' => 'Alto',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Rotar',
        ],
        'helper_texts' => [
            'alt_text' => 'Descrición do que se mostra na imaxe para mellor accesibilidade e SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Non hai imaxe seleccionada.',
            'no_images_selected' => 'Non hai imaxes seleccionadas.',
            'no_images_found' => 'Non se atoparon imaxes.',
            'search' => 'Buscar por nome de ficheiro ou texto alternativo...',
        ],
        'prefixes' => [
            'width' => 'Ancho',
            'height' => 'Alto',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Rotar',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'graos',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} Eliminar :count Imaxe?|[2,*] Eliminar :count Imaxes?',
            'delete' => 'Eliminar Imaxe',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Estás seguro de que queres eliminar a imaxe seleccionada?|[2,*] Estás seguro de que queres eliminar as :count imaxes seleccionadas?',
            'delete' => 'Estás seguro de que queres eliminar esta imaxe?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Imaxe eliminada correctamente.',
            'failure' => 'Erro ao eliminar a imaxe.',
        ],
        'upload' => [
            'success' => '{1} Imaxe subida correctamente.|[2,*] Imaxes subidas correctamente.',
            'failure' => '{1} Erro ao subir a imaxe proporcionada.|[2,*] Erro ao subir as imaxes proporcionadas.',
        ],
        'edit_source_image' => [
            'success' => 'Imaxe orixe actualizada correctamente.',
            'failure' => 'Erro ao actualizar a imaxe orixe.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Non se atoparon imaxes',
        ],
        'title' => 'Biblioteca de Imaxes',
    ],
    'tooltips' => [
        'crop' => 'Recortar',
        'deselect' => 'Deseleccionar',
        'edit' => 'Editar',
        'delete' => 'Eliminar',
        'detach' => 'Separar',
        'select' => 'Seleccionar',
        'drag_handle' => 'Arrastrar para reordenar',
        'rotate_right' => 'Rotar á Dereita',
        'rotate_left' => 'Rotar á Esquerda',
        'flip_horizontal' => 'Inverter Horizontalmente',
        'flip_vertical' => 'Inverter Verticalmente',
        'view' => 'Ver',
    ],
];
