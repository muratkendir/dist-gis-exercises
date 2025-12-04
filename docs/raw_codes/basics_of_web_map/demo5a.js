const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()}),
      new ol.layer.Image({
        source: new ol.source.ImageWMS({
          url: 'https://geoportal.muenchen.de/geoserver/gsm_wfs/awm_wertstoffhoefe_opendata/ows',
          params: {'LAYERS': 'awm_wertstoffhoefe_opendata'},
          }),
      }),
    ],
    view: new ol.View({
      center: [1287392,6123424],
      zoom: 10
    })
  });