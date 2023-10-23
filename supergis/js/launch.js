document.addEventListener("DOMContentLoaded", () => {
    const pointTable = document.getElementById("pointTable").getElementsByTagName('tbody')[0];
    fetch("./geopoint.json")
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
        .catch(error => console.error("Error: ", error));
});

document.addEventListener("DOMContentLoaded", () => {
    const pointTable = document.getElementById("territoryTable").getElementsByTagName('tbody')[0];
    fetch("./geoterritory.json")
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
        .catch(error => console.error("Error: ", error));
});

document.addEventListener("DOMContentLoaded", () => {
    const pointTable = document.getElementById("lineTable").getElementsByTagName('tbody')[0];
    fetch("./geoline.json")
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
        .catch(error => console.error("Error: ", error));
});