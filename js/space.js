document.addEventListener("DOMContentLoaded", function() {
    var arrow = document.querySelector(".arrow-container img");
    var linkList = document.querySelector(".arrow-container .link-list");

    arrow.addEventListener("click", function() {
        if (linkList.style.display === "none") {
            linkList.style.display = "block";
        } else {
            linkList.style.display = "none";
        }
    });
});

ScrollReveal().reveal('#fusee', {
    origin: 'bottom', 
    distance: '100px',
    duration: 1000, 
    delay: 200, 
    easing: 'ease',
    mobile: true,
    reset: false 
});


document.addEventListener('DOMContentLoaded', function () {
    // Initialiser ScrollReveal
    ScrollReveal().reveal('#bonhomme', {
        origin: 'bottom',
        distance: '100px',
        duration: 1000,
        delay: 200,
        easing: 'ease',
        mobile: true,
        reset: false
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Initialiser ScrollReveal
    ScrollReveal().reveal('#wallpi', {
        origin: 'right',
        distance: '100px',
        duration: 1000,
        delay: 200,
        easing: 'ease',
        mobile: true,
        reset: false
    });
});



ScrollReveal().reveal('#bonhhomme', {

});

document.addEventListener("DOMContentLoaded", function() {
    var cotationLink = document.querySelector(".link-list a:first-child");

    cotationLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        
        var sectionCotation = document.getElementById("cotation");
        var sectionCotationRect = sectionCotation.getBoundingClientRect();
        var offsetTop = sectionCotationRect.top + window.pageYOffset;

        window.scrollTo({
            top: offsetTop,
            behavior: "smooth" 
        });
    });
});


    document.addEventListener("DOMContentLoaded", function() {
        var privilegesLink = document.querySelector(".link-list li:nth-child(2) a"); 

        privilegesLink.addEventListener("click", function(event) {
            event.preventDefault(); 
            
            var privilegesSection = document.getElementById("privileges");
            var privilegesSectionRect = privilegesSection.getBoundingClientRect();
            var offsetTop = privilegesSectionRect.top + window.pageYOffset;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        var ressourcesLink = document.querySelector(".link-list li:nth-child(3) a"); // Sélectionne le lien de la troisième balise li dans .link-list
    
        ressourcesLink.addEventListener("click", function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            
            var sectionRessources = document.getElementById("ressources");
            var sectionRessourcesRect = sectionRessources.getBoundingClientRect();
            var offsetTop = sectionRessourcesRect.top + window.pageYOffset;
    
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth" // Fait défiler la page en douceur
            });
        });
    });


    document.addEventListener("DOMContentLoaded", function() {
        var elearningLink = document.querySelector(".link-list li:nth-child(4) a"); // Sélectionne le lien de la troisième balise li dans .link-list
    
        elearningLink.addEventListener("click", function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            
            var sectionelearning = document.getElementById("elearning");
            var sectionelearningRect = sectionelearning.getBoundingClientRect();
            var offsetTop = sectionelearningRect.top + window.pageYOffset;
    
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth" // Fait défiler la page en douceur
            });
        });
    });
    

   



    


    /*PARTIE CAROUSEL*/

    document.addEventListener("DOMContentLoaded", function () {
        const carousel = document.getElementById("carousel");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
    
        const images = [
            { src: "img/woman.jpg", title: "ACCOMPAGNEMENT DES AIDANTS A DOMICILE" },
            { src: "img/01.jpg", title: "ALCOOL, CANNABIS : REPÉRER ET PRENDRE EN CHARGE LES ADDICTIONS" },
            { src: "img/woman2.jpg", title: "ALZHEIMER : DÉPISTER ET PRENDRE EN CHARGE" },
            // Ajoutez les autres images avec leur titre ici
            { src: "img/your_image.jpg", title: "Your Title" }
        ];
    
        let currentIndex = 0;
    
        function updateCarousel() {
            carousel.innerHTML = "";
            for (let i = currentIndex; i < currentIndex + 3; i++) {
                const index = i % images.length;
                const item = createCarouselItem(images[index].src, images[index].title);
                carousel.appendChild(item);
            }
        }
    
        function createCarouselItem(imageSrc, title) {
            const item = document.createElement("div");
            item.classList.add("carousel-item");
    
            const img = document.createElement("img");
            img.src = imageSrc;
            item.appendChild(img);
    
            const titleElement = document.createElement("h3");
            titleElement.textContent = title;
            item.appendChild(titleElement);
    
            return item;
        }
    
        updateCarousel();
    
        function nextSlide() {
            currentIndex = (currentIndex + 3) % images.length;
            updateCarousel();
        }
    
        function prevSlide() {
            currentIndex = (currentIndex - 3 + images.length) % images.length;
            updateCarousel();
        }
    
        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click", prevSlide);
    });
    
    /*FIN PARTIE CAROUSEL*/
