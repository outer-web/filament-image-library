<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => '批量选择操作',
        'bulk_delete' => '删除',
        'cancel' => '取消',
        'delete' => '删除',
        'detach' => '分离',
        'deselect' => '取消选择',
        'upload' => '上传',
        'save' => '保存',
        'select' => '选择',
        'add_existing' => '添加现有',
        'next' => '下一个',
        'previous' => '上一个',
        'crop' => '裁剪',
        'flip_horizontal' => '水平翻转',
        'flip_vertical' => '垂直翻转',
        'rotate_left' => '向左旋转',
        'rotate_right' => '向右旋转',
    ],
    'forms' => [
        'labels' => [
            'disk' => '存储磁盘',
            'images' => '图像',
            'alt_text' => '替代文本',
            'file_name' => '文件名',
            'search' => '搜索',
            'width' => '宽度',
            'height' => '高度',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => '旋转',
        ],
        'helper_texts' => [
            'alt_text' => '描述图像中显示的内容，以改善无障碍性和SEO。',
        ],
        'placeholders' => [
            'no_image_selected' => '未选择图像。',
            'no_images_selected' => '未选择图像。',
            'no_images_found' => '未找到图像。',
            'search' => '按文件名或替代文本搜索...',
        ],
        'prefixes' => [
            'width' => '宽度',
            'height' => '高度',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => '旋转',
        ],
        'suffixes' => [
            'width' => '像素',
            'height' => '像素',
            'x' => '像素',
            'y' => '像素',
            'rotate' => '度',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '删除 :count 个图像？',
            'delete' => '删除图像',
        ],
        'descriptions' => [
            'bulk_delete' => '您确定要删除选中的 :count 个图像吗？',
            'delete' => '您确定要删除此图像吗？',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => '图像删除成功。',
            'failure' => '删除图像失败。',
        ],
        'upload' => [
            'success' => '图像上传成功。',
            'failure' => '上传提供的图像失败。',
        ],
        'edit_source_image' => [
            'success' => '源图像更新成功。',
            'failure' => '更新源图像失败。',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => '未找到图像',
        ],
        'title' => '图像库',
    ],
    'tooltips' => [
        'crop' => '裁剪',
        'deselect' => '取消选择',
        'edit' => '编辑',
        'delete' => '删除',
        'detach' => '分离',
        'select' => '选择',
        'drag_handle' => '拖拽重新排序',
        'rotate_right' => '向右旋转',
        'rotate_left' => '向左旋转',
        'flip_horizontal' => '水平翻转',
        'flip_vertical' => '垂直翻转',
        'view' => '查看',
    ],
];
