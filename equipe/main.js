import { nav } from "/components/nav.js"; // Importation du composant de navigation
import { footer } from "/components/footer"; // Importation du composant de pied de page

// Fonction asynchrone pour créer et afficher l'équipe
async function createTeam() {
  // Crée une URL en utilisant la base et le chemin de l'API
  let url = new URL("http://minisite.sniperz.be/");
  url.pathname = "api/equipe.php";

  // Envoie une requête fetch pour récupérer les données de l'équipe
  const response = await fetch(url);
  const personnel = await response.json();

  // Met à jour le contenu de l'élément avec l'ID "app" avec les informations de l'équipe
  document.querySelector("#app").innerHTML = `
    ${nav}
    <h1>Notre équipe</h1>
    <br>
    <div class="container">
    ${personnel
      .map(
        (person) => `
          <figure>
            <img src="${person.image}" alt="Image de ${person.name}" class="img" />
            <figcaption>${person.name} - ${person.title}</figcaption>
          </figure>
        `
      )
      .join("")}
    </div>
    ${footer}
  `;

  // Ajoute des écouteurs d'événements pour chaque image de l'équipe
  document.querySelectorAll(".img").forEach((box, index, boxes) => {
    box.addEventListener("mouseover", () => {
      // Change les classes des images en fonction de leur position par rapport à l'image survolée
      boxes.forEach((b, i) => {
        let className = i < index ? "prev" : i === index ? "hovered" : "next";
        b.classList.remove("prev", "next", "hovered");
        b.classList.add(className);
      });
    });
    box.addEventListener("mouseout", () => {
      // Supprime les classes ajoutées lorsque la souris quitte l'image
      boxes.forEach((b) => b.classList.remove("prev", "next", "hovered"));
    });
  });
}

// Appelle la fonction pour créer et afficher l'équipe
createTeam();
