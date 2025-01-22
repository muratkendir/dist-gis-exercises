# OGC Services & Samples

<img align="right" width=100 height=190 src="./images/TUM_Logo_blau_rgb_p.png"/>
<blockquote>
Munich Technical University || Chair of Geoinformatics </br></br>
Murat Kendir, Prof. Thomas Kolbe || murat.kendir@tum.de
</blockquote>

- In this document we provide some examples for OGC services.
- Take a look at the given URLs and their parameters and try to analyze the responses for the GetCapabilities operation.

[Presentation Mode](./ogc_services_samples.slides.html)

## Tips & Tricks about the URLs and Parameters

### Whitespace characters

<p style="background-color:#dad7cb;color:#000;"> Use an advanced note editor (or an IDE) such as Notepad++ or SublimeText to copy and paste URLs. If you enable showing all characters in these editors, you may see some special characters that are not shown by default, such as “\n” (Line Feed - LF), “\r\n” (Carriage Return + Line Feed - CR/LF), “\t” (Tab), “\s” (Space). These characters are known as “Whitespace Characters” and are invisible in most editor software.</p>

- [List of the Whitespace Characters - Wikipedia](https://en.wikipedia.org/wiki/Whitespace_character)

<p style="background-color:#98c6ea;color:#000;"><b>Showing whitespace characters in SublimeText</b> : Press Ctrl+Shift+P in SublimeText and type "Install Package". Search for the package "RawLineEdit". Select and press Enter to install the package. Check the left-bottom info bar to be sure if the installation succeeded. Press Ctrl+Shift+P again and search for "Toggle Line Edit Mode". You can also assign a keyboard shortcut for any available command.</p>

<p style="background-color:#dad7cb;color:#000;"> <b>Showing whitespace characters in Notepad++</b> : In the Notepad++, click to View \> Show Symbol \> Show All Characters.</p>

## OGC Web Samples - 1

### Bavaria - Digital orthophotos 

<p style="word-wrap:break-word;font-family:courier;">https://geoservices.bayern.de/od/wms/dop/v1/dop20?language=ger&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&BBOX=1284416.822854088619%2C6128194.115993234329%2C1285969.715073181316%2C6129565.189462079667&SRS=EPSG%3A3857&WIDTH=1358&HEIGHT=1199&LAYERS=by_dop20c&STYLES=&FORMAT=image%2Fpng&DPI=96&MAP_RESOLUTION=96&FORMAT_OPTIONS=dpi%3A96&TRANSPARENT=TRUE</p>

### Get Capabilities Link

<a href="https://geoservices.bayern.de/od/wms/dop/v1/dop20?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetCapabilities" target="_blank">https://geoservices.bayern.de/od/wms/dop/v1/dop20?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetCapabilities</a>

### Questions
- Who is the responsible person or corporation?
- Which Layers are queryable?
- Which image formats supported GetMap?
- Which file formats are supported for the GetFeatureInfo request?
- What is the difference between “Digitales Orthophoto 20cm (BVV)” and “DOP 20 (Farbe)” layers?

## OGC WMS Samples - 2
### Hamburg - Buildings - 2D ATKIS

<p style="word-wrap:break-word;font-family:courier;">https://geodienste.hamburg.de/HH_WMS_INSPIRE_Gebaeude_2D_ATKIS_Basis_DLM?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&BBOX=1111942.144059270155%2C7082582.984302694909%2C1115292.715944103431%2C7085541.258006609045&CRS=EPSG%3A3857&WIDTH=1358&HEIGHT=1200&LAYERS=BU.Building&STYLES=&FORMAT=image%2Fpng&DPI=96&MAP_RESOLUTION=96&FORMAT_OPTIONS=dpi%3A96&TRANSPARENT=TRUE</p>

### Get Capabilities Link

<a href="https://geodienste.hamburg.de/HH_WMS_INSPIRE_Gebaeude_2D_ATKIS_Basis_DLM?SERVICE=WMS&VERSION=1.3.0&REQUEST=GETCAPABILITIES" target="_blank">https://geodienste.hamburg.de/HH_WMS_INSPIRE_Gebaeude_2D_ATKIS_Basis_DLM?SERVICE=WMS&VERSION=1.3.0&REQUEST=GETCAPABILITIES</a>

### Questions
- Is GetLegendGraphic operation supported?
- How many CRS are supported?
- Is the default style of “BU.building” layer defined?

## OGC WMS Samples - 3
### Earth Observation Center - Elevation Map Service

<p style="word-wrap:break-word;font-family:courier;">https://geoservice.dlr.de/eoc/elevation/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&BBOX=1199862.581342106452,6118798.876939699054,1307080.881656771293,6213463.635464943945&CRS=EPSG:3857&WIDTH=1358&HEIGHT=1199&LAYERS=srtm_x-sar_dem_mosaic&STYLES=&FORMAT=image/png&DPI=96&MAP_RESOLUTION=96&FORMAT_OPTIONS=dpi:96&TRANSPARENT=TRUE</p>

### Get Capabilities Link

<a href="https://geoservice.dlr.de/eoc/elevation/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities" target="_blank">https://geoservice.dlr.de/eoc/elevation/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities</a>

### Questions

- Is “SRTM X-SAR Elevation Mosaic” layer queryable?
- What you get when the GetFeatureInfo operation used on map?

## OGC WMTS Sample

### basemap.de Web Raster

<p style="word-wrap:break-word;font-family:courier;">https://sgx.geodatenzentrum.de/wmts_basemapde/tile/1.0.0/de_basemapde_web_raster_farbe/default/DE_EPSG_25832_ADV/09/383/297.png</p>

### Get Capabilities Link

<a href="https://sgx.geodatenzentrum.de/wmts_basemapde/1.0.0/WMTSCapabilities.xml" target="_blank">https://sgx.geodatenzentrum.de/wmts_basemapde/1.0.0/WMTSCapabilities.xml</a>

### Questions

- How many Layers are available?
- How many TileMatrixSets are available?
- How many Tile Matrixes does the first TileMatrixSet have?

## OGC WFS Sample - 1 

### Hamburg - Groundwater Protection *

<p style="background-color:#dad7cb;color:#000;"> Use <a href="https://www.urldecoder.io/">URLDecode.io</a> web site to see the parameters of the WFS request </p>

<p style="font-size:0.6em;word-wrap:break-word;font-family:courier;">https://geodienste.hamburg.de/HH_WFS_Grundwasserschutz?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAMES=de.hh.up:u12_f_gw_flurabstand_max&SRSNAME=EPSG:25832&FILTER=%3Cfes:Filterxmlns:fes%3D%22http://www.opengis.net/fes/2.0%22xmlns:gml%3D%22http://www.opengis.net/gml/3.2%22%3E%0A%3Cfes:And%3E%0A%3Cfes:BBOX%3E%0A%3Cfes:ValueReference%3Egeom%3C/fes:ValueReference%3E%0A%3Cgml:EnvelopesrsName%3D%22EPSG:25832%22%3E%0A%3Cgml:lowerCorner%3E5643335930170%3C/gml:lowerCorner%3E%0A%3Cgml:upperCorner%3E5683735933740%3C/gml:upperCorner%3E%0A%3C/gml:Envelope%3E%0A%3C/fes:BBOX%3E%0A%3Cfes:Andxmlns:fes%3D%22http://www.opengis.net/fes/2.0%22%3E%0A%3Cfes:Notxmlns:fes%3D%22http://www.opengis.net/fes/2.0%22%3E%0A%3Cfes:PropertyIsNullxmlns:fes%3D%22http://www.opengis.net/fes/2.0%22%3E%0A%3Cfes:ValueReference%3Egeom%3C/fes:ValueReference%3E%0A%3C/fes:PropertyIsNull%3E%0A%3C/fes:Not%3E%0A%3Cfes:PropertyIsEqualToxmlns:fes%3D%22http://www.opengis.net/fes/2.0%22%3E%0A%3Cfes:Functionxmlns:fes%3D%22http://www.opengis.net/fes/2.0%22name%3D%22IsSurface%22%3E%0A%3Cfes:ValueReference%3Egeom%3C/fes:ValueReference%3E%0A%3C/fes:Function%3E%0A%3Cfes:Literalxmlns:fes%3D%22http://www.opengis.net/fes/2.0%22%3Etrue%3C/fes:Literal%3E%0A%3C/fes:PropertyIsEqualTo%3E%0A%3C/fes:And%3E%0A%3C/fes:And%3E%0A%3C/fes:Filter%3E%0A
</p>

### Get Capabilities Link

<a href="https://geodienste.hamburg.de/HH_WFS_Grundwasserschutz?REQUEST=GetCapabilities&SERVICE=WFS" target="_blank">https://geodienste.hamburg.de/HH_WFS_Grundwasserschutz?REQUEST=GetCapabilities&SERVICE=WFS</a>

### Questions

- How many feature types available?
- Is Filter Encoding supported?
- If yes, then which filters are supported?

## OGC WFS Sample - 2

### Hamburg - Tax Rates

<p style="font-size:0.6em;word-wrap:break-word;font-family:courier;">https://geodienste.hamburg.de/HH_WFS_Taxenstaende?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAMES=de.hh.up:taxenstaende&COUNT=1000000&SRSNAME=EPSG:25832&BBOX=543859.73267435841262341,5937443.36617781594395638,559909.96083074959460646,5949410.37595691997557878,EPSG:25832</p>

### Get Capabilities Link

<a href="https://geodienste.hamburg.de/HH_WFS_Taxenstaende?SERVICE=WFS&REQUEST=GetCapabilities" target="_blank">https://geodienste.hamburg.de/HH_WFS_Taxenstaende?SERVICE=WFS&REQUEST=GetCapabilities</a>



## OGC API - Features Sample - 1

### North Rhine-Westphalia Selected Geosites

<p style="word-wrap:break-word;font-family:courier;">https://ogc-api.nrw.de/inspire-am-geotope/collections/AM_Geotope_Polygone/items/1?f=json</p>

### API web interface 

<a href="https://ogc-api.nrw.de/inspire-am-geotope/api?f=html" target="_blank">https://ogc-api.nrw.de/inspire-am-geotope/api?f=html</a>

### API Conformance Document

<a href="https://ogc-api.nrw.de/inspire-am-geotope/conformance?f=html" target="_blank">https://ogc-api.nrw.de/inspire-am-geotope/conformance?f=html</a>

### Questions

- How many Feature Collections are available on the main service (ogc-api.nrw.de)?
- Which properties can be used to filter geosites (for AM_Geotope_Polygone)?
- What is the temporal range of the service for the geosites collection?


## OGC API - Features Sample - 2

### Traffic volumes in Hamburg

<p style="word-wrap:break-word;font-family:courier;">https://api.hamburg.de/datasets/v1/verkehrsstaerken/collections/radverkehr_pegel/items/1?f=json</p>

### API web interface 

<a href="https://api.hamburg.de/datasets/v1/verkehrsstaerken/api?f=html" target="_blank">https://api.hamburg.de/datasets/v1/verkehrsstaerken/api?f=html</a>

### API Conformance Document

<a href="https://api.hamburg.de/datasets/v1/verkehrsstaerken/conformance?f=html" target="_blank">https://api.hamburg.de/datasets/v1/verkehrsstaerken/conformance?f=html</a>


