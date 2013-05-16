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

var map;
var geocoder;
var locEntry = locationsJSON.entries;

function locationsInitialize() {
  loadMap();
  buildSidebar();
  // loadSidebar();
  console.log(locationsJSON);
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
  var address = document.getElementById('addressInput').value;
  // locEntry.length
  for (var i = 0; i < 10; i++) {
    var searchAddress = locEntry[i].address + ', ' + locEntry[i].region + ', ' + 'New Zealand';
    geocodeSearch(searchAddress);
  }
}

function geocodeSearch(string) {
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': string }, function (geoResults, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      searchLocations(geoResults);
    } else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
      alert('overload');
    }
    else {
      alert(string + ' not found');
    }
  });
}

function searchLocations(geoInfo) {
  var marker = new google.maps.Marker({
    map: map,
    position: geoInfo[0].geometry.location
  });
  // map.setCenter(results[0].geometry.location);
  // buildSidebar();
}

function buildSidebar() {
  var sidebar = document.getElementById('sidebar');

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