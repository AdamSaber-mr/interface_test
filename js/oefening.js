let formulier = document.getElementById("formulier");

let bestellingen = "";

let resultatenContainer = document.createElement("div");
document.getElementsByClassName("container").appendChild(resultatenContainer);

formulier.onsubmit = function (controle) {

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

    bestellingen.push (`${voornaam} ${achternaam} - ${email} heeft ${aantal} ${ticketsoort} op ${datum} bestelt.`);
    toonBestellingen();
}
 
function toonBestellingen() {

}