
const bottomHover = ()=>{
   $('.product-show1').mouseover(function(){
       $('.product-imglist-img').eq(0).find('.product-hover').css('display','block')
   })
   $('.product-show2').mouseover(function(){
       $('.product-imglist-img').eq(1).find('.product-hover').css('display','block')
   })
   $('.product-show1').mouseout(function(){
        $('.product-imglist-img').eq(0).find('.product-hover').css('display','none')
    })
    $('.product-show2').mouseout(function(){
        $('.product-imglist-img').eq(1).find('.product-hover').css('display','none')
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