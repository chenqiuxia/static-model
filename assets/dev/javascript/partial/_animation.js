const scroll = () => {
    var $scroll = $('.scroll'),$scrollLeft = $('.scroll-left'),$scrollRight = $('.scroll-right'),
          window_scroll_top;
    var bind = function () {
        $(window).scroll(function () {
            animation();
        });
    };
    var animation = function () {
        window_scroll_top = $(window).scrollTop();
        $scrollLeft.each(function () {
            if (window_scroll_top + window.innerHeight >= ($(this).offset().top)+200) {
                $(this).addClass('is_scoped');
            }
        });
        $scrollRight.each(function () {
            if (window_scroll_top + window.innerHeight >= ($(this).offset().top)+200) {
                $(this).addClass('is_scoped');
            }
        });
        $scroll.each(function () {
            if (window_scroll_top + window.innerHeight >= ($(this).offset().top) +200){
                $(this).addClass('is_scoped');
            }
        });
    };
    bind();
    animation();
  }
  
  const init = () => {
    scroll();
  }
  const bind = () => {

  }
  
  export default {
    bind,
    init
  }