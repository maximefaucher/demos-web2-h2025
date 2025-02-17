// Auteur   : Maxime Faucher
// Date     : 16 février 2025
// Sujet    : Les attributs 'data-*' (datasets) en JavaScript et les écouteurs d'événements (event listeners)


// LES DATASETS en JavaScript permettent de manipuler facilement des attributs 
// personnalisés data-* sur les éléments HTML. Ils offrent une solution simple 
// et efficace pour stocker et récupérer des données directement dans le HTML 
// sans utiliser de variables JavaScript globales ou des structures plus complexes 
// comme les objets JSON.
// 
// Dans le HTML, on utlise la notation en minuscules avec des tirets
// <button id="btn" data-user-id="123" data-role="admin">Cliquez-moi</button>
// 
// Dans le JS, on utlise la notation camelCase à partir de la propriété .dataset de l'élément
// document.getElementById('btn).dataset.userId contient "123"
// document.getElementById('btn).dataset.role contient "admin"
// 


// SYNTAXE DE DÉCLARATION D'UN ÉCOUTEUR D'ÉVÉNEMENT SUR UN ÉLÉMENT
//      element.addEventListener('typeEvenement', callback (fonction/code), options (objet));
// 
// 


// Exemple d'écouteur d'événement : lorsque la propriété readyState
// de l'objet document change, le code suivant est exécuté
document.addEventListener("readystatechange", () => {
    console.log("État du document :", document.readyState);
    if (document.readyState === "interactive") {
        console.log("Le DOM est prêt !");
    }
    if (document.readyState === "complete") {
        console.log("Tout est chargé !");
    }
});


// Fonctions externes à rattacher aux eventListeners
const augmenterCompteur = (evt) => {
    // Lorsqu'on lie une fonction à un événement, le param est l'événement
    console.log(evt);
    // on peut récupérer l'élément ciblé par l'événement avec evt.target
    console.log(evt.target);
    // Ainsi, on peut récupérer des infos de son dataset! 
    let clics = parseInt(evt.target.dataset.nbClics);
    clics++;
    clickCounterBtn.dataset.nbClics = clics;
    clickCounterBtn.textContent = `Cliqué ${clics} fois`;
};


// Bonne pratique : cibler des éléments et y rattacher des événements
// suite à l'événement DOMContentLoaded de l'objet document : quand 
document.addEventListener("DOMContentLoaded", () => {
    
    const card = document.getElementById("infoCard");
    const updateCardBtn = document.getElementById("updateCardBtn");
    const clickCounterBtn = document.getElementById("clickCounterBtn");

    updateCardBtn.addEventListener("click", () => {
        const newTitle = "Titre Mis à Jour";
        const newContent = "Voici le nouveau contenu de la carte après mise à jour.";
        
        card.dataset.titre = newTitle;
        card.dataset.contenu = newContent;
        
        card.querySelector(".card-title").innerText = newTitle;
        card.querySelector(".card-text").innerText = newContent;
    });
    
    clickCounterBtn.addEventListener("click", augmenterCompteur);


});
