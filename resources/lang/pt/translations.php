<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Ações de Seleção',
        'bulk_delete' => 'Excluir',
        'cancel' => 'Cancelar',
        'delete' => 'Excluir',
        'detach' => 'Desanexar',
        'deselect' => 'Desmarcar',
        'upload' => 'Carregar',
        'save' => 'Salvar',
        'select' => 'Selecionar',
        'add_existing' => 'Adicionar Existente',
        'next' => 'Próximo',
        'previous' => 'Anterior',
        'crop' => 'Cortar',
        'flip_horizontal' => 'Espelhar Horizontal',
        'flip_vertical' => 'Espelhar Vertical',
        'rotate_left' => 'Girar à Esquerda',
        'rotate_right' => 'Girar à Direita',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Disco de Armazenamento',
            'images' => 'Imagem(ns)',
            'alt_text' => 'Texto Alt',
            'file_name' => 'Nome do Arquivo',
            'search' => 'Pesquisar',
            'width' => 'Largura',
            'height' => 'Altura',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Girar',
        ],
        'helper_texts' => [
            'alt_text' => 'Descrição do que é mostrado na imagem para melhor acessibilidade e SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Nenhuma imagem selecionada.',
            'no_images_selected' => 'Nenhuma imagem selecionada.',
            'no_images_found' => 'Nenhuma imagem encontrada.',
            'search' => 'Pesquisar por nome do arquivo ou texto alt...',
        ],
        'prefixes' => [
            'width' => 'Largura',
            'height' => 'Altura',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Girar',
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
            'bulk_delete' => '{1} Excluir :count Imagem?|[2,*] Excluir :count Imagens?',
            'delete' => 'Excluir Imagem',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Tem certeza de que deseja excluir a imagem selecionada?|[2,*] Tem certeza de que deseja excluir as :count imagens selecionadas?',
            'delete' => 'Tem certeza de que deseja excluir esta imagem?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Imagem excluída com sucesso.',
            'failure' => 'Falha ao excluir a imagem.',
        ],
        'upload' => [
            'success' => '{1} Imagem carregada com sucesso.|[2,*] Imagens carregadas com sucesso.',
            'failure' => '{1} Falha ao carregar a imagem fornecida.|[2,*] Falha ao carregar as imagens fornecidas.',
        ],
        'edit_source_image' => [
            'success' => 'Imagem fonte atualizada com sucesso.',
            'failure' => 'Falha ao atualizar a imagem fonte.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Nenhuma imagem encontrada',
        ],
        'title' => 'Biblioteca de Imagens',
    ],
    'tooltips' => [
        'crop' => 'Cortar',
        'deselect' => 'Desmarcar',
        'edit' => 'Editar',
        'delete' => 'Excluir',
        'detach' => 'Desanexar',
        'select' => 'Selecionar',
        'drag_handle' => 'Arrastar para reordenar',
        'rotate_right' => 'Girar à Direita',
        'rotate_left' => 'Girar à Esquerda',
        'flip_horizontal' => 'Espelhar Horizontal',
        'flip_vertical' => 'Espelhar Vertical',
        'view' => 'Visualizar',
    ],
];
