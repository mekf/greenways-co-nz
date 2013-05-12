var map;
var geocoder;

// nelson = center of NZ, tweaked to the left
var nzCenterLatLng = new google.maps.LatLng(-40.86368,172.441406);
var wlgLatLng = new google.maps.LatLng(-41.28646, 174.776236);

var mapOptions = {
  center: nzCenterLatLng,
  zoom: 6,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

function initialize () {
  var map = new google.maps.Map(
    document.getElementById('map-canvas'), mapOptions
    );
  }