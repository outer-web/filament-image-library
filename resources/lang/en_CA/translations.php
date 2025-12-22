<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Sélection Actions', // Using more Canadian-style terminology
        'bulk_delete' => 'Supprimer',
        'cancel' => 'Annuler',
        'delete' => 'Supprimer',
        'detach' => 'Détacher',
        'deselect' => 'Désélectionner',
        'upload' => 'Téléverser', // Canadian French uses "téléverser" instead of "télécharger"
        'save' => 'Sauvegarder',
        'select' => 'Sélectionner',
        'add_existing' => 'Ajouter Existant',
        'next' => 'Suivant',
        'previous' => 'Précédent',
        'crop' => 'Rogner',
        'flip_horizontal' => 'Retourner Horizontal',
        'flip_vertical' => 'Retourner Vertical',
        'rotate_left' => 'Rotation Gauche',
        'rotate_right' => 'Rotation Droite',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Disque de Stockage',
            'images' => 'Image(s)',
            'alt_text' => 'Texte Alt',
            'file_name' => 'Nom du Fichier',
            'search' => 'Rechercher',
            'width' => 'Largeur',
            'height' => 'Hauteur',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Rotation',
        ],
        'helper_texts' => [
            'alt_text' => 'Description de ce qui est affiché dans l\'image pour améliorer l\'accessibilité et le référencement.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Aucune image sélectionnée.',
            'no_images_selected' => 'Aucune image sélectionnée.',
            'no_images_found' => 'Aucune image trouvée.',
            'search' => 'Rechercher par nom de fichier ou texte alt...',
        ],
        'prefixes' => [
            'width' => 'Largeur',
            'height' => 'Hauteur',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Rotation',
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
            'bulk_delete' => '{1} Supprimer :count Image ?|[2,*] Supprimer :count Images ?',
            'delete' => 'Supprimer l\'Image',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Êtes-vous sûr de vouloir supprimer l\'image sélectionnée ?|[2,*] Êtes-vous sûr de vouloir supprimer les :count images sélectionnées ?',
            'delete' => 'Êtes-vous sûr de vouloir supprimer cette image ?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Image supprimée avec succès.',
            'failure' => 'Échec de la suppression de l\'image.',
        ],
        'upload' => [
            'success' => '{1} Image téléversée avec succès.|[2,*] Images téléversées avec succès.',
            'failure' => '{1} Échec du téléversement de l\'image fournie.|[2,*] Échec du téléversement des images fournies.',
        ],
        'edit_source_image' => [
            'success' => 'Image source mise à jour avec succès.',
            'failure' => 'Échec de la mise à jour de l\'image source.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Aucune image trouvée',
        ],
        'title' => 'Bibliothèque d\'Images',
    ],
    'tooltips' => [
        'crop' => 'Rogner',
        'deselect' => 'Désélectionner',
        'edit' => 'Modifier',
        'delete' => 'Supprimer',
        'detach' => 'Détacher',
        'select' => 'Sélectionner',
        'drag_handle' => 'Glisser pour réorganiser',
        'rotate_right' => 'Rotation Droite',
        'rotate_left' => 'Rotation Gauche',
        'flip_horizontal' => 'Retourner Horizontal',
        'flip_vertical' => 'Retourner Vertical',
        'view' => 'Voir',
    ],
];
