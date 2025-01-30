let formulier = document.getElementById("formulier");

let resultatenContainer = document.createElement("div");
resultatenContainer.id = "resultaten"; // Geef het een ID zodat we het later kunnen gebruiken

// Voeg de nieuwe <div> toe aan de container op de pagina
document.getElementsByClassName("container")[0].appendChild(resultatenContainer);

let bestellingen = []; //array aan maken

formulier.onsubmit = function (controleer) {
    controleer.preventDefault();
    let voornaam = document.getElementById("voornaam").value;
    let achternaam = document.getElementById("achternaam").value;
    let aantal = document.getElementById("aantal").value;
    let datum = document.getElementById("datum").value;
    let ticket = document.getElementById("ticket").value;

    if (!voornaam || !achternaam || !aantal || !datum || !ticket) {
        alert("Vul alle velden in.");
        return;
    }

    bestellingen.push(`${voornaam} ${achternaam} - ${aantal} tickets voor ${ticket} op ${datum}`);
    toonBestellingen();
};

function toonBestellingen() {
    resultatenContainer.innerHTML = "<br><h3>Bestelling</h3><br>";
    for (let i = 0; i < bestellingen.length; i++) {
        let p = document.createElement("p");
        p.textContent = bestellingen[i];
        resultatenContainer.appendChild(p);
    }
}