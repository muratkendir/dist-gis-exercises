// 1. Initialize map object centered over Munich [Lat, Lng]
var map = L.map('map').setView([48.137, 11.575], 11);

// 2. Add standard OpenStreetMap tiles securely
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3. Define Munich Open Data WMS server URL from course slides
var wmsUrl = 'https://geoportal.muenchen.de/geoserver/gsm_wfs/awm_container/ows';

// 4. Add dynamic WMS layer overlay
var wmsLayer = L.tileLayer.wms(wmsUrl, {
    layers: 'awm_container',
    format: 'image/png',
    transparent: true,
    version: '1.3.0'
}).addTo(map);

// 5. Handle GetFeatureInfo operation mapping on mouse click
map.on('click', function(evt) {
    document.getElementById('content').innerHTML = "Fetching data...";
    
    // Extract map canvas details
    var size = map.getSize();
    var bounds = map.getBounds();
    var point = map.latLngToContainerPoint(evt.latlng);
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();

    // Manually reconstruct standard OGC parameters matching WMS 1.3.0 specifications
    var params = 'SERVICE=WMS&VERSION=1.3.0&REQUEST=GetFeatureInfo' +
                 '&LAYERS=awm_container&QUERY_LAYERS=awm_container' +
                 '&BBOX=' + sw.lat + ',' + sw.lng + ',' + ne.lat + ',' + ne.lng +
                 '&WIDTH=' + size.x + '&HEIGHT=' + size.y +
                 '&I=' + Math.floor(point.x) + '&J=' + Math.floor(point.y) +
                 '&INFO_FORMAT=text/html&CRS=EPSG:4326&STYLES=';

    // Execute standard asynchronous AJAX call to fetch target layer features
    fetch(wmsUrl + '?' + params)
        .then(function(res) { return res.text(); })
        .then(function(html) { 
            document.getElementById('content').innerHTML = html; 
        })
        .catch(function(err) { 
            document.getElementById('content').innerHTML = "Error loading data."; 
        });
});

