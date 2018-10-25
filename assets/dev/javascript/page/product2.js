
const bottomHover = ()=>{
   $('.product-show1').mouseover(function(){
       console.log($('.product-imglist-img').eq(0).find('.product-hover'))
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
  
  const init = () => {
    bottomHover()
  }
  const bind = () => {
  
  }
  export default {
    init: init(),
    bind: bind()
  }