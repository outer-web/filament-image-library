<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Hành Động Lựa Chọn',
        'bulk_delete' => 'Xóa',
        'cancel' => 'Hủy',
        'delete' => 'Xóa',
        'detach' => 'Tách',
        'deselect' => 'Bỏ Chọn',
        'upload' => 'Tải Lên',
        'save' => 'Lưu',
        'select' => 'Chọn',
        'add_existing' => 'Thêm Hiện Có',
        'next' => 'Tiếp Theo',
        'previous' => 'Trước Đó',
        'crop' => 'Cắt Ảnh',
        'flip_horizontal' => 'Lật Ngang',
        'flip_vertical' => 'Lật Dọc',
        'rotate_left' => 'Quay Trái',
        'rotate_right' => 'Quay Phải',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Ổ Lưu Trữ',
            'images' => 'Hình Ảnh',
            'alt_text' => 'Văn Bản Thay Thế',
            'file_name' => 'Tên Tệp',
            'search' => 'Tìm Kiếm',
            'width' => 'Chiều Rộng',
            'height' => 'Chiều Cao',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Quay',
        ],
        'helper_texts' => [
            'alt_text' => 'Mô tả về những gì hiển thị trong hình ảnh để cải thiện khả năng truy cập và SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Không có hình ảnh nào được chọn.',
            'no_images_selected' => 'Không có hình ảnh nào được chọn.',
            'no_images_found' => 'Không tìm thấy hình ảnh.',
            'search' => 'Tìm kiếm theo tên tệp hoặc văn bản thay thế...',
        ],
        'prefixes' => [
            'width' => 'Chiều Rộng',
            'height' => 'Chiều Cao',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Quay',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'độ',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} Xóa :count Hình Ảnh?|[2,*] Xóa :count Hình Ảnh?',
            'delete' => 'Xóa Hình Ảnh',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Bạn có chắc chắn muốn xóa hình ảnh đã chọn?|[2,*] Bạn có chắc chắn muốn xóa :count hình ảnh đã chọn?',
            'delete' => 'Bạn có chắc chắn muốn xóa hình ảnh này?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Xóa hình ảnh thành công.',
            'failure' => 'Không thể xóa hình ảnh.',
        ],
        'upload' => [
            'success' => '{1} Tải lên hình ảnh thành công.|[2,*] Tải lên hình ảnh thành công.',
            'failure' => '{1} Không thể tải lên hình ảnh được cung cấp.|[2,*] Không thể tải lên các hình ảnh được cung cấp.',
        ],
        'edit_source_image' => [
            'success' => 'Cập nhật hình ảnh gốc thành công.',
            'failure' => 'Không thể cập nhật hình ảnh gốc.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Không tìm thấy hình ảnh',
        ],
        'title' => 'Thư Viện Hình Ảnh',
    ],
    'tooltips' => [
        'crop' => 'Cắt Ảnh',
        'deselect' => 'Bỏ Chọn',
        'edit' => 'Chỉnh Sửa',
        'delete' => 'Xóa',
        'detach' => 'Tách',
        'select' => 'Chọn',
        'drag_handle' => 'Kéo để sắp xếp lại',
        'rotate_right' => 'Quay Phải',
        'rotate_left' => 'Quay Trái',
        'flip_horizontal' => 'Lật Ngang',
        'flip_vertical' => 'Lật Dọc',
        'view' => 'Xem',
    ],
];
