document.addEventListener("DOMContentLoaded", () => {
    const pointTable = document.getElementById("pointTable").getElementsByTagName('tbody')[0];

    fetch("https://asia-southeast2-gis-tester-401506.cloudfunctions.net/GetLocation")
        .then(response => response.json())
        .then(data => {
            data.features.forEach(feature => {
                if (feature.geometry.type === "Point") {
                    const row = pointTable.insertRow();
                    const nameCell = row.insertCell(0);
                    const coordinatesCell = row.insertCell(1);
                    const typeCell = row.insertCell(2);
                    nameCell.innerText = feature.properties.name;
                    coordinatesCell.innerText = JSON.stringify(feature.geometry.coordinates);
                    typeCell.innerText = feature.geometry.type;
                    
                }
            });
        })
        .catch(error => console.error("Terjadi kesalahan:", error));
});

document.addEventListener("DOMContentLoaded", () => {
    const pointTable = document.getElementById("territoryTable").getElementsByTagName('tbody')[0];

    fetch("https://asia-southeast2-gis-tester-401506.cloudfunctions.net/GetLocation")
        .then(response => response.json())
        .then(data => {
            data.features.forEach(feature => {
                if (feature.geometry.type === "Polygon") {
                    const row = pointTable.insertRow();
                    const nameCell = row.insertCell(0);
                    const coordinatesCell = row.insertCell(1);
                    const typeCell = row.insertCell(2);
                    nameCell.innerText = feature.properties.name;
                    coordinatesCell.innerText = JSON.stringify(feature.geometry.coordinates);
                    typeCell.innerText = feature.geometry.type;
                    
                }
            });
        })
        .catch(error => console.error("Terjadi kesalahan:", error));
});

document.addEventListener("DOMContentLoaded", () => {
    const pointTable = document.getElementById("lineTable").getElementsByTagName('tbody')[0];

    fetch("https://asia-southeast2-gis-tester-401506.cloudfunctions.net/GetLocation")
        .then(response => response.json())
        .then(data => {
            data.features.forEach(feature => {
                if (feature.geometry.type === "LineString") {
                    const row = pointTable.insertRow();
                    const nameCell = row.insertCell(0);
                    const coordinatesCell = row.insertCell(1);
                    const typeCell = row.insertCell(2);
                    nameCell.innerText = feature.properties.name;
                    coordinatesCell.innerText = JSON.stringify(feature.geometry.coordinates);
                    typeCell.innerText = feature.geometry.type;
                    
                }
            });
        })
        .catch(error => console.error("Terjadi kesalahan:", error));
});
document.addEventListener('DOMContentLoaded', () => {
    const map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([0, 0]),
            zoom: 2
        })
    });
    const waypointSource = new ol.source.Vector({
        url: 'https://asia-southeast2-gis-tester-401506.cloudfunctions.net/GetLocation',
        format: new ol.format.GeoJSON()
    });

    const lineStringSource = new ol.source.Vector({
        url: 'https://asia-southeast2-gis-tester-401506.cloudfunctions.net/GetLocation',
        format: new ol.format.GeoJSON()
    });

    const polylineSource = new ol.source.Vector({
        url: 'https://asia-southeast2-gis-tester-401506.cloudfunctions.net/GetLocation',
        format: new ol.format.GeoJSON()
    });
    const waypointLayer = new ol.layer.Vector({
        source: waypointSource,
        style: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 5,
                fill: new ol.style.Fill({
                    color: 'blue'
                })
            })
        })
    });

    const lineStringLayer = new ol.layer.Vector({
        source: lineStringSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'green',
                width: 2
            })
        })
    });

    const polylineLayer = new ol.layer.Vector({
        source: polylineSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'black',
                width: 5
                
            })
        })
    });

    // Menambahkan layer ke peta
    map.addLayer(waypointLayer);
    map.addLayer(lineStringLayer);
    map.addLayer(polylineLayer);

    // Mendapatkan koordinat dari GeoJSON
    const getCoordinates = (source) => {
        const features = source.getFeatures();
        const coordinates = features[0].getGeometry().getCoordinates();
        return coordinates;
    };

    // Menampilkan koordinat di dalam tabel
    waypointSource.once('change', () => {
        const waypointCoords = getCoordinates(waypointSource);
        document.getElementById('featureName').textContent = 'Waypoint';
        document.getElementById('featureType').textContent = 'Point';
        document.getElementById('featureCoords').textContent = waypointCoords.toString();
    });

    lineStringSource.once('change', () => {
        const lineStringCoords = getCoordinates(lineStringSource);
        document.getElementById('featureName').textContent = 'Line String';
        document.getElementById('featureType').textContent = 'Line String';
        document.getElementById('featureCoords').textContent = lineStringCoords.toString();
    });

    polylineSource.once('change', () => {
        const polylineCoords = getCoordinates(polylineSource);
        document.getElementById('featureName').textContent = 'Polyline';
        document.getElementById('featureType').textContent = 'Polyline';
        document.getElementById('featureCoords').textContent = polylineCoords.toString();
    });
});


    // Menambahkan layer ke peta
    map.addLayer(waypointLayer);
    map.addLayer(lineStringLayer);
    map.addLayer(polylineLayer);

    // Mendapatkan koordinat dari GeoJSON
    function getCoordinates(source) {
        var features = source.getFeatures();
        var coordinates = features[0].getGeometry().getCoordinates();
        return coordinates;
    }

    // Menampilkan koordinat di dalam tabel
    waypointSource.once('change', function() {
        var waypointCoords = getCoordinates(waypointSource);
        document.getElementById('featurename').textContent = 'Waypoint';
        document.getElementById('featureType').textContent = 'Point';
        document.getElementById('featureCoords').textContent = waypointCoords.toString();
    });

    lineStringSource.once('change', function() {
        var lineStringCoords = getCoordinates(lineStringSource);
        document.getElementById('featurename').textContent = 'Line String';
        document.getElementById('featureType').textContent = 'Line String';
        document.getElementById('featureCoords').textContent = lineStringCoords.toString();
    });

    polylineSource.once('change', function() {
        var polylineCoords = getCoordinates(polylineSource);
        document.getElementById('featurename').textContent = 'Polyline';
        document.getElementById('featureType').textContent = 'Polyline';
        document.getElementById('featureCoords').textContent = polylineCoords.toString();
    });

