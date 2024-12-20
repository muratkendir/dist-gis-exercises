const wmsSource = new ol.source.ImageWMS({
  url: 'https://geodienste.hamburg.de/HH_WMS_INSPIRE_Gebaeude_2D_ALKIS',
  params: {'LAYERS': 'BU.Buildings'},
});

const wmsLayer = new ol.layer.Image({
  source: wmsSource,
});

const view = new ol.View({
  center: [1112419.937,7085461.368],
  zoom: 17,
});

const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
        }),
      wmsLayer,
    ],
    view: view,
  });

map.on('singleclick', function (evt) {
  //console.log(evt);
  document.getElementById('topright_box').innerHTML = '';
  const viewResolution = view.getResolution();
  const url = wmsSource.getFeatureInfoUrl(
    evt.coordinate,
    viewResolution,
    'EPSG:3857',
    {'INFO_FORMAT': 'text/plain'},
  );
  if (url) {
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById('topright_box').innerHTML = html;
      });
  }
});


