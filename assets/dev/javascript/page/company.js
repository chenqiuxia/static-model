
const initMap = () => {
  if(window.google) {
    var mapProp = {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
  }
}

const init = () => {
  initMap()
}
const bind = () => {

}
export default {
  init: init(),
  bind: bind()
}