var map = new ol.Map({
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