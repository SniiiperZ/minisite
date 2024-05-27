import { nav } from "/components/nav.js"; // Importe le composant 'nav' depuis le fichier 'nav.js' dans le dossier 'components'
import { footer } from "/components/footer.js"; // Importe le composant 'footer' depuis le fichier 'footer.js' dans le dossier 'components'

async function createProduct() {
  // Déclare une fonction asynchrone nommée 'createProduct'
  let url = new URL("http://minisite.sniperz.be/"); // Crée un nouvel objet URL
  url.pathname = "api/produit.php"; // Définit le chemin d'accès de l'URL pour pointer vers 'api/produit.php'
  const response = await fetch(url); // Utilise la fonction 'fetch' pour récupérer les données depuis l'URL spécifiée, et attend que la promesse soit résolue
  const categories = await response.json(); // Convertit la réponse en JSON, et attend que la promesse soit résolue

  // Utilise la méthode 'querySelector' pour sélectionner l'élément avec l'ID 'app', et définit son contenu HTML
  document.querySelector("#app").innerHTML = `
    ${nav}
    <h1>Nos croquettes</h1>
    <div class="container">
    ${categories["croquettes"] // Accède à la catégorie 'croquettes' dans les données récupérées
      // Utilise la méthode 'map' pour créer un nouveau tableau avec les résultats de l'appel d'une fonction pour chaque élément du tableau
      .map(
        (croquettes) => `
            <figure>
        <img src="${croquettes.image}" alt="Image de ${croquettes.name}" class="img" />
        <figcaption>${croquettes.name} <br> ${croquettes.price}</figcaption>
      </figure>
            `
      )
      // Convertit le tableau en une chaîne de caractères
      .join("")}
      </div>
      <h1>Nos jouets</h1>
      <div class="container">
    ${categories["jouets"] // Accède à la catégorie 'jouets' dans les données récupérées
      // Utilise la méthode 'map' pour créer un nouveau tableau avec les résultats de l'appel d'une fonction pour chaque élément du tableau
      .map(
        (jouets) => `
            <figure>
        <img src="${jouets.image}" alt="Image de ${jouets.name}" class="img" />
        <figcaption>${jouets.name} <br> ${jouets.price}</figcaption>
      </figure>
            `
      )
      // Convertit le tableau en une chaîne de caractères
      .join("")}
      </div>
      <h1>Nos lits</h1>
      <div class="container">
    ${categories["lits"] // Accède à la catégorie 'lits' dans les données récupérées
      // Utilise la méthode 'map' pour créer un nouveau tableau avec les résultats de l'appel d'une fonction pour chaque élément du tableau
      .map(
        (lits) => `
            <figure>
        <img src="${lits.image}" alt="Image de ${lits.name}" class="img" />
        <figcaption>${lits.name} <br> ${lits.price}</figcaption>
      </figure>
            `
      )
      // Convertit le tableau en une chaîne de caractères
      .join("")}
      </div>
    ${footer}
  `;
}

createProduct(); // Appelle la fonction 'createProduct'
