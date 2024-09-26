fetch('https://tie.digitraffic.fi/api/weathercam/v1/stations/C04507/data')
.then(function (response) {
    return response.json();
})
.then(function(data) {
    console.log(data); //Tulostaa datan konsoliin tarkistusta varten
    liikennekamera(data); //Käsitellään data liikennekamera-funktiossa
})
.catch(function(error) {
    document.getElementById("vastaus").innerHTML =
    "<p>Tietoja ei pystyät hakemaan</p>" + error;
});

function liikennekamera(data) {
    var teksti="";
    teksti = "<h1>Autolla Tampereella</h1>";
    for (var i=0; i<data.length; i++) {
        teksti = teksti + "<h3>" +data[i].title + "</h3>";
        teksti = teksti + "<p>" + data[i].description + "</p>";
        teksti = teksti + ""
    }
    document.getElementById("vastaus").innerHTML = teksti;
}