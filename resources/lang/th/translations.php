<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'การดำเนินการที่เลือก',
        'bulk_delete' => 'ลบ',
        'cancel' => 'ยกเลิก',
        'delete' => 'ลบ',
        'detach' => 'แยก',
        'deselect' => 'ยกเลิกการเลือก',
        'upload' => 'อัปโหลด',
        'save' => 'บันทึก',
        'select' => 'เลือก',
        'add_existing' => 'เพิ่มที่มีอยู่',
        'next' => 'ถัดไป',
        'previous' => 'ก่อนหน้า',
        'crop' => 'ครอบตัด',
        'flip_horizontal' => 'พลิกแนวนอน',
        'flip_vertical' => 'พลิกแนวตั้ง',
        'rotate_left' => 'หมุนซ้าย',
        'rotate_right' => 'หมุนขวา',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'ดิสก์เก็บข้อมูล',
            'images' => 'รูปภาพ',
            'alt_text' => 'ข้อความทดแทน',
            'file_name' => 'ชื่อไฟล์',
            'search' => 'ค้นหา',
            'width' => 'ความกว้าง',
            'height' => 'ความสูง',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'หมุน',
        ],
        'helper_texts' => [
            'alt_text' => 'คำอธิบายสิ่งที่แสดงในรูปภาพเพื่อการเข้าถึงและ SEO ที่ดีขึ้น',
        ],
        'placeholders' => [
            'no_image_selected' => 'ไม่มีรูปภาพที่เลือก',
            'no_images_selected' => 'ไม่มีรูปภาพที่เลือก',
            'no_images_found' => 'ไม่พบรูปภาพ',
            'search' => 'ค้นหาตามชื่อไฟล์หรือข้อความทดแทน...',
        ],
        'prefixes' => [
            'width' => 'ความกว้าง',
            'height' => 'ความสูง',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'หมุน',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'องศา',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} ลบรูปภาพ :count รูป?|[2,*] ลบรูปภาพ :count รูป?',
            'delete' => 'ลบรูปภาพ',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} คุณแน่ใจหรือไม่ว่าต้องการลบรูปภาพที่เลือก?|[2,*] คุณแน่ใจหรือไม่ว่าต้องการลบรูปภาพที่เลือก :count รูป?',
            'delete' => 'คุณแน่ใจหรือไม่ว่าต้องการลบรูปภาพนี้?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'ลบรูปภาพสำเร็จแล้ว',
            'failure' => 'ไม่สามารถลบรูปภาพได้',
        ],
        'upload' => [
            'success' => '{1} อัปโหลดรูปภาพสำเร็จแล้ว|[2,*] อัปโหลดรูปภาพสำเร็จแล้ว',
            'failure' => '{1} ไม่สามารถอัปโหลดรูปภาพที่ให้มาได้|[2,*] ไม่สามารถอัปโหลดรูปภาพที่ให้มาได้',
        ],
        'edit_source_image' => [
            'success' => 'อัปเดตรูปภาพต้นฉบับสำเร็จแล้ว',
            'failure' => 'ไม่สามารถอัปเดตรูปภาพต้นฉบับได้',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'ไม่พบรูปภาพ',
        ],
        'title' => 'คลังรูปภาพ',
    ],
    'tooltips' => [
        'crop' => 'ครอบตัด',
        'deselect' => 'ยกเลิกการเลือก',
        'edit' => 'แก้ไข',
        'delete' => 'ลบ',
        'detach' => 'แยก',
        'select' => 'เลือก',
        'drag_handle' => 'ลากเพื่อจัดเรียงใหม่',
        'rotate_right' => 'หมุนขวา',
        'rotate_left' => 'หมุนซ้าย',
        'flip_horizontal' => 'พลิกแนวนอน',
        'flip_vertical' => 'พลิกแนวตั้ง',
        'view' => 'ดู',
    ],
];
