<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'إجراءات التحديد',
        'bulk_delete' => 'حذف',
        'cancel' => 'إلغاء',
        'delete' => 'حذف',
        'detach' => 'فصل',
        'deselect' => 'إلغاء التحديد',
        'upload' => 'رفع',
        'save' => 'حفظ',
        'select' => 'تحديد',
        'add_existing' => 'إضافة موجود',
        'next' => 'التالي',
        'previous' => 'السابق',
        'crop' => 'قص',
        'flip_horizontal' => 'قلب أفقي',
        'flip_vertical' => 'قلب عمودي',
        'rotate_left' => 'دوران يسار',
        'rotate_right' => 'دوران يمين',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'قرص التخزين',
            'images' => 'الصورة / الصور',
            'alt_text' => 'النص البديل',
            'file_name' => 'اسم الملف',
            'search' => 'بحث',
            'width' => 'العرض',
            'height' => 'الارتفاع',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'دوران',
        ],
        'helper_texts' => [
            'alt_text' => 'وصف لما هو معروض في الصورة لتحسين إمكانية الوصول والسيو.',
        ],
        'placeholders' => [
            'no_image_selected' => 'لم يتم تحديد صورة.',
            'no_images_selected' => 'لم يتم تحديد صور.',
            'no_images_found' => 'لم يتم العثور على صور.',
            'search' => 'البحث باسم الملف أو النص البديل...',
        ],
        'prefixes' => [
            'width' => 'العرض',
            'height' => 'الارتفاع',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'دوران',
        ],
        'suffixes' => [
            'width' => 'بكسل',
            'height' => 'بكسل',
            'x' => 'بكسل',
            'y' => 'بكسل',
            'rotate' => 'درجة',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => 'حذف :count صورة؟',
            'delete' => 'حذف الصورة',
        ],
        'descriptions' => [
            'bulk_delete' => 'هل أنت متأكد من أنك تريد حذف الصور المحددة البالغ عددها :count؟',
            'delete' => 'هل أنت متأكد من أنك تريد حذف هذه الصورة؟',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'تم حذف الصورة بنجاح.',
            'failure' => 'فشل في حذف الصورة.',
        ],
        'upload' => [
            'success' => 'تم رفع الصورة بنجاح.',
            'failure' => 'فشل في رفع الصورة المقدمة.',
        ],
        'edit_source_image' => [
            'success' => 'تم تحديث الصورة المصدر بنجاح.',
            'failure' => 'فشل في تحديث الصورة المصدر.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'لم يتم العثور على صور',
        ],
        'title' => 'مكتبة الصور',
    ],
    'tooltips' => [
        'crop' => 'قص',
        'deselect' => 'إلغاء التحديد',
        'edit' => 'تحرير',
        'delete' => 'حذف',
        'detach' => 'فصل',
        'select' => 'تحديد',
        'drag_handle' => 'اسحب لإعادة الترتيب',
        'rotate_right' => 'دوران يمين',
        'rotate_left' => 'دوران يسار',
        'flip_horizontal' => 'قلب أفقي',
        'flip_vertical' => 'قلب عمودي',
        'view' => 'عرض',
    ],
];
