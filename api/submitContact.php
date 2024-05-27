<?php

// Définit les en-têtes HTTP pour permettre certaines requêtes Cross-Origin (CORS).
header('Access-Control-Allow-Headers: Content-Type, Authorization');
// Autorise toutes les origines à accéder à la ressource (nécessaire pour les requêtes CORS).
header('Access-Control-Allow-Origin: *');
// Définit le type de contenu de la réponse HTTP à JSON.
header('Content-Type: application/json');

// Récupère les données JSON envoyées dans le corps de la requête HTTP et les décode en un tableau associatif PHP.
$data = json_decode(file_get_contents('php://input'), true);

// Lit le contenu du fichier "contact.json" situé dans le répertoire "storage" et le décode en un tableau associatif PHP.
$contacts = json_decode(file_get_contents('../storage/contact.json'), true);

// Ajoute les nouvelles données (contenues dans $data) au tableau existant de contacts.
$contacts[] = $data;

// Encode le tableau des contacts mis à jour en JSON et écrit le résultat dans le fichier "contact.json".
file_put_contents('../storage/contact.json', json_encode($contacts, JSON_PRETTY_PRINT));

// Renvoie une réponse JSON indiquant que l'opération a réussi.
echo json_encode(['success' => true]);

?>