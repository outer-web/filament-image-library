<?php

declare(strict_types=1);

return [
    'actions' => [
        'bulk_selection_actions' => '선택 동작',
        'bulk_delete' => '삭제',
        'cancel' => '취소',
        'delete' => '삭제',
        'detach' => '분리',
        'deselect' => '선택 해제',
        'upload' => '업로드',
        'save' => '저장',
        'select' => '선택',
        'add_existing' => '기존 항목 추가',
        'next' => '다음',
        'previous' => '이전',
        'crop' => '자르기',
        'flip_horizontal' => '좌우 뒤집기',
        'flip_vertical' => '상하 뒤집기',
        'rotate_left' => '왼쪽 회전',
        'rotate_right' => '오른쪽 회전',
    ],
    'forms' => [
        'labels' => [
            'disk' => '저장 디스크',
            'images' => '이미지',
            'alt_text' => '대체 텍스트',
            'file_name' => '파일명',
            'search' => '검색',
            'width' => '너비',
            'height' => '높이',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => '회전',
        ],
        'helper_texts' => [
            'alt_text' => '접근성과 SEO 향상을 위한 이미지 설명입니다.',
        ],
        'placeholders' => [
            'no_image_selected' => '선택된 이미지가 없습니다.',
            'no_images_selected' => '선택된 이미지가 없습니다.',
            'no_images_found' => '이미지를 찾을 수 없습니다.',
            'search' => '파일명 또는 대체 텍스트로 검색...',
        ],
        'prefixes' => [
            'width' => '너비',
            'height' => '높이',
            'x' => 'X',
            'y' => 'Y',
            'rotate' => '회전',
        ],
        'suffixes' => [
            'width' => 'px',
            'height' => 'px',
            'x' => 'px',
            'y' => 'px',
            'rotate' => 'deg',
        ],
    ],
    'modals' => [
        'headings' => [
            'bulk_delete' => '{1} 이미지 :count개를 삭제하시겠습니까?|[2,*] 이미지 :count개를 삭제하시겠습니까?',
            'delete' => '이미지 삭제',
        ],
        'descriptions' => [
            'bulk_delete' => '{1} 선택한 이미지를 삭제하시겠습니까?|[2,*] 선택한 :count개의 이미지를 삭제하시겠습니까?',
            'delete' => '이 이미지를 삭제하시겠습니까?',
        ],
    ],
    'notifications' => [
        'delete' => [
            'success' => '이미지가 성공적으로 삭제되었습니다.',
            'failure' => '이미지 삭제에 실패했습니다.',
        ],
        'upload' => [
            'success' => '{1} 이미지가 성공적으로 업로드되었습니다.|[2,*] 이미지가 성공적으로 업로드되었습니다.',
            'failure' => '{1} 제공된 이미지 업로드에 실패했습니다.|[2,*] 제공된 이미지들 업로드에 실패했습니다.',
        ],
        'edit_source_image' => [
            'success' => '원본 이미지가 성공적으로 업데이트되었습니다.',
            'failure' => '원본 이미지 업데이트에 실패했습니다.',
        ],
    ],
    'page' => [
        'empty_state' => [
            'heading' => '이미지를 찾을 수 없습니다',
        ],
        'title' => '이미지 라이브러리',
    ],
    'tooltips' => [
        'crop' => '자르기',
        'deselect' => '선택 해제',
        'edit' => '편집',
        'delete' => '삭제',
        'detach' => '분리',
        'select' => '선택',
        'drag_handle' => '끌어서 순서 변경',
        'rotate_right' => '오른쪽 회전',
        'rotate_left' => '왼쪽 회전',
        'flip_horizontal' => '좌우 뒤집기',
        'flip_vertical' => '상하 뒤집기',
        'view' => '보기',
    ],
];
