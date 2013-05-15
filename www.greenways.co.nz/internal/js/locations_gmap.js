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
  return json
})();

function initialize() {
  loadMap();
  loadSidebar();
}

function loadMap() {
  var nzCenterLatLng = new google.maps.LatLng(-40.86368,172.441406); // left nelson = center of NZ,
  var wlgLatLng = new google.maps.LatLng(-41.28646, 174.776236);

  var mapOptions = {
    center: nzCenterLatLng,
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(
    document.getElementById('map-canvas'),
    mapOptions
    );
}

function loadSidebar() {
  var address = document.getElementById('addressInput').value;
  var geocoder = new google.maps.Geocoder();
  
  geocoder.geocode({ 'address': address }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      buildSidebar();
    } else {
      alert(address + ' not found');
    }
  });
}

function buildSidebar() {
  var sidebar = document.getElementById('sidebar');
  var locEntry = locationsJSON.entries

  for (var i = 0; i < locEntry.length; i++) {
    var name =    locEntry[i].name;
    var address = locEntry[i].address;
    var phone =   locEntry[i].phone;
    var region =  locEntry[i].region;
    var sidebarEntry = createSidebarEntryNew(name, address, phone, region);
    sidebar.appendChild(sidebarEntry);
  }
  return sidebar;
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