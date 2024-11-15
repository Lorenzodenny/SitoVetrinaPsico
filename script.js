document.addEventListener('DOMContentLoaded', () => {
    console.log("Benvenuti nel sito della psicologa!");
});


document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".about-alessia");
    const icons = ["fas fa-heart", "fas fa-leaf", "fas fa-star", "fas fa-snowflake", "fas fa-feather"]; // Aggiungi altre icone qui

    // Genera e aggiungi le icone di neve
    function createSnowflakeIcon() {
        const icon = document.createElement("i");
        icon.className = icons[Math.floor(Math.random() * icons.length)] + " icon-snowflake";
        icon.style.left = Math.random() * 100 + "vw"; // Posizione orizzontale casuale
        icon.style.animationDuration = 15 + Math.random() * 5 + "s"; // Durata casuale dell'animazione
        icon.style.fontSize = (15 + Math.random() * 15) + "px"; // Dimensione casuale
        container.appendChild(icon);

        // Rimuovi l'icona quando l'animazione termina
        icon.addEventListener("animationend", () => {
            icon.remove();
        });
    }

    // Crea una nuova icona di neve ogni 500ms
    setInterval(createSnowflakeIcon, 500);
});
