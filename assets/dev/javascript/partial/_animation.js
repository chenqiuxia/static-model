const scroll = () => {
    var $scroll = $('.scroll'),$scrollLeft = $('.scroll-left'),$scrollRight = $('.scroll-right'),
          $scrollDelay=$('.scroll-delay'),window_scroll_top;
    var bind = function () {
        $(window).scroll(function () {
            animation();
        });
    };
    const width = document.body.clientWidth;
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
        if(width<=800){
            $scrollDelay.each(function () {
                if (window_scroll_top + window.innerHeight >= ($(this).offset().top) +200){
                    $(this).addClass('is_scoped');
                }
            });
        }
        
    };
    bind();
    animation();
  }

  const scrollfy = () => {
        var current;
        let is_open = true;
        const width = document.body.clientWidth;
       
        if(width<=800)
        {
            $(function(){
                $.scrollify({
                    section:".box",
                    // overflowScroll:false,
                    // setHeights:false,
                    // scrollable:true,
                    before:function(i,box){
                        current = i;
                    },
                    after:function(){
                        console.log(current)
                            // if(current===3)
                            // {
                            //    $.scrollify.disable();  
                            // }
                            
                    },
                });
                // $(window).scroll(function () {
                //     const height = (window.innerHeight)*3;
                //     const window_scroll_top = $(window).scrollTop();
                //     console.log(window_scroll_top);
                //     if(height<window_scroll_top&&window_scroll_top<(window.innerHeight)*3.5)
                //     {
                //         $.scrollify.enable();
                //     }
                //     else if((window.innerHeight)*3.5<=window_scroll_top){
                //         $.scrollify.disable();  
                //     }
                // });
                // console.log('in');
                // $(window).on('resize',function(){
                //     console.log(current)
                //     if(current===3)
                //     {
                //         $.scrollify.disable();
                //     }
                //     else
                //     {
                //         $.scrollify.enable();
                //     }
                //     $.scrollify.update();
                //     console.log('in');
                // });
            });	
        }
       
  }

  const addDelay = ()=>{
    const width = document.body.clientWidth;
    if(width<=800)
    {
        $('.add-delay').css('transition-delay','300ms');
    }
  }
  
  const init = () => {
    scroll();
    scrollfy();
    addDelay();
  }
  const bind = () => {

  }
  
  export default {
    bind,
    init
  }