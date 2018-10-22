import {isDev, baseUrl} from './consist/GLOBAL_CONFIG'
import dispatcher from './util/dispatcher'
//partial
import header from './partial/_header'
// page
import index from './page/index';
let Route = {
    "all": '.',
    "index":'index/index.html',
}
$(function () {
  dispatcher(Route.all, () => {
    //loading common js
    (function () {
      var $scroll = $('.scroll'),
          window_scroll_top;
      var bind = function () {
          $(window).scroll(function () {
              animation();
          });
      };
      var animation = function () {
          window_scroll_top = $(window).scrollTop();
          $scroll.each(function () {
              if (window_scroll_top + window.innerHeight >= $(this).offset().top) {
                  $(this).addClass('is_scoped');
              }
          });
      };
      bind();
      animation();
    })();
    header.bind()
  })
  dispatcher(Route.index, () => {
    index.init()
    index.bind()
  })
  dispatcher(location.pathname)
})
