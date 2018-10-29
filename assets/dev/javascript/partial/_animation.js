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

  const scrollfy = () => {
        const width = document.body.clientWidth;
        if(width<=800)
        {
            $(function(){
                $.scrollify({section:".box"});
                console.log('in');
                $(window).on('resize',function(){
                    $.scrollify.update();
                    console.log('in');
                });
            });	
        }
       
  }
  
  const init = () => {
    scroll();
    scrollfy();
  }
  const bind = () => {

  }
  
  export default {
    bind,
    init
  }