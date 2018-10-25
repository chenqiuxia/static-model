const onScroll = () => {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.x-header').addClass('is-scrolled')
    } else {
      $('.x-header').removeClass('is-scrolled')
    }

  });
}

const bind = () => {
  onScroll();
}

export default {
  bind
}