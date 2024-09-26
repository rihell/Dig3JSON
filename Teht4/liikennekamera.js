fetch('https://tie.digitraffic.fi/api/weathercam/v1/stations/C04507/data')
.then(function (response) {
    return response.json();
})
.then(function(data) {
    console.log("Saapuva data: ", data); // Tulostetaan data tarkistusta varten
    liikennekamera(data); // Käsitellään data liikennekamera-funktiossa
})
.catch(function(error) {
    document.getElementById("vastaus").innerHTML =
    "<p>Tietoja ei pysty hakemaan</p>" + error;
});

function liikennekamera(data) {
    var teksti = "<h1>Autolla Tampereella</h1>";
    
    // Tarkistetaan, että data sisältää presets-taulukon
    if (data && data.presets && Array.isArray(data.presets)) {
        teksti += "<p>Päivitetty: " + data.dataUpdatedTime + "</p>";
        for (var i = 0; i < data.presets.length; i++) {
            teksti += "<h3>Kamera ID: " + data.presets[i].id + "</h3>";
            teksti += "<p>Mitattu aika: " + data.presets[i].measuredTime + "</p>";
        }
    } else {
        teksti += "<p>Ei löydy kameradataa.</p>";
    }
    
    document.getElementById("vastaus").innerHTML = teksti;
}
