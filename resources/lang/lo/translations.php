<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'ການກະທໍາການເລືອກ',
        'bulk_delete' => 'ລົບ',
        'cancel' => 'ຍົກເລີກ',
        'delete' => 'ລົບ',
        'detach' => 'ແຍກ',
        'deselect' => 'ບໍ່ເລືອກ',
        'upload' => 'ອັບໂຫລດ',
        'save' => 'ບັນທຶກ',
        'select' => 'ເລືອກ',
        'add_existing' => 'ເພີ່ມທີ່ມີຢູ່',
        'next' => 'ຕໍ່ໄປ',
        'previous' => 'ກ່ອນໜ້າ',
        'crop' => 'ຕັດ',
        'flip_horizontal' => '뒤집기 수평',
        'flip_vertical' => 'ກີບລົງ',
        'rotate_left' => 'ໝຸນຊ້າຍ',
        'rotate_right' => 'ໝຸນຂວາ',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'ແຜ່ນບັນທຶກຂໍ້ມູນ',
            'images' => 'ຮູບພາບ',
            'alt_text' => 'ຂໍ້ຄວາມທາງເລືອກ',
            'file_name' => 'ຊື່ໄຟລ໌',
            'search' => 'ຊອກຫາ',
            'width' => 'ກວ້າງ',
            'height' => 'ສູງ',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'ໝຸນ',
        ],
        'helper_texts' => [
            'alt_text' => 'ຄໍາອະທິບາຍສິ່ງທີ່ສະແດງຢູ່ໃນຮູບພາບສໍາລັບການປັບປຸງການເຂົ້າເຖິງແລະ SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'ບໍ່ໄດ້ເລືອກຮູບພາບ.',
            'no_images_selected' => 'ບໍ່ໄດ້ເລືອກຮູບພາບ.',
            'no_images_found' => 'ບໍ່ພົບຮູບພາບ.',
            'search' => 'ຊອກຫາໂດຍຊື່ໄຟລ໌ ຫຼື ຂໍ້ຄວາມທາງເລືອກ...',
        ],
        'prefixes' => [
            'width' => 'ກວ້າງ',
            'height' => 'ສູງ',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'ໝຸນ',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'ອົງສາ',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} ລົບຮູບພາບ :count?|[2,*] ລົບຮູບພາບ :count?',
            'delete' => 'ລົບຮູບພາບ',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} ທ່ານແນ່ໃຈບໍ່ວ່າທ່ານຕ້ອງການລົບຮູບພາບທີ່ເລືອກໄວ້?|[2,*] ທ່ານແນ່ໃຈບໍ່ວ່າທ່ານຕ້ອງການລົບຮູບພາບ :count ທີ່ເລືອກໄວ້?',
            'delete' => 'ທ່ານແນ່ໃຈບໍ່ວ່າທ່ານຕ້ອງການລົບຮູບພາບນີ້?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'ລົບຮູບພາບສໍາເລັດ.',
            'failure' => 'ລົບຮູບພາບບໍ່ສໍາເລັດ.',
        ],
        'upload' => [
            'success' => '{1} ອັບໂຫລດຮູບພາບສໍາເລັດ.|[2,*] ອັບໂຫລດຮູບພາບສໍາເລັດ.',
            'failure' => '{1} ອັບໂຫລດຮູບພາບທີ່ໃຫ້ມາບໍ່ສໍາເລັດ.|[2,*] ອັບໂຫລດຮູບພາບທີ່ໃຫ້ມາບໍ່ສໍາເລັດ.',
        ],
        'edit_source_image' => [
            'success' => 'ອັບເດດຮູບພາບຕົ້ນສະບັບສໍາເລັດ.',
            'failure' => 'ອັບເດດຮູບພາບຕົ້ນສະບັບບໍ່ສໍາເລັດ.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'ບໍ່ພົບຮູບພາບ',
        ],
        'title' => 'ຫ້ອງສະໝຸດຮູບພາບ',
    ],
    'tooltips' => [
        'crop' => 'ຕັດ',
        'deselect' => 'ບໍ່ເລືອກ',
        'edit' => 'ແກ້ໄຂ',
        'delete' => 'ລົບ',
        'detach' => 'ແຍກ',
        'select' => 'ເລືອກ',
        'drag_handle' => 'ລາກເພື່ອຈັດລຽງໃໝ່',
        'rotate_right' => 'ໝຸນຂວາ',
        'rotate_left' => 'ໝຸນຊ້າຍ',
        'flip_horizontal' => 'ກີບລົງ',
        'flip_vertical' => 'ກີບລົງ',
        'view' => 'ເບິ່ງ',
    ],
];
