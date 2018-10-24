const scroll = () => {
    var $scroll = $('.scroll'),
          window_scroll_top;
    var bind = function () {
        $(window).scroll(function () {
            animation();
        });
    };
    var animation = function () {
        window_scroll_top = $(window).scrollTop();
        $scroll.each(function () {
            if (window_scroll_top + window.innerHeight >= $(this).offset().top) {
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