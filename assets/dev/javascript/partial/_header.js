import {isSP} from "../consist/GLOBAL_CONFIG";

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
  })
}

const bind = () => {
  onScroll();
  if(isSP) {
    menuFn();
  }
}

export default {
  bind
}