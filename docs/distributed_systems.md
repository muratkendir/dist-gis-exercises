# Exercise - Distributed Systems & System Arcihtectures

<img align="right" width=100 height=190 src="../images/TUM_Logo_blau_rgb_p.png"/>

<blockquote>
Munich Technical University / Chair of Geoinformatics <br> 
Murat Kendir*, Rupal Srivastava, Prof. Thomas Kolbe <br> 
murat.kendir@tum.de
</blockquote>

<div align="right" style="font-size:0.5em;">v. WiSe 2026-2027</div>

## Table of Contents

- [0. Aim of the Exercise](#0-aim-of-the-exercise)
   - [0.1 General Preparation](#01-general-preparation)
   - [0.2 Cheatsheets](#02-cheatsheets)
- [1. Technical Diagrams and UML](#1-technical-diagrams-and-uml)
  - [1.1. How to draw a Sequence Diagram using PlantUML](#11-how-to-draw-a-sequence-diagram-using-plantuml)
    - [1.1.1. Sample PlantUML Code](#111-sample-plantuml-code)
  - [1.2. How to draw a sequence Diagram using Draw.io? - Optional](#12-how-to-draw-a-sequence-diagram-using-drawio-optional)
- [2. Thin-Client & Fat-Client Architectures in the Web Applications](#2-thin-client-fat-client-architectures-in-the-web-applications)
  - [2.1. Preparation for the Next Discussion about Tiers - Web Developer Tool / Developer Tool](#21-preparation-for-the-next-discussion-about-tiers-web-developer-tool-developer-tool)
  - [2.2. Discussion about the Tiers in Layered Architectures](#22-discussion-about-the-tiers-in-layered-architectures)
    - [2.2.1. Seismic Monitor - IRIS](#221-seismic-monitor-iris)
    - [2.2.2. Geoportal Bayern](#222-geoportal-bayern)
    - [2.2.3. turf.js - A Fat Client Web Map Application](#223-turfjs-a-fat-client-web-map-application)
    - [2.2.4. geojson.io - Another Fat Client Case](#224-geojsonio-another-fat-client-case)
- [3. Creating a Sequence Diagram using a Sample Request – Response Example](#3-creating-a-sequence-diagram-using-a-sample-request-response-example)
  - [3.1. Review the requests and responses before and after creating a route for mountain bikes in the BayernAtlas web app](#31-review-the-requests-and-responses-before-and-after-creating-a-route-for-mountain-bikes-in-the-bayernatlas-web-app)
  - [3.2. Create the Sequence Diagram by considering the previously interactions](#32-create-the-sequence-diagram-by-considering-the-previously-interactions)
  - [3.3. Request the UML Sequence Diagram from an AI Chatbot](#33-request-the-uml-sequence-diagram-from-an-ai-chatbot)



```python
import iplantuml
```

## 0. Aim of the Exercise

This exercise primarily focuses on creating UML Sequence Diagrams and understanding the importance of technically diagramming interactions between distributed systems. You will practice using diagramming tools and explore spatial web applications to understand the mechanisms working in the background. In general, you will need to complete the following tasks:

- Select a specific interaction on any of the given websites and try to understand the interactions between the user interface and the back-end applications/services using **developer tools** of the browsers. (Chapter 2)
- Try to visualize the selected interaction using **PlantUML** or (alternatively) **Draw.io**, following UML Sequence Diagram rules. (Chapter 3)

You can refer to the following resources when needed:

### 0.1 General Preparation

- [ ] Check the General Principles of the UML Sequence Diagrams (on Moodle, 1. Week, "01-System Architectures" presentation, "UML Sequence Diagrams" section)
- [ ] <a href="https://guides.visual-paradigm.com/creating-sequence-diagrams-in-uml-a-comprehensive-tutorial/" target="_blank">Visual Paradigm - UML Tutorial</a>
- [ ] <a href="https://firefox-source-docs.mozilla.org/devtools-user/" target="_blank">Firefox DevTools User Docs</a>

### 0.2 Cheatsheets

- [ ] <a href="https://pdf.plantuml.net/1.2020.22/PlantUML_Language_Reference_Guide_en.pdf" target="_blank">PlantUML Language Reference Guide</a>
- [ ] <a href="https://youtu.be/2CC0fugc_2o?si=5tYM7X7NVzBOE-FH" target="_blank">Understand Browser Dev Tools Network Tab - Video Tutorial</a>

## 1. Technical Diagrams and UML

<blockquote>
Technical diagrams are a visually rich way of expressing the procedures, workflows, plans, data models or, scenarios in various domains. A Unified Modeling Language (UML) diagram is a standardized visual representation used to model and design software systems. It provides a blueprint of the system’s structure and behavior, helping developers, analysts, and stakeholders understand, communicate, and document software architecture and processes.
</blockquote>

In the following table, you will find some UML and non-UML diagram types. 

Please note that we only focus on two types of UML diagrams (**Sequence Diagram & State Machine Diagram**) in the Distributed GIS & Cloud Computing course.

### UML Diagrams

 **Category** | **Diagram Type** | **Primary Purpose** | **Common Fields of Expertise** 
---|---|---|---
 Structure | Class | Shows classes, their attributes and operations, and the relationships between them. | Software engineering, object-oriented design, system analysis 
 Behavior | Use Case | Shows the interactions between actors and the functionality provided by the system. | Requirements engineering, business analysis, system analysis 
 Behavior – Interaction | Sequence | Shows message exchanges between objects in chronological order. | Software architecture, system design, API design 
 Behavior | Activity | Shows workflows, process steps, decisions, and parallel activities. | Business process modeling, workflow design, software engineering 
 Behavior | State Machine | Shows an object’s states and the transitions between them in response to events. | Embedded systems, protocol design, event-driven software development 

### Non-UML Diagrams

 **Notation** | **Type / Scope** | **Primary Purpose** | **Common Fields of Expertise** 
---|---|---|---
 Entity–Relationship Diagram (ERD) | Data modeling diagram | Shows entities, their attributes, and the relationships between entities. | Database design, data engineering, information systems 
 C4 Model | Software architecture model | Describes a system at the Context, Container, Component, and Code levels. | Software architecture, solution architecture, technical documentation 
 Cloud Architecture / Resource Diagram | Architecture diagram | Shows cloud resources and their connections on platforms such as AWS or Azure. | Cloud engineering, DevOps, solution architecture 
 Wireframe | User interface sketch | Shows the layout and core functionality of a user interface. | UX/UI design, product design, frontend development 
 Gantt Chart | Project planning chart | Shows task durations, schedules, and dependencies. | Project management, product management, operations planning 



### 1.1. How to draw a Sequence Diagram using PlantUML

PlantUML is an open-source tool that lets you create UML and many other technical diagrams from plain-text source code instead of dragging shapes on a canvas.

There are also alternatives to text-based diagramming tools, such as PlantUML, including Mermaid and ZenUML.

In this exercise, we will focus on using PlantUML, but you can also use other diagramming tools to visualize your diagrams for your own purposes.

There are multiple ways of rendering PlantUML diagrams:

- [ ] [plantuml.com](https://plantuml.com/) provides an online plantuml server, which is free to use. (Recommended Method)
  - Just type the plantmul codes into the textbox and press the submit button.
- [ ] In the text editor SublimeText, there is a plugin called "PlantUMLDiagrams". (Optional)
  - To install this plugin, press the ++ctrl+shift+p++ buttons and type "Install Package".
  - After the list of plugins appears, search for "PlantUMLDiagrams" and click on it.
  - After the plugin installation finished, press again the ++ctrl+shift+p++ buttons and search for "Generate Diagrams for Active View"
  - NOTE: You must have a "PlantUML file" with the correct notation and file extension (.puml or .pu)
- [ ] In the **Visual Studio Code** editor, there is an extension with the same name "**PlantUML**".
  - To install this extension, press ++ctrl+shift+x++ to open the Extensions view.
  - After the Extensions sidebar appears, search for "PlantUML" in the search box.
  - Find the official extension (usually the first one, by Jebbs) from the list and click the blue `Install` button.
  - After the extension has finished installing, open your file that contains PlantUML code.
  - To generate a preview of your diagram, press the shortcut keys ++alt+d++ .
  - (Optional) Alternatively, you can press ++ctrl+shift+p++ to open the Command Palette, then search for `PlantUML: Preview Current Diagram` and press Enter.
- [ ] In Jupyter Lab (You can run it via Conda/Anaconda), there is an interactive PlantUML library called "**iplantuml**" (Optional)
  - Type `pip install iplantuml` in the running Jupyter notebook.
  - Create an empty code cell and enter `import iplantuml`
  - Create an additional code cell, and start typing your PlantUML text starting with `%%plantuml`.
  - After running both of the cells, you can visualize the PlantUML diagram.


#### 1.1.1. Sample PlantUML Code

You can use the following code as an example to test the tools described in the previous section.


```python
%%plantuml

@startuml
actor Alice
actor Bob
Alice -> Bob: Authentication Request
Activate Bob
Bob -> Alice: Authentication Response
Deactivate Bob
Alice -> Bob: Another authentication Request
Activate Bob
Alice <- Bob: Another authentication Response
Deactivate Bob
@enduml
```

    Writing output for /home/murat/gitpot/dist-gis-exercises/docs/notebooks/73d463ec-8e41-4284-903a-b8c57319cd97.uml to 73d463ec-8e41-4284-903a-b8c57319cd97.svg





    
![svg](output_8_1.svg)
    



### 1.2. How to draw a sequence Diagram using Draw.io? - Optional

You can create a UML diagram on [Diagrams Net](https://app.diagrams.net/).

- [ ] Choose the location where you want to save your diagram. We suggest saving it in your local device, so you don’t need to log in or register an account.
You can start drawing by creating a blank diagram.

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/diagrams_choose_type.png" alt="Draw.io - Choose Type" style="border:3px solid darkgray">
  <figcaption>Draw.io - Choose Type</figcaption>
</figure> 

- [ ] As you start drawing, a panel will appear on the left side, where you can select UML shapes. Find those relevant shapes and use them to create your sequence diagram. You can refer to the lecture slides and see which shapes are relevant.

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/diagrams_uml_shapes.png" alt="Draw.io - UML Shapes Collection" style="border:3px solid darkgray">
  <figcaption>Draw.io - UML Shapes Collection</figcaption>
</figure> 

> Tip: In the application, you can use the shapes named "Actor", "Lifeline", "Activation Bar", "Self Call", "Message", and "Return". If you have forgotten the notations of the UML sequence diagram, check the slides 31-39  of the presentation “01 – System Architectures”. 


## 2. Thin-Client & Fat-Client Architectures in the Web Applications

In this step,  we will learn how to observe some interactions on different websites using “**Web Developer Tools**” (in Firefox) or “Developer Tools” (Chrome). We will discuss which interactions are based on a Fat-Client or Thin-Client architecture in relation to our observations (Relevant Presentation: 1 - System Architectures / page 17).

### 2.1. Preparation for the Next Discussion about Tiers - Web Developer Tool / Developer Tool

 - Open Firefox or Google Chrome web browser.
 - Simply navigate to the relevant page shown in the next topic ( [IRIS Seismic Monitor](https://ds.iris.edu/seismon/index.phtml) ) or go to a random web site.
 - Press ++ctrl+shift+c++ buttons together or ++ctrl+shift+i++ / Alternatively, you can navigate from menu:
 - For Firefox: `Menu > More Tools > Web Developer Tool`
 - For Chrome: `Menu > More Tools > Developer Tools`
 - Navigate to the Network tab and press the reload button. Alternatively, you can press the ++f5++ key to refresh the page. (If you want to refresh the web page by clearing the cache, press ++ctrl+f5++ )
 - Enable `Disable Cache` by checking the box.
 - At a glance, observe which files have been successfully downloaded and which have not. Download status is exposed as `status codes` in the first column of the `Network` tab. If you want to learn more about status codes, visit the page: [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) or search for “HTTP status codes”
 - Right-click on the column headers in the `Network` Pane and enable the `Start Time`, `End Time`, `Response Time` and `Duration` columns. All these temporal attributes will be visualized in the Timeline (called **Waterfall** in the Chrome browser) section in the Network Pane. (The same attributes are available in the Waterfall column in the Chrome browser. If you cannot see the Waterfall column, right-click on one of the column headers and enable it.
 - It is now possible to view loaded resources in ascending or descending order of time. This is very useful for detecting the latest loaded resources on a web page.
 - Simply click on a row to view methods for these resources (**GET/POST** or **DELETE**) and header attributes (such as MIME types and charset).
 - You can use the `Raw` switch to see raw data in the Response tab.

On Chrome: Clear panel, filter requests by requested data type.

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/chrome_filter_requests.png" alt="Chrome Filter Requests" style="border:3px solid darkgray">
  <figcaption>Chrome Filter Requests</figcaption>
</figure>

On Chrome: Read the request header and the corresponding response, check the detailed data type (**MIME type** and **character encoding/charset**).

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/chrome_check_details.png" alt="Chrome Check Details" style="border:3px solid darkgray">
  <figcaption>Chrome Check Details</figcaption>
</figure>

On Chrome: You can sort requests by clicking on the column names, and it is also possible to sort by start time, end time, response time, etc. These are not displayed directly as separate columns, but you can find them in the `Timeline` or `Waterfall`.

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/chrome_waterfall.png" alt="Chrome Waterfall" style="border:3px solid darkgray">
  <figcaption>Chrome Waterfall</figcaption>
</figure>

On Firefox: Clear panel, filter requests by type of requested data

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/firefox_data_type.png" alt="Firefox Data Type" style="border:3px solid darkgray">
  <figcaption>Firefox Data Type</figcaption>
</figure>

On Firefox: By clicking on a row, you can also view the details of a request and the corresponding response. Also it’s possible to sort requests by `start time`, `end time`
, etc. in Firefox.

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/firefox_timings.png" alt="Firefox Timings" style="border:3px solid darkgray">
  <figcaption>Firefox Data Type</figcaption>
</figure>


### 2.2. Discussion about the Tiers in Layered Architectures

Examine the following websites by using the `Web Developer Tools` or `Developer Tools` as described above, and try to answer the questions:

- What kind of tiers might the web applications have? (Application-Interface, Application, Data)
- Are the parts/files represented on the web app downloaded automatically, or is the download triggered by an interaction?
- Is the website in Thin-Client Architecture or Fat-Client Architecture?


#### 2.2.1. Seismic Monitor - IRIS

[https://ds.iris.edu/seismon/index.phtml](https://ds.iris.edu/seismon/index.phtml)

- 1) Do the HTML, CSS, and image files represent the application interface?
 
<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/iris_dom_contents.png" alt="IRIS Web Contents" style="border:3px solid darkgray">
  <figcaption>IRIS - Web Content Types</figcaption>
</figure>

- 2)  After clicking on a point on the map, the World Seismic Map changed. Thus, the click event triggered the app to download more data from the server.

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/iris_interaction.png" alt="IRIS Interaction" style="border:3px solid darkgray">
  <figcaption>IRIS - Interaction with the Map</figcaption>
</figure>

This website is a very old but working example of a web mapping application. It is a good example of a "thin client" architecture, as data is always downloaded from the server in response to requests.


#### 2.2.2. Geoportal Bayern

[https://geoportal.bayern.de/bayernatlas](https://geoportal.bayern.de/bayernatlas)

On the home page, select the base map to be loaded on the screen.

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/bayernatlas_basemap.png" alt="BayernAtlas Basemap" style="border:3px solid darkgray">
  <figcaption>BayernAtlas - Basemap Selection</figcaption>
</figure>

To load bike paths (Radwege) and a cycling map, activate the Hiking and cycling trails layers (Home page: `Themen > Sport- und Freizeit > Wander- und Radwege > Radwege` ). Once activated, you will see a green network on the map.

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/bayernatlas_overlay.png" alt="BayernAtlas Overlay" style="border:3px solid darkgray">
  <figcaption>BayernAtlas - Overlay</figcaption>
</figure>

This individual biking trail net is retrieved from the server and is displayed as a transparent image. Let’s assume you need this image for another purpose, but you don’t see any button that allows you to download it directly. In this case, `Web Developer Tool` might be helpful.
Open the `Web Developer Tool`, refresh the page, and you will see a list of requests with image data. In order not to spend time on previewing each image, you can filter requests by `Name`. In our case, we search for “radwege” data; therefore, we type “radwege” in the Filter textbox.

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/bayernatlas_radwege.png" alt="bayernatlas_radwege" style="border:3px solid darkgray">
  <figcaption>Bayernatlas - Radwege (Biking Trails)</figcaption>
</figure>

Double-click on the relevant row, and you will see a PNG file on a separate web page and you can easily save this bike path image.

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/bayernatlas_radwege_response.png" alt="bayernatlas_radwege response" style="border:3px solid darkgray">
  <figcaption>Bayernatlas - Radwege (Biking Trails) response</figcaption>
</figure>


#### 2.2.3. turf.js - A Fat Client Web Map Application

[https://turfjs.org/](https://turfjs.org/)

TurfJS is a JavaScript library that supports dealing with geospatial datasets in browsers and manipulating them using some spatial functions. It usually loads JS packages into the browser in compressed or linearized format, like the other JS libraries.

> Tip: You can use [prettier.io](https://prettier.io/) web application to see these files in a “pretty printed” format.

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/turf_js_packages.png" alt="turf_js_packages" style="border:3px solid darkgray">
  <figcaption>TurfJS - Packages</figcaption>
</figure>

Clear the available requests in the network pane, then try to select an operation on the main web page (for example, select `Voronoi`).

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/turf_voronoi.png" alt="turf_js_voronoi" style="border:3px solid darkgray">
  <figcaption>TurfJS - Voronoi algorithm</figcaption>
</figure>

Try to zoom in and zoom out on one of the maps (input or output widget).

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/turf_zoomin_out.png" alt="turf_js_voronoi" style="border:3px solid darkgray">
  <figcaption>TurfJS - Zoom In / Out</figcaption>
</figure>


#### 2.2.4. geojson.io - Another Fat Client Case

The geometry drawn in [geojson.io](geojson.io) is created, edited, and saved in the browser, while the server provides only map tiles. Hence, it is an easily verifiable case of a fat-client web application.

geojson.io is a free web-based editor for GeoJSON. You create points, lines, and polygons on a map, while the generated GeoJSON text appears instantly on the side panel. The application is based on JavaScript libraries, which run in the browser, and the base map is provided by Mapbox.

Compare it to the IRIS Seismic Monitor (a thin client where every click requests fresh content from the server) and to the routing in BayernAtlas (both the route and the elevation profile are calculated on the server).

##### Preparation
Open geojson.io in Chrome or Firefox and open the Developer Tools Network tab before you start drawing.

 **System** | **Shortcut to open Developer Tools** 
---|---
 macOS (Chrome / Firefox) | ++option+command+i++ 
 Windows / Linux (Chrome / Firefox) | ++ctrl+shift+i++ or ++f12++ 

1. Go to [geojson.io](https://geojson.io) and zoom to an area you know, for example, the TUM main campus.
2. Open the `Developer Tools` and switch to the `Network` tab. If it is hidden, click the » arrow.
3. Tick `Disable cache so` every tile request is visible.
4. Click the Clear button (Chrome: circle with a slash; Firefox: trash can) to start from an empty list.

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/geojson_io.png" alt="gejson_io" style="border:3px solid darkgray">
  <figcaption>geojson.io Web Interface & Network tab</figcaption>
</figure>

##### Tasks

Work through the four interactions below and watch the Network tab after each one. Clear the list between tasks so you only see what that interaction triggered.

* Task 1 – Draw a polygon without moving the map. Select the polygon tool, click a few vertices, and close the shape. Watch the JSON panel on the right update. Note which requests, if any, appear in the Network tab.
* Task 2 – Edit the polygon. Drag one vertex to a new position and add a property in the Feature Editor (for example, `name = campus`). Check again whether any request carries your change. Finish the polygon drawing by double-clicking.
* Task 3 – Create a buffer zone. Select the polygon you created, then click on the buffer analysis icon in the top middle of the page.
* Task 4 – Export the data. Open the Export tab in the Feature Editor, choose GeoJSON/ BBOX, and download the file.

##### What to look for in the Network tab

 **File** | **Role** | **Loaded when** 
---|---|---
 light-v11 | Style: how the map should look | Once, on page load 
 mapbox-streets-v8… (TileJSON) | Where the data lives | Once, on page load 
 iconset.pbf | Icons | Once, on page load 
 {start}-{end}.pbf | Font characters for labels | When a label needs characters not loaded yet 
 {y}.vector.pbf | The map data itself | When you pan or zoom to a new area 

Drawing, editing, and exporting do not produce a request that carries the polygon. The exported file is generated by JavaScript in the browser and saved directly as a download.

## 3. Creating a Sequence Diagram using a Sample Request – Response Example

In this step, you will observe an interaction that takes place in the BayernAtlas web app. This interaction is a simple routing / navigation application that provides a route for a specified leisure activity.
You will then create a sequence diagram, taking into account this interaction and possible web services working in the background.

> Note: Do not consider timings (start time, duration, etc.) of the requests.


### 3.1. Review the requests and responses before and after creating a route for mountain bikes in the BayernAtlas web app

Choose a routing mode. Such as “hiking” (wandern)  as shown in the first icon. Select the start point and end points on the map; and a route will be created, and a profile showing the elevation along the route.

<figure style="width:%33;text-align: center;">
  <img src="../images/distributed_systems/bayernatlas_routing.png" alt="bayernatlas_routing" style="border:3px solid darkgray">
  <figcaption>Bayernatlas - Routing (Interaction)</figcaption>
</figure>

<figure style="width:%50;text-align: center;">
  <img src="../images/distributed_systems/bayernatlas_mountain_bike.png" alt="bayernatlas_mountain_bike" style="border:3px solid darkgray">
  <figcaption>Bayernatlas - Mountain Bike (Interaction)</figcaption>
</figure>

The “route” and “profile” are created using data from the server. We can also download them as JSON files from the Web Developer Tool.

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/bayernatlas_profile.png" alt="bayernatlas_profile" style="border:3px solid darkgray">
  <figcaption>Bayernatlas - Profile (Interaction)</figcaption>
</figure>

Clear the network pane before routing interaction, and then observe the requests and responses triggered by this interaction.

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/bayernatlas_clear_requests.png" alt="bayernatlas_clear_requests" style="border:3px solid darkgray">
  <figcaption>Bayernatlas - Clear Requests (Interaction)</figcaption>
</figure>

Check the `method` of the `profile` request and check both the request and response tabs in the detailed information pane for this service. 

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/bayernatlas_profile_response.png" alt="bayernatlas_profile_response" style="border:3px solid darkgray">
  <figcaption>Bayernatlas - Profile Response (Interaction)</figcaption>
</figure>

Just as we did before, open Web Developer Tool, refresh the webpage, and filter requests by `route` and `profile` respectively. 
By clicking the `route` cell, you can view the formatted response JSON. 
Look into them individually and figure out what information is stored in each.

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/bayernatlas_route_json.png" alt="bayernatlas_route_json" style="border:3px solid darkgray">
  <figcaption>Bayernatlas - Route (JSON / Interaction)</figcaption>
</figure>

If you are familiar with creating files with file extensions as well as changing file extensions in the Windows system, you can skip the following file saving experiment.
Let’s assume we need this JSON data for another purpose. But unlike image files, which can be saved directly, this JSON data cannot be directly saved by right-clicking on the panel. Therefore, we need to create a file with an extension on the local machine, copy the entire JSON data, and paste it into the file you created. Make sure that the file you created has the extension `.json`. If you don’t see file extensions, check `File name extensions` in File Explorer.

<figure style="width:%100;text-align: center;">
  <img src="../images/distributed_systems/windows_enable_extensions.png" alt="windows_enable_extensions" style="border:3px solid darkgray">
  <figcaption>Windows - Enable File Extensions</figcaption>
</figure>

In the end, you will get a `route.json` file and a `profile.json` file.

### 3.2. Create the Sequence Diagram by considering the previously interactions

- [ ] Reconsider the steps that you handled in the previous section and prepare a UML Sequence Diagram with PlantUML or Draw.io tools.

### 3.3. Request the UML Sequence Diagram from an AI Chatbot

- [ ] Describe the interaction with all of its details to any AI Chatbot and request a PlantUML or Mermaid-based UML Sequence Diagram.

<blockquote>TIP: For the Mermaid-based texts, you can use the <a href="https://mermaid.live" target="_blank">"mermaid.live"</a> online tool for rendering the diagram.</blockquote>

- [ ] Compare the AI-generated Sequence Diagram with yours.
  - What are the differences?
  - Which one seems much more correct?

