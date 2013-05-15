var map;
var geocoder;

function load() {
  if (GBrowserIsCompatible()) {
    geocoder = new GClientGeocoder();
    map = new GMap2(document.getElementById('map'));
    map.addControl(new GSmallMapControl());
    map.addControl(new GMapTypeControl());
    map.setCenter(new GLatLng(40, -100), 4);
  }
}

function searchLocations() {
  var address = document.getElementById('addressInput').value;
  geocoder.getLatLng(address, function(latlng) {
    if (!latlng) {
      alert(address + ' not found');
    } else {
      searchLocationsNear(latlng);
    }
  });
}

function searchLocationsNear(center) {
  var radius = document.getElementById('radiusSelect').value;
  var searchUrl = 'genxml.php?lat=' + center.lat() + '&lng=' + center.lng() + '&radius=' + radius;
  GDownloadUrl(searchUrl, function(data) {
    var xml = GXml.parse(data);
    var markers = xml.documentElement.getElementsByTagName('marker');
    map.clearOverlays();

    var sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';
    if (markers.length == 0) {
      sidebar.innerHTML = 'No results found.';
      map.setCenter(new GLatLng(40, -100), 4);
      return;
    }

    var bounds = new GLatLngBounds();
    for (var i = 0; i < markers.length; i++) {
      var name = markers[i].getAttribute('name');
      var address = markers[i].getAttribute('address');
      var distance = parseFloat(markers[i].getAttribute('distance'));
      var point = new GLatLng(parseFloat(markers[i].getAttribute('lat')),
                              parseFloat(markers[i].getAttribute('lng')));
      var phone = markers[i].getAttribute('phone');
      var region = markers[i].getAttribute('region');
     
      var marker = createMarker(point, name, address, phone, region);
      map.addOverlay(marker);
      var sidebarEntry = createSidebarEntry(marker, name, address, distance, phone, region);
      sidebar.appendChild(sidebarEntry);
      bounds.extend(point);
    }
    map.setCenter(bounds.getCenter(), map.getBoundsZoomLevel(bounds));
  });
}

function createMarker(point, name, address, phone, region) {
  var marker = new GMarker(point);
  var html = '<b>' + name + '</b> <br/>' + address + '<br/>' + region + '<br/>' + phone;
  GEvent.addListener(marker, 'click', function() {
    marker.openInfoWindowHtml(html);
  });
  return marker;
}

function createSidebarEntry(marker, name, address, distance, phone, region) {
  var div = document.createElement('div');
  var html = '<div style="margin-bottom: 20px;" class="' + region + ' region"><b>' + name + '</b><br/>' + address + '<br/>' + region + '<br/>' + phone + '</div>';
  div.innerHTML = html;
  div.id = 'block';
  div.style.cursor = 'pointer';
  div.style.fontSize = '18px'; 
  GEvent.addDomListener(div, 'click', function() {
    GEvent.trigger(marker, 'click');
  });
  return div;
}