const projection = ol.proj.get('EPSG:3857');
const projectionExtent = projection.getExtent();
console.log('Projection Extent : ', projectionExtent);
const size = ol.extent.getWidth(projectionExtent) / 256;
console.log('Size : ' , size);
const resolutions = new Array(19);
const matrixIds = new Array(19);
for (let z = 0; z < 19; ++z) {
  // generate resolutions and matrixIds arrays for this WMTS
  resolutions[z] = size / Math.pow(2, z);
  matrixIds[z] = z;
}

const my_wmts = new ol.layer.Tile({
                  opacity: 0.5,
                  source: new ol.source.WMTS({
                    url: 'https://mrdata.usgs.gov/mapcache/wmts',
                    layer: 'sgmc2',
                    matrixSet: 'GoogleMapsCompatible',
                    format: 'image/png',
                    projection: projection,
                    tileGrid: new ol.tilegrid.WMTS({
                      origin: ol.extent.getTopLeft(projectionExtent),
                      resolutions: resolutions,
                      matrixIds: matrixIds,
                    }),
                    style: 'default',
                    wrapX: false,
                  }),
                });

const view = new ol.View({
  center: [-10503409, 4753597],
  zoom: 10,
});

const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
        }),
      my_wmts,
    ],
    view: view,
  });