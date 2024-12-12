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

/*
map.events.register('moveend', map, function() {
  var zoomInfo = 'Zoom level=' + map.getZoom() + '/' + (map.numZoomLevels + 1);
  document.getElementById('topright_box').innerHTML.value = 'Zoom Level ' + zoomInfo;
});
*/

function onZoomEnd(evt) {
  const map = evt.map;
  var zoomInfo = 'Zoom level : \n' + map.getView().getZoom(); ;
  console.log(zoomInfo);
  document.getElementById('topright_box').innerHTML = zoomInfo;
  /*
  const extent = map.getView().calculateExtent(map.getSize());
  const bottomLeft = toLonLat(getBottomLeft(extent));
  const topRight = toLonLat(getTopRight(extent));
  display('left', wrapLon(bottomLeft[0]));
  display('bottom', bottomLeft[1]);
  display('right', wrapLon(topRight[0]));
  display('top', topRight[1]);
  */
}

map.on('moveend', onZoomEnd);