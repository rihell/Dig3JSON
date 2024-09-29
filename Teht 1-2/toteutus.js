// Hae toteutusdata GitHubista
fetch('https://raw.githubusercontent.com/rihell/Digitekniikat-teht-3-JSON/master/toteutusdata.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (toteutusdata) {
    kerroToteutus(toteutusdata);
  })
  .catch(function (error) {
    document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
  });

function kerroToteutus(data) {
  var teksti = "<h1>Toteutus: " + data.toteutus.nimi + "</h1>";
  teksti += "<p>Osallistujia: " + data.toteutus.osallistujat.lukumäärä + "</p>";
  teksti += "<ul>";
  
  for (var i = 0; i < data.toteutus.osallistujat.nimet.length; i++) {
    teksti += "<li>" + data.toteutus.osallistujat.nimet[i] + "</li>";
  }
  teksti += "</ul>";
  
  teksti += "<p>Alkaa: " + new Date(data.toteutus.alkamisAika).toLocaleDateString("fi-FI") + "</p>";
  teksti += "<p>Päättyy: " + new Date(data.toteutus.loppumisAika).toLocaleDateString("fi-FI") + "</p>";
  teksti += "<p>Kesto: " + data.toteutus.kestoViikoissa + " viikkoa</p>";
  teksti += "<img src='" + data.toteutus.kuva + "' alt='Toteutuksen kuva'>";
  
  document.getElementById("vastaus").innerHTML = teksti;
}
