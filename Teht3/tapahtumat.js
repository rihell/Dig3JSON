fetch('https://api.visittampere.com/api/v1/visittampere/article/all/?category=amusement_park&format=json&lang=fi')
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
    var teksti="";
    teksti = "<h1>Tampereella tapahtuu</h1>";
    for (var i = 0; i < data.length; i++) {
        teksti = teksti + "<h3>" + data[i].title + "</h3>"; //Otsikko
        teksti = teksti + "<p>" + data[i].description + "</p>"; //Kuvaus
        teksti = teksti + "<p> <a href=" + data[i].url + ">" + data[i].url + "</a></p>"; //Linkit
    }
    document.getElementById("vastaus").innerHTML = teksti;
}
