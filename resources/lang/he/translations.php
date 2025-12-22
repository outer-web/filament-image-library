<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'פעולות בחירה',
        'bulk_delete' => 'מחק',
        'cancel' => 'ביטול',
        'delete' => 'מחק',
        'detach' => 'נתק',
        'deselect' => 'בטל בחירה',
        'upload' => 'העלה',
        'save' => 'שמור',
        'select' => 'בחר',
        'add_existing' => 'הוסף קיים',
        'next' => 'הבא',
        'previous' => 'הקודם',
        'crop' => 'חתוך',
        'flip_horizontal' => 'היפוך אופקי',
        'flip_vertical' => 'היפוך אנכי',
        'rotate_left' => 'סובב שמאלה',
        'rotate_right' => 'סובב ימינה',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'כונן אחסון',
            'images' => 'תמונות',
            'alt_text' => 'טקסט חלופי',
            'file_name' => 'שם קובץ',
            'search' => 'חיפוש',
            'width' => 'רוחב',
            'height' => 'גובה',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'סיבוב',
        ],
        'helper_texts' => [
            'alt_text' => 'תיאור של מה שמוצג בתמונה לשיפור נגישות וקידום אתרים.',
        ],
        'placeholders' => [
            'no_image_selected' => 'לא נבחרה תמונה.',
            'no_images_selected' => 'לא נבחרו תמונות.',
            'no_images_found' => 'לא נמצאו תמונות.',
            'search' => 'חפש לפי שם קובץ או טקסט חלופי...',
        ],
        'prefixes' => [
            'width' => 'רוחב',
            'height' => 'גובה',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'סיבוב',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'מעלות',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} למחוק :count תמונה?|[2,*] למחוק :count תמונות?',
            'delete' => 'מחק תמונה',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} האם אתה בטוח שברצונך למחוק את התמונה הנבחרת?|[2,*] האם אתה בטוח שברצונך למחוק את :count התמונות הנבחרות?',
            'delete' => 'האם אתה בטוח שברצונך למחוק תמונה זו?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'התמונה נמחקה בהצלחה.',
            'failure' => 'נכשל במחיקת התמונה.',
        ],
        'upload' => [
            'success' => '{1} התמונה הועלתה בהצלחה.|[2,*] התמונות הועלו בהצלחה.',
            'failure' => '{1} נכשל בהעלאת התמונה הנתונה.|[2,*] נכשל בהעלאת התמונות הנתונות.',
        ],
        'edit_source_image' => [
            'success' => 'תמונת המקור עודכנה בהצלחה.',
            'failure' => 'נכשל בעדכון תמונת המקור.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'לא נמצאו תמונות',
        ],
        'title' => 'ספריית תמונות',
    ],
    'tooltips' => [
        'crop' => 'חתוך',
        'deselect' => 'בטל בחירה',
        'edit' => 'עריכה',
        'delete' => 'מחק',
        'detach' => 'נתק',
        'select' => 'בחר',
        'drag_handle' => 'גרור כדי לסדר מחדש',
        'rotate_right' => 'סובב ימינה',
        'rotate_left' => 'סובב שמאלה',
        'flip_horizontal' => 'היפוך אופקי',
        'flip_vertical' => 'היפוך אנכי',
        'view' => 'צפה',
    ],
];
