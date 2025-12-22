<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'चयन क्रियाएं',
        'bulk_delete' => 'मिटाना',
        'cancel' => 'रद्द करना',
        'delete' => 'मिटाना',
        'detach' => 'अलग करना',
        'deselect' => 'अचयनित करना',
        'upload' => 'अपलोड करना',
        'save' => 'सहेजना',
        'select' => 'चुनना',
        'add_existing' => 'मौजूदा जोड़ना',
        'next' => 'अगला',
        'previous' => 'पिछला',
        'crop' => 'काटना',
        'flip_horizontal' => 'क्षैतिज फ्लिप',
        'flip_vertical' => 'लंबवत फ्लिप',
        'rotate_left' => 'बाईं ओर घुमाना',
        'rotate_right' => 'दाईं ओर घुमाना',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'भंडारण डिस्क',
            'images' => 'छवियां',
            'alt_text' => 'वैकल्पिक पाठ',
            'file_name' => 'फ़ाइल नाम',
            'search' => 'खोजना',
            'width' => 'चौड़ाई',
            'height' => 'ऊंचाई',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'घुमाना',
        ],
        'helper_texts' => [
            'alt_text' => 'बेहतर पहुंच और SEO के लिए छवि में दिखाई गई चीज़ों का विवरण।',
        ],
        'placeholders' => [
            'no_image_selected' => 'कोई छवि चयनित नहीं।',
            'no_images_selected' => 'कोई छवियां चयनित नहीं।',
            'no_images_found' => 'कोई छवियां नहीं मिलीं।',
            'search' => 'फ़ाइल नाम या वैकल्पिक पाठ द्वारा खोजें...',
        ],
        'prefixes' => [
            'width' => 'चौड़ाई',
            'height' => 'ऊंचाई',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'घुमाना',
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
            'bulk_delete' => '{1} :count छवि मिटाएं?|[2,*] :count छवियां मिटाएं?',
            'delete' => 'छवि मिटाएं',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} क्या आप वाकई चयनित छवि को मिटाना चाहते हैं?|[2,*] क्या आप वाकई चयनित :count छवियों को मिटाना चाहते हैं?',
            'delete' => 'क्या आप वाकई इस छवि को मिटाना चाहते हैं?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'छवि सफलतापूर्वक मिटाई गई।',
            'failure' => 'छवि मिटाने में विफल।',
        ],
        'upload' => [
            'success' => '{1} छवि सफलतापूर्वक अपलोड की गई।|[2,*] छवियां सफलतापूर्वक अपलोड की गईं।',
            'failure' => '{1} प्रदान की गई छवि अपलोड करने में विफल।|[2,*] प्रदान की गई छवियां अपलोड करने में विफल।',
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
        'crop' => 'काटना',
        'deselect' => 'अचयनित करना',
        'edit' => 'संपादित करना',
        'delete' => 'मिटाना',
        'detach' => 'अलग करना',
        'select' => 'चुनना',
        'drag_handle' => 'पुनः क्रमित करने के लिए खींचें',
        'rotate_right' => 'दाईं ओर घुमाना',
        'rotate_left' => 'बाईं ओर घुमाना',
        'flip_horizontal' => 'क्षैतिज फ्लिप',
        'flip_vertical' => 'लंबवत फ्लिप',
        'view' => 'देखना',
    ],
];
