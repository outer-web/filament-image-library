<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'चयन क्रियाएँ',
        'bulk_delete' => 'हटाएं',
        'cancel' => 'रद्द करें',
        'delete' => 'हटाएं',
        'detach' => 'अलग करें',
        'deselect' => 'चयन रद्द करें',
        'upload' => 'अपलोड करें',
        'save' => 'सहेजें',
        'select' => 'चुनें',
        'add_existing' => 'मौजूदा जोड़ें',
        'next' => 'अगला',
        'previous' => 'पिछला',
        'crop' => 'काटें',
        'flip_horizontal' => 'क्षैतिज पलटें',
        'flip_vertical' => 'लंबवत पलटें',
        'rotate_left' => 'बाएं घुमाएं',
        'rotate_right' => 'दाएं घुमाएं',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'स्टोरेज डिस्क',
            'images' => 'छवि/छवियां',
            'alt_text' => 'वैकल्पिक पाठ',
            'file_name' => 'फाइल का नाम',
            'search' => 'खोजें',
            'width' => 'चौड़ाई',
            'height' => 'ऊंचाई',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'घुमाएं',
        ],
        'helper_texts' => [
            'alt_text' => 'बेहतर पहुंच और SEO के लिए छवि में दिखाई गई चीजों का विवरण।',
        ],
        'placeholders' => [
            'no_image_selected' => 'कोई छवि चुनी नहीं गई।',
            'no_images_selected' => 'कोई छवियां चुनी नहीं गईं।',
            'no_images_found' => 'कोई छवियां नहीं मिलीं।',
            'search' => 'फाइल नाम या वैकल्पिक पाठ से खोजें...',
        ],
        'prefixes' => [
            'width' => 'चौड़ाई',
            'height' => 'ऊंचाई',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'घुमाएं',
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
            'bulk_delete' => ':count छवि हटाएं?',
            'delete' => 'छवि हटाएं',
        ],
        'descriptions' => [
            'bulk_delete' => 'क्या आप वाकई चुनी गई :count छवियों को हटाना चाहते हैं?',
            'delete' => 'क्या आप वाकई इस छवि को हटाना चाहते हैं?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'छवि सफलतापूर्वक हटा दी गई।',
            'failure' => 'छवि हटाने में विफल।',
        ],
        'upload' => [
            'success' => 'छवि सफलतापूर्वक अपलोड की गई।',
            'failure' => 'प्रदान की गई छवि अपलोड करने में विफल।',
        ],
        'edit_source_image' => [
            'success' => 'स्रोत छवि सफलतापूर्वक अपडेट की गई।',
            'failure' => 'स्रोत छवि अपडेट करने में विफल।',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'कोई छवियां नहीं मिलीं',
        ],
        'title' => 'छवि पुस्तकालय',
    ],
    'tooltips' => [
        'crop' => 'काटें',
        'deselect' => 'चयन रद्द करें',
        'edit' => 'संपादित करें',
        'delete' => 'हटाएं',
        'detach' => 'अलग करें',
        'select' => 'चुनें',
        'drag_handle' => 'पुनः क्रमबद्ध करने के लिए खींचें',
        'rotate_right' => 'दाएं घुमाएं',
        'rotate_left' => 'बाएं घुमाएं',
        'flip_horizontal' => 'क्षैतिज पलटें',
        'flip_vertical' => 'लंबवत पलटें',
        'view' => 'देखें',
    ],
];
