<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'चुनल कार्यसभ',
        'bulk_delete' => 'मेटावा',
        'cancel' => 'रद्द करा',
        'delete' => 'मेटावा',
        'detach' => 'अलग करा',
        'deselect' => 'चुनाव रद्द करा',
        'upload' => 'अपलोड करा',
        'save' => 'सेव करा',
        'select' => 'चुना',
        'add_existing' => 'मौजूदा जोड़ा',
        'next' => 'अगला',
        'previous' => 'पिछला',
        'crop' => 'काटा',
        'flip_horizontal' => 'क्षैतिज पलटा',
        'flip_vertical' => 'लंबवत पलटा',
        'rotate_left' => 'बाएं घुमावा',
        'rotate_right' => 'दाहिने घुमावा',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'भंडारण डिस्क',
            'images' => 'तस्वीर',
            'alt_text' => 'वैकल्पिक पाठ',
            'file_name' => 'फ़ाइल नाम',
            'search' => 'खोजा',
            'width' => 'चौड़ाई',
            'height' => 'ऊंचाई',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'घुमावा',
        ],
        'helper_texts' => [
            'alt_text' => 'सुलभता आ SEO के सुधार खातिर तस्वीर में जे देखावल गइल बा ओकर विवरण।',
        ],
        'placeholders' => [
            'no_image_selected' => 'कवनो तस्वीर चुनल ना गइल।',
            'no_images_selected' => 'कवनो तस्वीर चुनल ना गइल।',
            'no_images_found' => 'कवनो तस्वीर ना मिलल।',
            'search' => 'फाइल नाम या वैकल्पिक पाठ से खोजा...',
        ],
        'prefixes' => [
            'width' => 'चौड़ाई',
            'height' => 'ऊंचाई',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'घुमावा',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'डिग्री',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} :count तस्वीर मेटावल जाव?|[2,*] :count तस्वीर मेटावल जाव?',
            'delete' => 'तस्वीर मेटावा',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} का तोहार पक्का बा कि चुनल तस्वीर मेटावे के चाहत बाड़ू?|[2,*] का तोहार पक्का बा कि चुनल :count तस्वीर मेटावे के चाहत बाड़ू?',
            'delete' => 'का तोहार पक्का बा कि एह तस्वीर के मेटावे के चाहत बाड़ू?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'तस्वीर सफलतापूर्वक मेट गइल।',
            'failure' => 'तस्वीर मेटावे में असफल।',
        ],
        'upload' => [
            'success' => '{1} तस्वीर सफलतापूर्वक अपलोड भइल।|[2,*] तस्वीर सफलतापूर्वक अपलोड भइल।',
            'failure' => '{1} दिहल तस्वीर अपलोड करे में असफल।|[2,*] दिहल तस्वीर सभ अपलोड करे में असफल।',
        ],
        'edit_source_image' => [
            'success' => 'स्रोत तस्वीर सफलतापूर्वक अपडेट भइल।',
            'failure' => 'स्रोत तस्वीर अपडेट करे में असफल।',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'कवनो तस्वीर ना मिलल',
        ],
        'title' => 'तस्वीर पुस्तकालय',
    ],
    'tooltips' => [
        'crop' => 'काटा',
        'deselect' => 'चुनाव रद्द करा',
        'edit' => 'संपादन',
        'delete' => 'मेटावा',
        'detach' => 'अलग करा',
        'select' => 'चुना',
        'drag_handle' => 'पुनः क्रमबद्ध करे खातिर खींचा',
        'rotate_right' => 'दाहिने घुमावा',
        'rotate_left' => 'बाएं घुमावा',
        'flip_horizontal' => 'क्षैतिज पलटा',
        'flip_vertical' => 'लंबवत पलटा',
        'view' => 'देखा',
    ],
];
