// Fonction pour ouvrir le modal et afficher le contenu spécifique à chaque certification
function openModal(cert) {
    var modal = document.getElementById("modal");
    var modalBody = document.getElementById("modal-body");

    // Ajout des contenus spécifiques à chaque certification avec gestion de la taille d'image
    if (cert === 'ccna1') {
        modalBody.innerHTML = `
            <img src="ccna1.png" alt="CCNA 1 Badge" class="modal-img">
            <h3>CCNA 1 – Introduction aux Réseaux</h3>
            <p>Ce module me permet d'acquérir une compréhension fondamentale des réseaux informatiques. Il couvre les bases du routage et de la commutation, ainsi que la gestion des adresses IP et les protocoles de communication.</p>
        `;
    } else if (cert === 'ccna2') {
        modalBody.innerHTML = `
            <img src="ccna2.png" alt="CCNA 2 Badge" class="modal-img">
            <h3>CCNA 2 – Switching, Routing & Wireless</h3>
            <p>Le CCNA 2 approfondit les concepts de routage et de commutation, et m'a permis de me familiariser avec les configurations des VLAN, des protocoles de routage comme OSPF et EIGRP, ainsi que l'intégration des réseaux sans fil.</p>
        `;
    } else if (cert === 'cyber') {
        modalBody.innerHTML = `
            <img src="intro_cyber.png" alt="Cyber Essentials Badge" class="modal-img">
            <h3>Cybersecurity Essentials</h3>
            <p>Cette certification m’a permis de renforcer mes compétences sur les concepts clés de la cybersécurité, incluant la gestion des vulnérabilités, les bonnes pratiques pour la sécurité des systèmes et la protection des données sensibles.</p>
        `;
    }

    modal.style.display = "block"; // Afficher le modal
}

// Fonction pour fermer le modal
function closeModal() {
    document.getElementById("modal").style.display = "none"; // Cacher le modal
}

// Fermeture du modal lorsqu'on clique en dehors de la fenêtre
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
