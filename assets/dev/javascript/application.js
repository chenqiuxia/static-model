import {isDev, baseUrl} from './consist/GLOBAL_CONFIG'
import dispatcher from './util/dispatcher'
import url from './util/url'
//partial
import header from './partial/_header'
import inithead from './partial/_inithead'
import animation from './partial/_animation'
// page
import index from './page/index';
let Route = {
    "all": '.',
    "index":'index/index.html',
}
$(function () {
  dispatcher(Route.all, () => {
    //loading common js
    animation.init();
    header.bind();
    inithead.init();
  })
  dispatcher(Route.index, () => {
    index.init()
    index.bind()
  })
  dispatcher(location.pathname)
})
