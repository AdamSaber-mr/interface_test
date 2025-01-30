let schilderijen = [
    "frieda-diego.jpeg", "diego-I.jpeg", "wounded-deer.jpeg",
    "the-frame.jpeg", "henry-ford.jpeg", "self-portrait.jpeg",
    "two-fridas.jpeg", "roots.jpeg", "pitahayas.jpeg", "the-bus.jpeg"
];

let gallery = document.getElementsByClassName("gallery");
let bottomgallery = document.getElementsByClassName("bottom-gallery")

function uploaden() {

    gallery.innerHTML = "";
    bottomgallery.innerHTML = "";

    for (let i = 0; i < schilderijen.length; i++) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = "../media" + schilderijen[i];

        let text = document.createElement("p")
        let bestandnaam = schilderijen[i]
        let title = bestandnaam.replace('.jpeg', '');
        text.textContent = title;

        div.appendChild(img);
        div.appendChild(text);

        if (i < 8) {
            gallery.appendChild(div);
        }
        else {
            bottomgallery.appendChild(div);
        }
    }

}