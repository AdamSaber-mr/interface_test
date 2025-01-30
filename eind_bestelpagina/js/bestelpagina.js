let ticketTypes = ["volwassen", "kind", "student", "senior"];
let ticketPrijs = [15, 15, 15, 15];

function ticketPrijsBerekenen(ticketType) {
    let prijs = 0;

    for (let i = 0; i < ticketTypes.length; i++) {
        if (ticketTypes[i] === ticketType) { 
            prijs = ticketPrijs[i];
            break;
        }
    }

    return prijs;
}

function resultaat(aantal, totaalBedrag) {
    let resultaatContainer = document.getElementById("resultaten-container");

    let bedanktBericht = document.createElement("h3");
    bedanktBericht.textContent = "Bedankt voor uw bestelling!";

    let aantalBericht = document.createElement("p");
    aantalBericht.textContent = `Je hebt ${aantal} tickets gereserveerd`;

    let totaalBericht = document.createElement("p");
    totaalBericht.textContent = `Het totaal bedrag voor uw bestelling is €${totaalBedrag}`;

    resultaatContainer.appendChild(bedanktBericht);
    resultaatContainer.appendChild(aantalBericht);
    resultaatContainer.appendChild(totaalBericht);
}

function verwerkFormulier(event) {

    event.preventDefault(); // Voorkom dat het formulier wordt verzonden

    let aantal = parseInt(document.getElementById("aantal").value);
    let ticketType = document.getElementById("ticket").value;
    let prijsPerTicket = ticketPrijsBerekenen(ticketType); 

    let kortingskaart = document.getElementById("kortingskaart").checked;

    if (kortingskaart) {
        prijsPerTicket = 10;
    }

    let totaalBedrag = aantal * prijsPerTicket;

    document.getElementById("formulier").style.display = "none";

    resultaat(aantal, totaalBedrag);
}
