<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Acciones de Selección',
        'bulk_delete' => 'Eliminar',
        'cancel' => 'Cancelar',
        'delete' => 'Eliminar',
        'detach' => 'Separar',
        'deselect' => 'Deseleccionar',
        'upload' => 'Subir',
        'save' => 'Guardar',
        'select' => 'Seleccionar',
        'add_existing' => 'Agregar Existente',
        'next' => 'Siguiente',
        'previous' => 'Anterior',
        'crop' => 'Recortar',
        'flip_horizontal' => 'Voltear Horizontal',
        'flip_vertical' => 'Voltear Vertical',
        'rotate_left' => 'Rotar Izquierda',
        'rotate_right' => 'Rotar Derecha',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Disco de Almacenamiento',
            'images' => 'Imagen(es)',
            'alt_text' => 'Texto Alt',
            'file_name' => 'Nombre del Archivo',
            'search' => 'Buscar',
            'width' => 'Ancho',
            'height' => 'Alto',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Rotar',
        ],
        'helper_texts' => [
            'alt_text' => 'Descripción de lo que se muestra en la imagen para mejorar la accesibilidad y SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Ninguna imagen seleccionada.',
            'no_images_selected' => 'Ninguna imagen seleccionada.',
            'no_images_found' => 'No se encontraron imágenes.',
            'search' => 'Buscar por nombre de archivo o texto alt...',
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
            'rotate' => '°',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} ¿Eliminar :count Imagen?|[2,*] ¿Eliminar :count Imágenes?',
            'delete' => 'Eliminar Imagen',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} ¿Está seguro de que desea eliminar la imagen seleccionada?|[2,*] ¿Está seguro de que desea eliminar las :count imágenes seleccionadas?',
            'delete' => '¿Está seguro de que desea eliminar esta imagen?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Imagen eliminada con éxito.',
            'failure' => 'Error al eliminar la imagen.',
        ],
        'upload' => [
            'success' => '{1} Imagen subida con éxito.|[2,*] Imágenes subidas con éxito.',
            'failure' => '{1} Error al subir la imagen proporcionada.|[2,*] Error al subir las imágenes proporcionadas.',
        ],
        'edit_source_image' => [
            'success' => 'Imagen fuente actualizada con éxito.',
            'failure' => 'Error al actualizar la imagen fuente.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'No se encontraron imágenes',
        ],
        'title' => 'Biblioteca de Imágenes',
    ],
    'tooltips' => [
        'crop' => 'Recortar',
        'deselect' => 'Deseleccionar',
        'edit' => 'Editar',
        'delete' => 'Eliminar',
        'detach' => 'Separar',
        'select' => 'Seleccionar',
        'drag_handle' => 'Arrastrar para reordenar',
        'rotate_right' => 'Rotar Derecha',
        'rotate_left' => 'Rotar Izquierda',
        'flip_horizontal' => 'Voltear Horizontal',
        'flip_vertical' => 'Voltear Vertical',
        'view' => 'Ver',
    ],
];
