// Maxime Faucher
// 12 février 2025
// Modifications au DOM

// Modifier des attributs sur des éléments HTML
let pEntete = document.querySelector('header p'); // Cibler le paragraphe de l'entête (<header>)
// Remplacer le contenu texte de l'élément
pEntete.textContent = "Nouveau SUPER sous-titre";
// Ajouter un attribut (ici le id)
//pEntete.id = "pEntete"; // une façon
pEntete.setAttribute('id', 'pEntete'); // une autre façon, avec .setAttribute(nomAttribut, valeurAttribut)
pEntete.removeAttribute('id');

// Modifications des propriétés CSS
const h1 = document.querySelector('h1'); // on cible notre élément, ici le <h1>
console.log(h1.style); // vous pouvez observer en console l'objet 'style' d'un élément HTML 
h1.style.color = "blue"; // on peut modifier une propriété directement en lui affectant une valeur
h1.style.setProperty('color', '#FF0000'); // ou en utilisant .setproperty(nomPropriete, valeurPropriete)
h1.style.setProperty('border', '1px dashed green');

// Gestion des classes CSS
const pCol1 = document.querySelector('.container .row p'); // on cible le premier <p> (celui de la première colonne)
//console.log(pCol1.classList); // pour inspecter la propriété 'classList' d'un élément HTML
// Ajoutons une classe
pCol1.classList.add('text-success');
// Retirer un classe .remove()
pCol1.classList.remove('text-success');
// Alterner une classe .toggle()
pCol1.classList.toggle('text-success'); // .toggle(uneClasse) => si la classe est dans la liste de l'élément, elle est enlevée. Si elle n'y est pas, elle est ajoutée.
// Remplacer une classe par une autre
pCol1.classList.replace('text-success', 'text-danger');
// Afficher l'attribut class de notre élément
console.log(pCol1.className);

// Créer des éléments HTML (enfin!)
// Étapes
// 1. Créer élément [avec document.createElement(balise)]
// 2. Le modifier selon les besoins [attributs particuliers, contenu, propriétés de styles]
// 3. L'ajouter au DOM à l'endroit souhaité  [avec des méthodes comme .append(), .prepend(), .insertAdjacentElement(), ]
// On utilise la méthode createElement() de l'objet document
let nouveauLI = document.createElement('li');
nouveauLI.textContent = "Élément ordonné 4";
nouveauLI.classList.add("text-warning", 'bg-success');
//document.querySelector('ol').append(nouveauLI); // ajoute à la fin
//document.querySelector('ol').prepend(nouveauLI); // ajoute au début
// Si on avait voulu insérer le li entre le 2e et le 3e
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
document.querySelectorAll('ol li').item(1).insertAdjacentElement('afterend', nouveauLI) // afterend ajoute 'nouveauLI' APRÈS l'élément ciblé, qui est le 2e <li> de la <ol>

// Suppression d'un element
// 1. Cibler l'élément
// 2. Appeler .remove() sur l'élément
// Exemple : retirer le div de la 2e colonne
document.querySelectorAll('.container .col-md-6').item(1).remove();

// Remplacement d'un élément avec .replaceWith()
// Exemple : remplaçons le p dans le footer par un h2
const h2 = document.createElement('h2');
h2.textContent = "Ceci est un élément entête de niveau 2 maintenant";
document.querySelector('footer p').replaceWith(h2);
