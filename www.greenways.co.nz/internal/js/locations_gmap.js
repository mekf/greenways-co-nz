var map;
var geocoder;

// Load locations.json
var locationsJSON = (function() {
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
  return json;
})();

function locationsInitialize() {
  loadMap();
  loadSidebar();
  console.log(locationsJSON);
}

function loadMap() {
  var nzCenterLatLng = new google.maps.LatLng(-40.86368,172.441406); // left nelson = center of NZ,
  var wlgLatLng = new google.maps.LatLng(-41.28646, 174.776236);

  var mapOptions = {
    center: nzCenterLatLng,
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function loadSidebar() {
  var address = document.getElementById('addressInput').value;
  var locEntry = locationsJSON.entries;
  geocoder = new google.maps.Geocoder();

  for (var i = 0; i < 11; i++) {
    var searchAddress = locEntry[i].address + ', ' + locEntry[i].region + ', ' + 'New Zealand';
    geocoder.geocode({ 'address': searchAddress }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        searchLocations(results);
      } else {
        console.log(searchAddress + ' not found');
      }
    });
  }
}

function searchLocations(results) {
  map.setCenter(results[0].geometry.location);
  var marker = new google.maps.Marker({
      map: map,
      position: results[0].geometry.location
  });
  // buildSidebar(param);
}

function buildSidebar(param) {
  var sidebar = document.getElementById('sidebar');
  var locEntry = locationsJSON.entries;

  for (var i = 0; i < locEntry.length; i++) {
    var name    = locEntry[i].name;
    var address = locEntry[i].address;
    var phone   = locEntry[i].phone;
    var region  = locEntry[i].region;
    var sidebarEntry = createSidebarEntry(name, address, phone, region);
    sidebar.appendChild(sidebarEntry);
  }
  return sidebar;
}

function createMarker(point, name, address, phone, region) {
  var marker = new GMarker(point);
  var html = '<b>' + name + '</b> <br/>' + address + '<br/>' + region + '<br/>' + phone;
  GEvent.addListener(marker, 'click', function() {
    marker.openInfoWindowHtml(html);
  });
  return marker;
}

function createSidebarEntry(name, address, phone, region) {
  var div = document.createElement('div');
  var html = '<div style="margin-bottom: 20px;" class="' + region + ' region"><b>' + name + '</b><br/>' + address + '<br/>' + region + '<br/>' + phone + '</div>';
  div.innerHTML = html;
  div.id = 'block';
  div.style.cursor = 'pointer';
  div.style.fontSize = '18px';
  return div;
}