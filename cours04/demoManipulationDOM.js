//const ul = document.getElementsByClassName("container container-fluid mt-3").item(0).getElementsByTagName('ul').item(0);
const ul = document.querySelector('div.container.container-fluid.mt-3 ul');
console.log(ul);
let newOl = document.createElement('ol');
let newLi = document.createElement('li');
newOl.append(newLi);
ul.replaceWith(newOl);
newLi.style.setProperty('border', '2px solid red');
newLi.style.setProperty('color', 'red');
newLi.textContent = "Nouvel élément <li>";

// 1. Sélection
// 2. Modification (contenu existant)
// 3. Manipulation des attributs HTML
// 4. Gestion des classes CSS
// 5. Création et suppression d'éléments
// 6. Gestion des événements