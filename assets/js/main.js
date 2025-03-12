document.addEventListener("DOMContentLoaded", function() {
    console.log("Le site est prêt !");

    // Exemple : Ajout d'un effet de survol au menu
    let navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.color = "#27ae60";
        });
        link.addEventListener("mouseout", function() {
            this.style.color = "white";
        });
    });
});
