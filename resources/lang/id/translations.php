<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => 'Tindakan Pemilihan',
        'bulk_delete' => 'Hapus',
        'cancel' => 'Batal',
        'delete' => 'Hapus',
        'detach' => 'Lepas',
        'deselect' => 'Batal Pilih',
        'upload' => 'Unggah',
        'save' => 'Simpan',
        'select' => 'Pilih',
        'add_existing' => 'Tambah yang Ada',
        'next' => 'Selanjutnya',
        'previous' => 'Sebelumnya',
        'crop' => 'Potong',
        'flip_horizontal' => 'Balik Horizontal',
        'flip_vertical' => 'Balik Vertikal',
        'rotate_left' => 'Putar Kiri',
        'rotate_right' => 'Putar Kanan',
    ],
    'forms' => [
        'labels' => [
            'disk' => 'Disk Penyimpanan',
            'images' => 'Gambar',
            'alt_text' => 'Teks Alternatif',
            'file_name' => 'Nama File',
            'search' => 'Cari',
            'width' => 'Lebar',
            'height' => 'Tinggi',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Putar',
        ],
        'helper_texts' => [
            'alt_text' => 'Deskripsi tentang apa yang ditampilkan dalam gambar untuk meningkatkan aksesibilitas dan SEO.',
        ],
        'placeholders' => [
            'no_image_selected' => 'Tidak ada gambar yang dipilih.',
            'no_images_selected' => 'Tidak ada gambar yang dipilih.',
            'no_images_found' => 'Tidak ada gambar ditemukan.',
            'search' => 'Cari berdasarkan nama file atau teks alternatif...',
        ],
        'prefixes' => [
            'width' => 'Lebar',
            'height' => 'Tinggi',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => 'Putar',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'derajat',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} Hapus :count Gambar?|[2,*] Hapus :count Gambar?',
            'delete' => 'Hapus Gambar',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} Anda yakin ingin menghapus gambar yang dipilih?|[2,*] Anda yakin ingin menghapus :count gambar yang dipilih?',
            'delete' => 'Anda yakin ingin menghapus gambar ini?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => 'Gambar berhasil dihapus.',
            'failure' => 'Gagal menghapus gambar.',
        ],
        'upload' => [
            'success' => '{1} Gambar berhasil diunggah.|[2,*] Gambar berhasil diunggah.',
            'failure' => '{1} Gagal mengunggah gambar yang diberikan.|[2,*] Gagal mengunggah gambar yang diberikan.',
        ],
        'edit_source_image' => [
            'success' => 'Gambar sumber berhasil diperbarui.',
            'failure' => 'Gagal memperbarui gambar sumber.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => 'Tidak ada gambar ditemukan',
        ],
        'title' => 'Perpustakaan Gambar',
    ],
    'tooltips' => [
        'crop' => 'Potong',
        'deselect' => 'Batal Pilih',
        'edit' => 'Edit',
        'delete' => 'Hapus',
        'detach' => 'Lepas',
        'select' => 'Pilih',
        'drag_handle' => 'Seret untuk menyusun ulang',
        'rotate_right' => 'Putar Kanan',
        'rotate_left' => 'Putar Kiri',
        'flip_horizontal' => 'Balik Horizontal',
        'flip_vertical' => 'Balik Vertikal',
        'view' => 'Lihat',
    ],
];
