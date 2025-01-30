let formulier = document.getElementById("formulier");

let bestellingen = [];

let resultatenContainer = document.getElementById("resultaten-container");

formulier.onsubmit = function (controle) {

    controle.preventDefault(); // Voorkomt het normale submitgedrag van het formulier

    let voornaam = document.getElementById("voornaam").value;
    let achternaam = document.getElementById("achternaam").value;
    let email = document.getElementById("email").value;
    let aantal = document.getElementById("aantal").value;
    let datum = document.getElementById("datum").value;
    let ticketsoort = document.getElementById("ticket").value;

    if (voornaam == "" || achternaam == "" || email == "" || aantal == "" || datum == "" || ticketsoort == "") {
        alert("vul alle gegevens in");
        return
    }

    bestellingen.push (`${voornaam} ${achternaam} - ${email} heeft ${aantal} ${ticketsoort} ticket op ${datum} bestelt.`);
    toonBestellingen();
}
 
function toonBestellingen() {
    resultatenContainer.innerHTML = "<br><h3>Bestelling</h3><br>";
    for (let i = 0; i < bestellingen.length; i++) {
        let p = document.createElement("p");
        p.textContent = bestellingen[i];
        resultatenContainer.appendChild(p);
    }
}