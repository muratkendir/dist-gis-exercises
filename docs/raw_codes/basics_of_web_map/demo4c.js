const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()})
    ],
    view: new ol.View({
      center: [1287392,6123424],
      zoom: 10
    })
  });

function onZoomEnd(evt) {
  const map = evt.map;
  var zoomInfo = 'Zoom level : \n' + map.getView().getZoom(); ;
  console.log(zoomInfo);
  document.getElementById('topright_box').innerHTML = zoomInfo;
}

map.on('moveend', onZoomEnd);