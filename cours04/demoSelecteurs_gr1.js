// Auteur:  Maxime Faucher
// Date: 2024-02-11
// Sujet: Démo sur les sélecteurs en JavaScript

/*

Références: https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
            https://developer.mozilla.org/fr/docs/Web/API/Document/getElementsByClassName
            https://developer.mozilla.org/fr/docs/Web/API/Document/getElementsByTagName
            https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
            https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll

*/

/****************************************************************
getElementById('unID') : 
    retourne l'élément (HTMLElement) ayant l'ID 'unID' si 
    l'élément existe, sinon retourne null
****************************************************************/
console.log("\n1. Sélecteurs par ID : getElementById");

// Sélectionne l'élément ayant l'ID 'pied'
// Affiche l'élément sélectionné
const pied = document.getElementById('pied');
console.log(pied);
// Affiche le type et le nom de noeud et le contenu HTML de l'élément sélectionné
console.log('Type de noeud (nodeType)', pied.nodeType);
console.log('Nom de noeud (nodeName)', pied.nodeName);
console.log('Contenu HTML (innerHTML)', pied.innerHTML);
console.log('Contenu HTML (innerHTML)', pied.textContent);
// Sélectionne l'élément ayant l'ID 'inexistant'
// Affiche null
const absent = document.getElementById('inexistant');
if(absent === null)
    console.log("Il n'y a pas d'élément #inexistant dans la page.");
else
    console.log(absent);

/****************************************************************
getElementsByClassName('uneClasse') :
    retourne une collection d'éléments (HTMLCollection) ayant la 
    classe 'uneClasse' si des éléments existent, sinon retourne 
    une collection vide
****************************************************************/
console.log("\n2. Sélecteurs par classe : getElementsByClassName");

// Sélectionne les éléments ayant la classe 'nav-link'
// Affiche la collection d'éléments sélectionnés
const navLinks = document.getElementsByClassName('nav-link');
console.log(navLinks);
// Affiche le nombre d'éléments sélectionnés
console.log("Il y a", navLinks.length, "éléments ayant la classe nav-link");
// Affiche le premier élément sélectionné,
console.log(navLinks[0], "est le premier élément");
console.log(navLinks.item(0), "est le premier élément"); // préférable à navLinks[0] pour éviter les erreurs
// Parcourir les éléments d'une HTMLCollection avec boucle for... of
for(const elm of navLinks) {
    console.log(elm.textContent);
}
// Autre méthode en convertissant la HTMLCollection en tableau avec Array.from()
Array.from(navLinks).forEach(elm => console.log(elm.textContent));
// Sélectionne les éléments ayant la classe 'inexistant'
const elmInexistants = document.getElementsByClassName('inexistant');
console.log("il y a", elmInexistants.length, "elements avec la classe 'inexistant'");

// Sélectionne les éléments ayant les classes 'text-info' et 'text-uppercase'
// l'ordre est sans importance, mais la casse est importante
const elmInfoUppercase = document.getElementsByClassName("text-uppercase text-info ");
// Affiche le premier élément sélectionné
console.log(elmInfoUppercase.item(0));

/****************************************************************
getElementsByTagName('uneBalise') :
    retourne une collection d'éléments de balise 'uneBalise'
    si des éléments existent, sinon retourne une collection vide
****************************************************************/
console.log("\n3. Sélecteurs par balise : getElementByTagName");

// Sélectionner les éléments <a>
const liens = document.getElementsByTagName('a');
console.log("Texte des balises <a> du document");
Array.from(liens).forEach(a => console.log(a.textContent));
// Sélectionne les éléments <head>
const tete = document.getElementsByTagName('head');
console.log(tete);
// Affiche le nombre d'éléments <script>
console.log("Il y a", document.getElementsByTagName('script').length, "balises <script>");

/****************************************************************
querySelector('selecteurCSS') :
    retourne le premier élément correspondant au sélecteur CSS
    si un élément existe, sinon retourne null
****************************************************************/
console.log("\n4. Sélecteur CSS : querySelector");

// Sélectionne le premier élément <p>
// Affiche l'élément sélectionné
const premierP = document.querySelector('p');
console.log(premierP);
// Sélectionne le premier élément <li> du premier <ol>
const premierLiOl = document.querySelector('ol li');
// Affiche le contenu HTML de l'élément sélectionné
console.log(premierLiOl.outerHTML);
// Donne le même résultat que innerHTML, incluant la balise de l'élément même


/****************************************************************
querySelectorAll('selecteurCSS') :
    retourne tous les éléments correspondant au sélecteur CSS sous forme de nodeList
    si des éléments existent, sinon retourne une collection vide
****************************************************************/
console.log("\n5. Sélecteur CSS : querySelectorAll");

// Sélectionne tous les éléments <p>
const tousLesP = document.querySelectorAll('p');
console.log(tousLesP);
// Parcourir les éléments d'une NodeList
// Affiche le texte de chaque élément sélectionné
tousLesP.forEach(p => console.log(p.textContent));

// Sélectionne tous les éléments <li> de tous les <ul>
const tousUlLi = document.querySelectorAll('ul li.text-info');
// Affiche le nombre d'éléments <li> sélectionnés
console.log("Il y a", tousUlLi.length, "<li class='text-info'> dans des <ul>");