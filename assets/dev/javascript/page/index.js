const initBanner = () => {
  $(document).ready(function(){
    $('.x-banner-slick').slick({
      infinite: true,
      pauseOnFocus: false,
      speed: 2000,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      arrows: false
    });
  });
}

const init = () => {
  initBanner()
}
const bind = () => {

}
export default {
  init: init(),
  bind: bind()
}