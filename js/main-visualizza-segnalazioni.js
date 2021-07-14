const apiKey = 'pk.eyJ1IjoiZ21hcmdhcmVsbGEiLCJhIjoiY2tyMGV5Mmp0MWJ2ZzJ1cGxxOW52eWphZCJ9.UGW11aZJbVp8bZwcqkU4JQ';
// inizializzazione mappa
const mymap = L.map('map').setView([40.613952441166596,14.85626220703125], 8);

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

class Segnalazione {
    constructor(numero, titolo, descrizione, invio, luogo, coordinate, tipologia, inviatoDa, image){
        this.numero = numero;
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.invio = invio;
        this.luogo = ""+luogo;
        this.coordinate = coordinate;
        this.tipologia = tipologia;
        this.inviatoDa = inviatoDa;
        this.risolto = false;
        this.risoltoDa = null;
        this.risoltoData = null;
        this.image = image;
    }

    risolviSegnalazione(risoltoDa){
        this.risolto = true;
        this.risoltoDa = risoltoDa;
        var oggi = new Date();
        this.risoltoData = oggi.getDate() + "/" + (oggi.getMonth()+1) + "/" + oggi.getFullYear();
    }
}

var segnalazione1 = new Segnalazione(1,"Ho trovato molte bottiglie", "Ne ho raccolta qualcuna ma sono comunque rimaste molte bottiglie in questa zona.", "22/06/2021", "Accesso Spiaggia Libera", [40.72397, 13.958988], ["Plastica"], "Maria", ["foto-segnalazione1.1.png" , "foto-segnalazione1.2.png"]);
var segnalazione2 = new Segnalazione(2, "Plastica e altri rifiuti", "Ritrovati rifiuti vari, raccolti solo in parte. Visti scaricare da un gruppo di persone che non sono riuscito a fotografare in tempo.", "21/06/2021", "Spiaggia Castello", [40.665275, 14.717287], ["Plastica", "Altro"], "Gianluca", ["foto-segnalazione2.1.png" , "foto-segnalazione2.2.png"]);
var segnalazione3 = new Segnalazione(3,"Rete da pesca incustodita","Rete da pesca in mare, vicinissima alla spiaggia", "21/06/2021", "Spiaggia Blu", [40.761552, 14.029198], ["Plastica", "Rifiuti Speciali"],"Gaia",["foto-segnalazione3.1.png" , "foto-segnalazione3.2.png"]);
var segnalazione4 = new Segnalazione(4,"Macchie non identificate","Non sono sicuro di cosa siano, ma sembrano di olio o detersivi.","15/07/2021","Spiaggia Blu", [40.57796, 14.341965],["Rifiuti speciali","Altro"], "Marco", ["foto-segnalazione4.1.png" , "foto-segnalazione4.2.png"]);
var segnalazione5 = new Segnalazione(5,"Pneumatico nell'erba","Poco lontano dalla spiaggia, ritrovato uno pneumatico. Non saprei come smaltirlo.","18/06/2021","Accesso Spiaggia Libera",[40.637387, 14.82811],["Plastica"],"Giorgio",["foto-segnalazione5.1.png" , "foto-segnalazione5.2.png"]);
var segnalazione6 = new Segnalazione(6, "Vari rifiuti sulla spiaggia, molti gabbiani","C'erano tantissimi gabbiani attirati dall'immondizia che ci hanno importunato tutto il tempo.", "22/06/2021", "Spiaggia Libera", [40.337089, 14.970245], ["Plastica", "Altro"],"Franca",["foto-segnalazione6.1.png" , "foto-segnalazione6.2.png"]);
var segnalazione7 = new Segnalazione(7, "Abbiamo raccolto gran parte dei rifiuti della spiaggia","Abbiamo raccolto la maggior parte dei rifiuti, c'è bisogno di smaltirli.", "22/06/2021","Lido Sirena", [40.299527, 14.947286], ["Plastica"], "Josè",   ["foto-segnalazione7.1.png" , "foto-segnalazione7.2.png"]);
var segnalazione8 = new Segnalazione(8, "Su uno scoglio ho trovato rifiuti plastici", "Non molto lontano dalla riva ma su uno scoglio c'erano questi rifiuti che non sapevo come recuperare.", "14/07/2021", "Spiaggia Blu", [40.020218, 15.319061], ["Plastica"], "Mirko",   ["foto-segnalazione8.1.png" , "foto-segnalazione8.2.png"]);
var segnalazione9 = new Segnalazione(9, "Ho trovato molte bottiglie", "Ne ho raccolta qualcuna ma sono comunque rimaste molte bottiglie in questa zona.", "22/06/2021", "Mare Azzurro",[40.945417, 14.004264],["Plastica"],"Maria", ["foto-segnalazione9.1.png" , "foto-segnalazione9.2.png"]);
var segnalazione10 = new Segnalazione(10, "Il Covid affligge anche le spiagge", "Come prevedibile, la spiaggia è piena di mascherine e guanti trasportati dal fiume.","22/06/2021", "Spiaggia Libera", [40.174152, 15.08852], ["Plastica", "Rifiuti Speciali"], "Giacomo", ["foto-segnalazione10.1.png" , "foto-segnalazione10.2.png"]);

var segnalazioni = [segnalazione1, segnalazione2, segnalazione3, segnalazione4, segnalazione5, segnalazione6, segnalazione7, segnalazione8, segnalazione9, segnalazione10];
var arrayCoords = [];
for (var i = 0; i <10; i++) {
    arrayCoords[i] = segnalazioni[i].coordinate;
}

arrayCoords.forEach(
    (entry) => {
        marker = L.marker(entry, {icon:blackIcon}).addTo(mymap);
    }
);

$(document).ready(function(){
    $.each(segnalazioni, function (i) {
        var templateString = '<div class="card mb-3"><div class="row mt-2 ml-1 mr-1"><div class="col"><img class="mt-2" src="../img/foto_segnalazioni/'+segnalazioni[i].image[0]+'"></div><div class="col"><h5>'+segnalazioni[i].titolo+'</h5><p style="font-size:13px">'+ segnalazioni[i].descrizione +'</p><div class="row"><p class="card-text col-6"><img src="../icone/clock.png" alt="icona per indicare quando è stata inviata la segnalazione"><small class="text-muted">'+ segnalazioni[i].invio+'</small></p><p class="card-text col-6"><img id="icona-map" src="../icone/map.png" alt="icona per indicare il luogo"><small class="text-muted">'+ segnalazioni[i].luogo+'</small></p></div></div></div><button class="bottone btnDettagli"  onclick="dettagli('+ segnalazioni[i].numero+')"><h5>Dettagli</h5></button></div>';
        $('#card-container').append(templateString);
    })
});

function dettagli(x){
    console.log(segnalazioni[x-1]);
}

var clickedMarker;

function clickFeature(e) {
    if(clickedMarker) {
          clickedMarker.setIcon(redIcon);
    }
    var layer = e.target;
    e.target.setIcon(blackIcon);
    clickedMarker = e.target;

    info.update(layer.feature.properties);
}

mymap.on('click', clickFeature);


/*
// evento onClick con coordinate
var popupLatLng = L.popup();

function onMapClick(e) {
    popupLatLng
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);*/