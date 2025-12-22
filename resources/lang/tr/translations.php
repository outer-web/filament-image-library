<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Seçim İşlemleri',
        'bulk_delete' => 'Sil',
        'cancel' => 'İptal',
        'delete' => 'Sil',
        'detach' => 'Ayır',
        'deselect' => 'Seçimi Kaldır',
        'upload' => 'Yükle',
        'save' => 'Kaydet',
        'select' => 'Seç',
        'add_existing' => 'Mevcut Ekle',
        'next' => 'Sonraki',
        'previous' => 'Önceki',
        'crop' => 'Kırp',
        'flip_horizontal' => 'Yatay Çevir',
        'flip_vertical' => 'Dikey Çevir',
        'rotate_left' => 'Sola Döndür',
        'rotate_right' => 'Sağa Döndür',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Depolama Diski',
            'images' => 'Resim(ler)',
            'alt_text' => 'Alternatif Metin',
            'file_name' => 'Dosya Adı',
            'search' => 'Ara',
            'width' => 'Genişlik',
            'height' => 'Yükseklik',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Döndür',
        ],
        'helper_texts' => [
            'alt_text' => 'Erişilebilirlik ve SEO iyileştirmesi için resimde gösterilen şeyin açıklaması.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Hiçbir resim seçilmedi.',
            'no_images_selected' => 'Hiçbir resim seçilmedi.',
            'no_images_found' => 'Hiçbir resim bulunamadı.',
            'search' => 'Dosya adı veya alternatif metinle ara...',
        ],
        'prefixes' => [
            'width' => 'Genişlik',
            'height' => 'Yükseklik',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Döndür',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'derece',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} :count Resim Silinsin mi?|[2,*] :count Resim Silinsin mi?',
            'delete' => 'Resmi Sil',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Seçilen resmi silmek istediğinizden emin misiniz?|[2,*] Seçilen :count resmi silmek istediğinizden emin misiniz?',
            'delete' => 'Bu resmi silmek istediğinizden emin misiniz?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Resim başarıyla silindi.',
            'failure' => 'Resim silinemedi.',
        ],
        'upload' => [
            'success' => '{1} Resim başarıyla yüklendi.|[2,*] Resimler başarıyla yüklendi.',
            'failure' => '{1} Verilen resim yüklenemedi.|[2,*] Verilen resimler yüklenemedi.',
        ],
        'edit_source_image' => [
            'success' => 'Kaynak resim başarıyla güncellendi.',
            'failure' => 'Kaynak resim güncellenemedi.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Hiçbir resim bulunamadı',
        ],
        'title' => 'Resim Kütüphanesi',
    ],
    'tooltips' => [
        'crop' => 'Kırp',
        'deselect' => 'Seçimi Kaldır',
        'edit' => 'Düzenle',
        'delete' => 'Sil',
        'detach' => 'Ayır',
        'select' => 'Seç',
        'drag_handle' => 'Yeniden sıralamak için sürükle',
        'rotate_right' => 'Sağa Döndür',
        'rotate_left' => 'Sola Döndür',
        'flip_horizontal' => 'Yatay Çevir',
        'flip_vertical' => 'Dikey Çevir',
        'view' => 'Görüntüle',
    ],
];
