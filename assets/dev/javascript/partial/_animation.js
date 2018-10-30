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
                    // scrollbars:true,
                    // touchScroll:true,
                    before:function(i,box){
                        current = i;
                    },
                    after:function(){
                       // console.log(current)
                        if(current>=3)
                        {
                            console.log('setting to false')
                            $.scrollify.touchScrollToFalse();
                            is_open = false;
                        }
                        
                            
                    },
                });
                $(window).scroll(function () {
                 //   const height = (window.innerHeight)*3;
                    const window_scroll_top = $(window).scrollTop();
                  
                    if(!is_open)
                    {
                        if((window.innerHeight)*3>window_scroll_top)
                        {
                            console.log('setting to true')
                            $.scrollify.touchScrollToTrue();
                            is_open = true;
                        }
                    }else
                    {
                        if((window.innerHeight)*3<window_scroll_top)
                        {
                            console.log('setting to false')
                            $.scrollify.touchScrollToFalse();
                            is_open = false;
                        }
                    }
                    
                });
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