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

var locEntries = locationsJSON.entries;
var map;
var geocoder;
var markersArray = [];

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

  for (var i = 0; i < locEntries.length; i++) {
    var name    = locEntries[i].name;
    var address = locEntries[i].address;
    var phone   = locEntries[i].phone;
    var region  = locEntries[i].region;
    var sidebarEntry = createSidebarEntry(name, address, phone, region);
    sidebar.appendChild(sidebarEntry);
    // need on_click event (center + info window)
  }
  return sidebar;
}

// might be redundant
// somewhat similar to the searchLocations of their old code
function searchLocations() {
  var address = document.getElementById('addressInput').value;
  // locEntries.length \ will overload the querry. need timeout
  for (var i = 0; i < 10; i++) {
    var searchAdd = locEntries[i].address + ', ' + locEntries[i].region + ', ' + 'New Zealand';
    geocodeSearch(searchAdd);
  }
}


function regionChange(region) {
  deleteMarkersOverlays();

  var searchAdd = [];
  for (var i = 0; i < locEntries.length; i++) {
    if (locEntries[i].region == region) {
      searchAdd.push(locEntries[i].address + ', ' + locEntries[i].region + ', ' + 'New Zealand');
    }
  }

  // Auckland will easily overload the geocoding request
  if (region != 'Auckland') {
    for (var j = 0; j < searchAdd.length; j++) {
      geocodeSearch(searchAdd[j]);
    }
  }
}

function geocodeSearch(addString) {
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': addString }, function (geoResults, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      plotMarkersLocations(geoResults);
    } else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
      alert('overload');
    }
    else {
      alert(addString + ' not found');
    }
  });
}

function plotMarkersLocations(geoInfo) {
  var markerOptions = {
    map: map,
    position: geoInfo[0].geometry.location
  };
  var marker = new google.maps.Marker(markerOptions);
  markersArray.push(marker);
  // map.setCenter(markerOptions.position);
  // need on_click event for the marker (center + info window)
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

function deleteMarkersOverlays() {
  if (markersArray) {
    for (var i in markersArray) {
      markersArray[i].setMap(null);
    }
    markersArray.length = 0;
  }
}

// Not yet ported
function createMarker(point, name, address, phone, region) {
  var marker = new GMarker(point);
  var html = '<b>' + name + '</b> <br/>' + address + '<br/>' + region + '<br/>' + phone;
  GEvent.addListener(marker, 'click', function() {
    marker.openInfoWindowHtml(html);
  });
  return marker;
}