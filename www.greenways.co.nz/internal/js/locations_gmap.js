// Load locations_geocode.json
var locationsJSON = (function() {
  var json = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': "locations_geocode.json",
    'dataType': "json",
    'success': function (data) {
        json = data;
    }
  });
  return json;
})();

var locEntry = locationsJSON;
var map;
var markersArray = [];                          // use to delete the markersOverlay in API v3
var infoWindow = new google.maps.InfoWindow();  // global infoWindow -> markers will create only one infoWindow (check plotMarkerLocation)

function locationsInitialize() {
  loadMap();
  loadSidebar();
}

function loadMap() {
  var nzCenterLatLng = new google.maps.LatLng(-40.86368,172.441406); // left of nelson = center of NZ,

  var mapOptions = {
    center: nzCenterLatLng,
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function loadSidebar() {
  var sidebar = document.getElementById('sidebar');

  for (var i = 0; i < locEntry.length; i++) {
    var name    = locEntry[i].name;
    var address = locEntry[i].address;
    var phone   = locEntry[i].phone;
    var region  = locEntry[i].region;
    var marker  = plotMarkerLocation(locEntry[i]);
    var sidebarEntry = createSidebarEntry(name, address, phone, region, marker);
    sidebar.appendChild(sidebarEntry);
  }
  return sidebar;
}

function regionChange(region) {
  deleteMarkersOverlays();
  infoWindow.close();

  if (region == 'region') loadSidebar();
  if (region == 'Plenty') region = 'Bay of Plenty';
  if (region == 'Hawkes') region = 'Hawkes Bay';
  if (region == 'West')   region = 'West Coast';

  for (var i = 0; i < locEntry.length; i++) {
    if (region == locEntry[i].region) {
      plotMarkerLocation(locEntry[i]);
    }
  }
}

function plotMarkerLocation(geoInfo) {
  var markerLocation = new google.maps.LatLng(geoInfo.latitude, geoInfo.longitude, true);
  var markerOptions = {
    map: map,
    position: markerLocation
  };
  var marker = new google.maps.Marker(markerOptions);

  var contentString = '<b>' + geoInfo.name + '</b>' +
    '<br/>' + geoInfo.address +
    '<br/>' + geoInfo.region +
    '<br/>' + geoInfo.phone;

  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.setContent(contentString);
    infoWindow.open(map, marker);
  });

  markersArray.push(marker);
  return marker;  // Important: return this otherwise DomListener below won't work
}

function createSidebarEntry(name, address, phone, region, marker) {
  var div = document.createElement('div');
  var divHTMLString = '<div style="margin-bottom: 20px;" class="' + region + ' region">' +
    '<b>' + name + '</b>' +
    '<br/>' + address +
    '<br/>' + region +
    '<br/>' + phone +
    '</div>';
  div.innerHTML = divHTMLString;
  div.id = 'block';
  div.style.cursor = 'pointer';
  div.style.fontSize = '18px';

  google.maps.event.addDomListener(div, 'click', function() {
    google.maps.event.trigger(marker, 'click');
  });
  return div;
}

function deleteMarkersOverlays() {
  if (markersArray) {
    for (var i in markersArray) {
      markersArray[i].setMap(null);
    }
    markersArray.length = 0;
  }
}