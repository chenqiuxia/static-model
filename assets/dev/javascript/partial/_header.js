import {isSP, isHSFn} from "../consist/GLOBAL_CONFIG";

const onScroll = () => {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.x-header').addClass('is-scrolled')
    } else {
      $('.x-header').removeClass('is-scrolled')
    }

  });
}

const menuFn = () => {
  $('.x-menu').click(function (e) {
    e.stopPropagation()
    $(this).toggleClass('menu-close')
    $('.x-header').toggleClass('header-slide')
    $('body').toggleClass('no-scroll')
  })
}

const orientationSliderFn = () => {
  const changeClass = (param) => {
    if(!param) {
      $('.nav-slider-wrap').addClass('nav-slider-Sh')
    } else {
      $('.nav-slider-wrap').removeClass('nav-slider-Sh')
    }
  }

  changeClass(!isHSFn())

  window.addEventListener('orientationchange', () => {
    changeClass(isHSFn())
  })
}

const bind = () => {
  onScroll();
  if(isSP) {
    menuFn();
  }

  orientationSliderFn()
}

export default {
  bind
}