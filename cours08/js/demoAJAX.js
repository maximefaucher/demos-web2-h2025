// Auteur:  Maxime Faucher
// Date:    2024-02-01
// Sujet:   Démo sur les requêtes AJAX en JavaScript

/*
Références:     https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest
                https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
                Excellente playlist sur les requêtes AJAX (voir les 3 premiers des 5 vidéos) :
                https://www.youtube.com/playlist?list=PLRD1Niz0lz1sdjsiBsYN6nT1aJQTWvF-a

*/

/*  Exemples : Au clic d'un bouton, nous voulons pouvoir :
*       1. Faire afficher une image (à partir d'un fichier image local);
*       2. Faire afficher un paragraphe de texte (à partir d'un fichier texte local).
*/

// Fonction pour créer une image à partir d'un blob (binary large object)
const creerImage = (blob) => {
    const objetURL = URL.createObjectURL(blob);
    const image = document.createElement('img');
    image.src = objetURL;
    document.body.appendChild(image);
};

// Fonction pour créer un paragraphe à partir d'un texte
const creerParagraphe = (texte) => {
    const p = document.createElement('p');
    p.textContent = texte;
    document.body.appendChild(p);
};

// Fonction qui va effectuer une requête AJAX pour obtenir le contenu d'un fichier
// et appeler une fonction de rappel pour traiter le contenu
const montrerContenu = (method, url, type, callback) => {
    const xhr = new XMLHttpRequest(); // on crée l'objet de requête (étape 1)
    xhr.open(method, url, true); // active la requête (étape 2)
    xhr.responseType = type; // met la propriété responseType à la valeur 'type' reçue en param
    // les valeurs possibles sont 'arraybuffer', 'blob', 'document', 'json', 'text' (ou '')

    // on définit quoi faire pour l'événement 'load' qui survient quand la réponse est reçue (étape 4)
    xhr.addEventListener("load", (evt) => {
        if(xhr.status == 200){ // code HTTP 200 = OK (les codes 2XX sont des 'success')
            // on veut appeler la fonction 'callback' pour qu'elle traite la réponse
            callback(xhr.response);
            
        }
        else{ // autre code que 200, probablement une erreur
            console.error('Erreur de requête : code ' + xhr.status + " (" + xhr.statusText + ")");
        }
    });

    xhr.send(); // on envoie la requête (étape 3)
}

// Événements pour les boutons
document.addEventListener('DOMContentLoaded', () => {

    // au clic du bouton 'image' on souhaite envoyer une requête XHR...
    // 1. avec la méthode GET
    // 2. à l'URL /img/chaton.jpg
    // 3. on veut une réponse de type 'blob' (fichier binaire)
    // 4. on appelle la fonction creerImage() pour taiter la réponse
    document.querySelector('button.img').addEventListener('click', () => {
        montrerContenu('GET', './img/chaton.jpg', 'blob', creerImage);
    });

    // Similairement pour le paragraphe
    document.querySelector('button.p').addEventListener('click', () => {
        montrerContenu('GET', './texte.txt', 'text', creerParagraphe);
    });
});

// Ok, c'est bien beau faire des requêtes sur une image ou du texte en local, 
// mais existe-t-il un format de données qui permet de faire des requêtes AJAX 
// pour obtenir des données plus structurées, comme des objets ou des tableaux?
// 
// Oui, c'est le format JSON (JavaScript Object Notation)!