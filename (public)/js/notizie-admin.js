var urlParams = new URLSearchParams(window.location.search);
var n1 = urlParams.get('1');
var n2 = urlParams.get('2');
var n3 = urlParams.get('3');
var n4 = urlParams.get('4');
var modifica = urlParams.get('n');

const news = [{
    "titolo": "Hanno raggiunto il mare le tartarughe salvate un mese fa",
    "testo": "Un grande momento di gioia per l'associazione Una Mano al Mare e i suoi volontari. Dopo aver salvato la tartaruga Dolly, che con il tempo è diventata la mascotte della comunità, siamo riusciti a farla tornare in libertà."
},
{
    "titolo": "L'inquinamento aumenta, cosa possiamo fare per fermarlo?",
    "testo": "Che ci interessi o meno l'ambiente, prima o poi lo inizieremo a fare. E prima o poi saremo tutti consapevoli che ogni nostra azione ha un impatto sulla nostra vita e quella del pianeta Terra."
},
{
    "titolo": "L'iniziativa che ha permesso di migliorare le spiagge campane",
    "testo": "L'idea di coinvolgere i cittadini nella cura delle nostre spiagge non è nuova, ma con la nuova veste grafica del sito dell'associazione diventerà sempre più facile. Ecco i risultati che siamo riusciti ad ottenere!"
},
{
    "titolo": "Tartaruga differenziata",
    "testo": "Il nostro team di sommozzatori della zona del salernitano ha scattato questa foto mentre tornavano verso il porto. Questa tartaruga probabilmente potrebbe avere incrociato una busta di plastica mentre perlustrava il fondale marino."
}];

function deleteNews(news_id){
    let text = "La notizia selezionata verrà eliminata, vuoi procedere?";
    if (confirm(text) == true) {
        document.getElementById(news_id).style.display = "none";
        var n = news_id.match(/\d+/)[0];
        urlParams.set(n, "N");
        window.location.search = urlParams.toString();
    } else {
        // do nothing
    }
}

function getImage(imagename){
    var newimg=imagename.replace(/^.*\\/,"");
    $('#display-image').html("<h4>Immagine caricata con successo</h4><h6>" + newimg + "</h6>");
}

if (n1 == "N"){
    document.getElementById("news-1").style.display = "none";
}

if (n2 == "N"){
    document.getElementById("news-2").style.display = "none";
}

if (n3 == "N"){
    document.getElementById("news-3").style.display = "none";
}

if (n4 == "Y"){
    document.getElementById("news-4").style.display = ""; 
}

function setModifica(){
    var titolo = news[modifica - 1].titolo;
    var testo = news[modifica - 1].testo;
    document.getElementById("inputTitle").innerHTML = titolo;
    document.getElementById("inputTesto").innerHTML = testo;
}

setModifica();