<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => '選択アクション',
        'bulk_delete' => '削除',
        'cancel' => 'キャンセル',
        'delete' => '削除',
        'detach' => '切り離す',
        'deselect' => '選択解除',
        'upload' => 'アップロード',
        'save' => '保存',
        'select' => '選択',
        'add_existing' => '既存を追加',
        'next' => '次へ',
        'previous' => '前へ',
        'crop' => 'トリミング',
        'flip_horizontal' => '水平反転',
        'flip_vertical' => '垂直反転',
        'rotate_left' => '左回転',
        'rotate_right' => '右回転',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'ストレージディスク',
            'images' => '画像',
            'alt_text' => 'Altテキスト',
            'file_name' => 'ファイル名',
            'search' => '検索',
            'width' => '幅',
            'height' => '高さ',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => '回転',
        ],
        'helper_texts' => [
            'alt_text' => 'アクセシビリティとSEOの改善のため、画像に表示されている内容の説明。',
        ],
        'placeholders' => [
            'no_image_selected' => '画像が選択されていません。',
            'no_images_selected' => '画像が選択されていません。',
            'no_images_found' => '画像が見つかりません。',
            'search' => 'ファイル名またはAltテキストで検索...',
        ],
        'prefixes' => [
            'width' => '幅',
            'height' => '高さ',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => '回転',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => '度',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => ':count個の画像を削除しますか？',
            'delete' => '画像を削除',
        ],
        'descriptions' => [
            'bulk_delete' => '選択した:count個の画像を削除してもよろしいですか？',
            'delete' => 'この画像を削除してもよろしいですか？',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => '画像が正常に削除されました。',
            'failure' => '画像の削除に失敗しました。',
        ],
        'upload' => [
            'success' => '画像が正常にアップロードされました。',
            'failure' => '提供された画像のアップロードに失敗しました。',
        ],
        'edit_source_image' => [
            'success' => 'ソース画像が正常に更新されました。',
            'failure' => 'ソース画像の更新に失敗しました。',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => '画像が見つかりません',
        ],
        'title' => '画像ライブラリ',
    ],
    'tooltips' => [
        'crop' => 'トリミング',
        'deselect' => '選択解除',
        'edit' => '編集',
        'delete' => '削除',
        'detach' => '切り離す',
        'select' => '選択',
        'drag_handle' => 'ドラッグして並び替え',
        'rotate_right' => '右回転',
        'rotate_left' => '左回転',
        'flip_horizontal' => '水平反転',
        'flip_vertical' => '垂直反転',
        'view' => '表示',
    ],
];
