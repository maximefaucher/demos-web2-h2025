// Auteur:  Maxime Faucher
// Date: 2024-02-11
// Sujet: Démo sur l'objet document en JavaScript

/*

Références: 1. https://developer.mozilla.org/fr/docs/Web/API/Document

Lorsqu'une page web est chargée dans un navigateur, le navigateur crée un objet 
document qui représente le document lui-même. Le document est un objet 
principalement utilisé pour accéder aux éléments de la page web. Il est 
également possible de modifier le contenu de la page web en utilisant les
propriétés et méthodes de l'objet document.

*/


console.log("\n1. Accès à l'objet document");
// Affiche le contenu HTML de l'objet document
console.dir(document);

console.log("\n2. Accès à des propriétés de l'objet document");
// Affiche l'URL de la page
console.log("URL de la page", document.URL);
console.log("URL de la page", document['URL']);
// Affiche le titre de la page
console.log(document.title);
//document.title = "Salut"; // modifier
// Affiche le contenu du corps de la page
console.dir(document.body);
// Affiche le contenu de l'en-tête de la page
console.dir(document.head);
// Affiche le type de document
console.log(document.doctype);
// Affiche les éléments enfants de la page, dans ce cas, la balise html
console.log(document.children);

console.log("\n3. Accès à des méthodes de l'objet document");
// Ouvre un nouvel onglet avec l'URL spécifié (dans la même fenêtre de navigateur)
// window.open('https://google.ca', '_blank');
// Ouvre une nouvelle fenêtre et y crée un document
//let nouvelleFenetre = document.open('_blank', '', 'rel=noopener');
// Écrit dans le nouveau document ouvert
//nouvelleFenetre.document.write();
// Écrit dans le document actuel
document.write('<p>Bonjour le monde!</p>');