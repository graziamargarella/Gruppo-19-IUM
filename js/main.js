const apiKey = 'pk.eyJ1IjoiZ21hcmdhcmVsbGEiLCJhIjoiY2tyMGV5Mmp0MWJ2ZzJ1cGxxOW52eWphZCJ9.UGW11aZJbVp8bZwcqkU4JQ';
// inizializzazione mappa
const mymap = L.map('map').setView([40.613952441166596,14.85626220703125], 9);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

// definizione icone personalizzate
var LeafletIcon = L.Icon.extend({
    options: {
        iconSize: [27,36],
    }
});

var greenIcon = new LeafletIcon({iconUrl: '../icone/pin-verde.png'}),
    redIcon = new LeafletIcon({iconUrl: '../icone/pin-rosso.png'}),
    blackIcon = new LeafletIcon({iconUrl: '../icone/pin.png'});

// aggiunta marker
var arrayCoords = [
    [40.72397, 13.958988], 
    [40.665275, 14.717287], 
    [40.761552, 14.029198], 
    [40.57796, 14.341965], 
    [40.637387, 14.82811], 
    [40.337089, 14.970245],
    [40.299527, 14.947286],
    [40.020218, 15.319061],
    [40.945417, 14.004264],
    [40.174152, 15.08852],
    [40.103286, 15.229282],
    [41.084915, 13.897791],
    [40.613952, 14.543839]
];

arrayCoords.forEach(
    (entry) => {
        L.marker(entry, {icon:blackIcon}).addTo(mymap);
    }
);



// evento onClick con coordinate
var popupLatLng = L.popup();

function onMapClick(e) {
    popupLatLng
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);