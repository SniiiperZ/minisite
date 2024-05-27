<?php

// Définit les en-têtes HTTP pour permettre certaines requêtes Cross-Origin (CORS).
header('Access-Control-Allow-Headers: Content-Type, Authorization');
// Autorise toutes les origines à accéder à la ressource (nécessaire pour les requêtes CORS).
header('Access-Control-Allow-Origin: *');
// Définit le type de contenu de la réponse HTTP à JSON.
header('Content-Type: application/json');

// Lit le contenu du fichier "produits.json" situé dans le répertoire "storage" et l'affiche.
echo (file_get_contents("../storage/produits.json"));
?>