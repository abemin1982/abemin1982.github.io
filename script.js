$(function() {
    // スムーススクロール
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const speed = 600;
        const target = $(this.hash == "#" || this.hash == "" ? 'html' : this.hash);
        const position = target.offset().top;
        $('html, body').animate({scrollTop: position}, speed, 'swing');
    });

    // フェードイン（スクロールアニメーション）
    $(window).on('scroll', function() {
        $('section').each(function() {
            const top = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const height = $(window).height();
            if (scroll > top - height + 100) {
                $(this).addClass('visible');
            }
        });
    });

    $(window).trigger('scroll');
});