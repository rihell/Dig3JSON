fetch('https://api.visittampere.com/api/v1/visittampere/event/?format=json&limit=10')
.then(function (response) {
    return response.json();  // Muunnetaan vastaus JSON-muotoon
})
.then(function (data) {
    console.log(data);  // Tulostaa datan konsoliin tarkistusta varten
    tapahtumat(data);   // Käsitellään data tapahtumat-funktiossa
})
.catch(function (error) {
    document.getElementById("vastaus").innerHTML =
    "<p>Tietoja ei pystytä hakemaan</p> " + error;
});

function tapahtumat(data) {
    var teksti = "<h1>Tampereella tapahtuu</h1>";
    for (var i = 0; i < data.length; i++) {
        // Tarkistetaan onko tapahtuman nimi ja kuvaus olemassa, ja näytetään ne
        var nimi = data[i].name && data[i].name.fi ? data[i].name.fi : "Ei nimeä saatavilla";
        var kuvaus = data[i].description && data[i].description.intro ? data[i].description.intro : "Ei kuvausta saatavilla";
        var linkki = data[i].info_url ? data[i].info_url : "#";

        teksti += "<h3>" + nimi + "</h3>";
        teksti += "<p>" + kuvaus + "</p>";
        teksti += "<p><a href='" + linkki + "'>Lisätiedot</a></p>";
    }
    document.getElementById("vastaus").innerHTML = teksti;  // Tulostetaan data sivulle
}
