const onMenuClick = () => {
  $('.x-menu-wrap').click(function (e) {
    e.stopPropagation()
    $(this).find('.menu-icon-wrap').toggleClass('menu-icon-close')
  })
}

const bind = () => {
  onMenuClick()
}

export default {
  bind
}