$(function () {
  $("#loading").delay(1000).fadeOut(800);

  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href === "#" || href === "" ? "html" : href);
    const position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  $(window).scroll(function () {
    $(".fade-in").each(function () {
      const elemPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100) {
        $(this).addClass("scroll-in");
      }
    });

    if ($(this).scrollTop() > 100) {
      $("#to-top").fadeIn();
    } else {
      $("#to-top").fadeOut();
    }
  });

  $("#to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
});
