import dispatcher from './util/dispatcher'
//partial
import globalFn from './partial/_globalFn'
// page
import index from './page/index';

let Route = {
    "all": '.',
    "index":'^index/index.html$',
}
$(function () {
  dispatcher(Route.all, () => {
    //all functions that all pages need to execute should be here
    globalFn.bind()
  })
  dispatcher(Route.index, () => {
    index.init()
    index.bind()
  })
  dispatcher(location.pathname)
})
