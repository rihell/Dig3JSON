// Hae toteutusdata GitHubista
fetch('https://raw.githubusercontent.com/rihell/Dig3JSON/refs/heads/master/Teht%201-2/toteutusdata.json')
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
  var teksti = "<h1>Toteutus: " + data.toteutus.nimi + "</h1>"; //Toteutuksen nimi
  teksti += "<p>Osallistujia: " + data.toteutus.osallistujat.lukumäärä + "</p>"; //Toteutuksen osallistujat
  teksti += "<ul>";
  
  for (var i = 0; i < data.toteutus.osallistujat.nimet.length; i++) {
    teksti += "<li>" + data.toteutus.osallistujat.nimet[i] + "</li>"; //Lista osallistujista
  }
  teksti += "</ul>";

  teksti += "<p>Alkaa: " + new Date(data.toteutus.alkamisAika).toLocaleDateString("fi-FI") + "</p>"; //Kurssin alkamis ajankohta
  teksti += "<p>Päättyy: " + new Date(data.toteutus.loppumisAika).toLocaleDateString("fi-FI") + "</p>"; //Päättymisen ajankohta
  teksti += "<p>Kesto: " + data.toteutus.kestoViikoissa + " viikkoa</p>"; //Toteutuksen kesto viikkoina
  teksti += "<img src='" + data.toteutus.kuva + "' alt='Toteutuksen kuva'>"; //Kuva toteutukseen liittyen
  
  document.getElementById("vastaus").innerHTML = teksti;
}
