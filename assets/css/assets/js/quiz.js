function verifierReponse() {
    let reponse = document.querySelector('input[name="q1"]:checked');
    let resultat = document.getElementById("resultat");
    
    if (reponse) {
        if (reponse.value === "a") {
            resultat.textContent = "Correct ! Bravo !";
            resultat.style.color = "green";
        } else {
            resultat.textContent = "Incorrect. Réessayez !";
            resultat.style.color = "red";
        }
    } else {
        resultat.textContent = "Veuillez sélectionner une réponse.";
        resultat.style.color = "orange";
    }
}
