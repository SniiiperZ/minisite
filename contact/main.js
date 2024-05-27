import { nav } from "/components/nav.js"; // Importation du composant de navigation
import { footer } from "/components/footer"; // Importation du composant de pied de page

// Fonction pour créer le formulaire
function createForm() {
  // HTML du formulaire, incluant les composants de navigation et de pied de page
  const formHtml = `
    ${nav}
    <form class="retro-form" id="contactForm">
        <label for="name">Nom:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Envoyer</button>
    </form>
    ${footer}
  `;
  // Ajoute le HTML du formulaire à l'élément avec l'ID "app"
  document.querySelector("#app").innerHTML += formHtml;

  // Ajoute un écouteur d'événements pour la soumission du formulaire
  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)

      // Récupère les données du formulaire
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      // Envoie les données du formulaire au serveur via une requête POST
      await fetch("http://minisite.sniperz.be/api/submitContact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data, null, 2),
      });

      // Affiche une alerte pour indiquer que le message a été envoyé
      alert("Message envoyé !");
      e.target.reset(); // Réinitialise le formulaire
    });
}

// Appelle la fonction pour créer le formulaire
createForm();
