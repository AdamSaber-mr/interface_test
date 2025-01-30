
    let paintings = [
        { src: "../media/frieda-diego.jpeg", title: "Frieda and Diego Rivera" },
        { src: "../media/diego-I.jpeg", title: "Diego And I" },
        { src: "../media/wounded-deer.jpeg", title: "The Wounded Deer" },
        { src: "../media/the-frame.jpeg", title: "The Frame" },
        { src: "../media/henry-ford.jpeg", title: "Henry Ford Hospital" },
        { src: "../media/self-portrait.jpeg", title: "Self-Portrait with Thorn Necklace and Hummingbird" },
        { src: "../media/two-fridas.jpeg", title: "The Two Fridas" },
        { src: "../media/roots.jpeg", title: "Roots" },
        { src: "../media/pitahayas.jpeg", title: "Pitahayas" },
        { src: "../media/the-bus.jpeg", title: "The Bus" }
    ];

    let gallery = document.querySelector(".gallery");
    let bottomGallery = document.querySelector(".bottom-gallery");
    
    function renderGallery() {
        gallery.innerHTML = "";
        bottomGallery.innerHTML = "";
        
        for (let i = 0; i < paintings.length; i++) {
            let item = document.createElement("div");
            item.className = "gallery-item";
            
            let img = document.createElement("img");
            img.src = paintings[i].src;
            img.alt = paintings[i].title;
            
            let caption = document.createElement("p");
            caption.textContent = paintings[i].title;
            
            item.appendChild(img);
            item.appendChild(caption);
            
            if (i < 8) {
                gallery.appendChild(item);
            } else {
                bottomGallery.appendChild(item);
            }
        }
    }

    renderGallery();