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
var locations = (function() {
  var json = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': "locations.json",
    'dataType': "json",
    'success': function (data) {
        json = data;
    }
  });
  return json
})();

function createSidebarEntryNew(name, address, phone, region) {
    var div = document.createElement('div');
    var html = '<div style="margin-bottom: 20px;" class="' + region + ' region"><b>' + name + '</b><br/>' + address + '<br/>' + region + '<br/>' + phone + '</div>';
    div.innerHTML = html;
    div.id = 'block';
    div.style.cursor = 'pointer';
    div.style.fontSize = '18px'; 
    return div;
  }

for (var i = 0; i < markers.length; i++) {
  var name = markers[i].getAttribute('name');
  var address = markers[i].getAttribute('address');
  var phone = markers[i].getAttribute('phone');
  var region = markers[i].getAttribute('region');
  var sidebarEntry = createSidebarEntryNew(name, address, phone, region);
  sidebar.appendChild(sidebarEntry);
}