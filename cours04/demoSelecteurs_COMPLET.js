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

const elmId1 = document.getElementById('pied'); // Sélectionne l'élément ayant l'ID 'pied'
console.log(elmId1); // Affiche l'élément sélectionné
console.log(elmId1.nodeType, elmId1.nodeName, elmId1.outerHTML); // Affiche le type, le nom et le contenu HTML de l'élément sélectionné

const elmId2 = document.getElementById('inexistant'); // Sélectionne l'élément ayant l'ID 'inexistant'
console.log(elmId2); // Affiche null


/****************************************************************
getElementsByClassName('uneClasse') :
    retourne une collection d'éléments (HTMLCollection) ayant la 
    classe 'uneClasse' si des éléments existent, sinon retourne 
    une collection vide
****************************************************************/
console.log("\n2. Sélecteurs par classe : getElementsByClassName");

const elmsClasse1 = document.getElementsByClassName('nav-link'); // Sélectionne les éléments ayant la classe 'nav-link'
console.log(elmsClasse1); // Affiche la collection d'éléments sélectionnés
console.log(elmsClasse1.length); // Affiche le nombre d'éléments sélectionnés
console.log(elmsClasse1.item(0)); // Affiche le premier élément sélectionné,
                                  // préférable à elmsClasse1[0] pour éviter les erreurs
// Parcourir les éléments d'une HTMLCollection avec boucle for... of
for (let item of elmsClasse1) {
    console.log(item); // Affiche chaque élément sélectionné
}
// Autre méthode en convertissant la HTMLCollection en tableau avec Array.from()
Array.from(elmsClasse1).forEach(element => console.log(element));

// Sélectionne les éléments ayant la classe 'inexistant'
const elmsClasse2 = document.getElementsByClassName('inexistant');
if (elmsClasse2.length === 0) {
    console.log("Aucun élément trouvé avec la classe 'inexistant'");
}

// Sélectionne les éléments ayant les classes 'text-info' et 'text-uppercase'
const elmsClasse3 = document.getElementsByClassName('text-uppercase text-info'); // ordre sans importance
                                                                                 // mais la casse est importante
console.log(elmsClasse3[0]); // Affiche le premier élément sélectionné


/****************************************************************
getElementsByTagName('uneBalise') :
    retourne une collection d'éléments de balise 'uneBalise'
    si des éléments existent, sinon retourne une collection vide
****************************************************************/
console.log("\n3. Sélecteurs par balise : getElementByTagName");

// Sélectionner les éléments <a>
const elmsBalise1 = document.getElementsByTagName('a');
for (let a of elmsBalise1) {
    console.log(a.textContent); // Affiche le texte de chaque élément sélectionné
}

const elmsBalise2 = document.getElementsByTagName('script'); // Sélectionne les éléments <head>
console.log(elmsBalise2.length); // Affiche le nombre d'éléments <script>


/****************************************************************
querySelector('selecteurCSS') :
    retourne le premier élément correspondant au sélecteur CSS
    si un élément existe, sinon retourne null
****************************************************************/
console.log("\n4. Sélecteur CSS : querySelector");

const elmCSS1 = document.querySelector('p'); // Sélectionne le premier élément <p>
console.log(elmCSS1); // Affiche l'élément sélectionné

const elmCSS2 = document.querySelector('ol li'); // Sélectionne le premier élément <li> du premier <ol>
console.log(elmCSS2.innerHTML); // Affiche le contenu HTML de l'élément sélectionné
console.log(elmCSS2.textContent); // Donne le même résultat que innerHTML, car le li ne contient pas de balises HTML


/****************************************************************
querySelectorAll('selecteurCSS') :
    retourne tous les éléments correspondant au sélecteur CSS
    si des éléments existent, sinon retourne une collection vide
****************************************************************/
console.log("\n5. Sélecteur CSS : querySelectorAll");

const elmsCSS1 = document.querySelectorAll('p'); // Sélectionne tous les éléments <p>
// Parcourir les éléments d'une NodeList
Array.from(elmsCSS1).forEach(elm => console.log(elm.textContent, elm.outerHTML)); 

const elmsCSS2 = document.querySelectorAll('ul li'); // Sélectionne tous les éléments <li> de tous les <ul>
console.log(elmsCSS2.length); // Affiche le nombre d'éléments <li> sélectionnés