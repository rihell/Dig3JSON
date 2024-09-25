// Hae säätiedot Helsingistä
fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=helsinki&units=metric&APPID=314de1b8dabfbace7321a5ff474e27d1')
    .then(function (response) {
        return response.json();
    })
    .then(function (responseJson) {
        saa(responseJson);
    })
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    });

// Hae säätiedot Tampereelta
fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=tampere&units=metric&APPID=314de1b8dabfbace7321a5ff474e27d1')
    .then(function (response) {
        return response.json();
    })
    .then(function (responseJson) {
        saa(responseJson);
    })
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML += "<p>Tietoa ei pystytä hakemaan Tampereen osalta</p>";
    });

// Funktio JSON-datan käsittelyyn
function saa(data) {
    var teksti = ""; // Määritellään muuttuja, johon tulostettava tieto kerätään
    
    // Otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
    teksti += "<h1>" + data.name + "</h1>";

    // Säätilan kuvaus
    teksti += "<p>Sää: " + data.weather[0].description + "</p>";

    // Lämpötila ja tuulen nopeus
    teksti += "<p>Lämpötila: " + data.main.temp + " &deg;C</p>";
    teksti += "<p>Tuulen nopeus: " + data.wind.speed + " m/s</p>";

    // Säätilan kuvakuvan hakeminen
    var kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    teksti += "<p><img src='" + kuva + "' alt='sääkuva' ></p>";

    // teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus").innerHTML += teksti;
}
