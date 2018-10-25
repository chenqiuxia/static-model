
const bottomHover = ()=>{
   $('.product-show1').mouseover(function(){
       $('.product-imglist-img').eq(0).find('.product-hover').addClass('product-hover-black')
   })
   $('.product-show2').mouseover(function(){
       $('.product-imglist-img').eq(1).find('.product-hover').addClass('product-hover-black')
   })
   $('.product-show1').mouseout(function(){
        $('.product-imglist-img').eq(0).find('.product-hover').removeClass('product-hover-black')
    })
    $('.product-show2').mouseout(function(){
        $('.product-imglist-img').eq(1).find('.product-hover').removeClass('product-hover-black')
    })
}

const _animation = () => {
    var $scroll = $('.heatset-banner'),
          window_scroll_top;
    var bind = function () {
        $(window).scroll(function () {
            animation();
        });
    };
    var animation = function () {
        window_scroll_top = $(window).scrollTop();
        
        $scroll.each(function () {
            if (window_scroll_top + window.innerHeight >= ($(this).offset().top) +400){
                $('.heatset-product').addClass('is_scoped');
            }
        });
    };
    bind();
    animation();
}

  const init = () => {
     bottomHover();
     _animation();
  }
  const bind = () => {

  }
  export default {
    init: init(),
    bind: bind()
  }