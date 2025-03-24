// Auteur:  Maxime Faucher
// Date:    2024-02-01
// Sujet:   Démo sur l'API Fetch et les APIs REST en JavaScript

/*
Références:     https://developer.mozilla.org/fr/docs/Web/API/Fetch_API
                https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
                https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function
                https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Promises
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

*/

// Le conteneur des 'cards' des pays
const divPays = document.getElementById('divPays');
// Requête pour récupérer les données
const urlRequetePays = "https://restcountries.com/v3.1/all?fields=capital,flags,name,continents,area,population,maps";


// Fonction asynchrone (mot clé async) pour récupérer les données des pays
const fonctionAsynchrone = async () => {
    
    console.log("Avant la requête async / await");
    
    try {
        // On utilise la fonction fetch pour faire la requête avec await
        

        console.log("Réponse reçue");
        
        // On récupère les données en format JSON (affecter à la variable pays le résultat de cette opération)
        

        console.log("Données récupérées");

        // On affiche les cartes en passant les données récupérées à notre fonction
        afficherCartes(pays)
        
        console.log("Fin de l'exécution");

    } catch (erreur) {
        console.error(erreur);
    }
};

// TODO : reprendre le code ci-dessus et le modifier pour utiliser le chaînage de promesses 
// dans une fonction nommée fonctionPromesses



// Écouteurs d'événements sur DOMContentLoaded (un par fonction)


// -----------------------------------------------------------------------------------------------------------

// Fonction pour afficher les cartes dans la page (dans le divPays)
function afficherCartes(pays) {
    // Modèle de carte
    //`<div class="card col-sm-12 col-md-6 col-lg-3 p-0">
    //      <div class="card-header">${p.continents[0]}</div>
    //      <img class="card-img-top rounded-0" src="${p.flags.png}" alt="Drapeau du pays ${p.name.common}">
    //      <div class="card-body">
    //          <h5 class="card-title">${p.name.common}</h5>
    //          <h6 class="card-subtitle mb-2 text-muted">Capitale : ${p.capital[0]}</h6>
    //          <p class="card-text">Ce pays d'une superficie de ${p.area} km<sup>2</sup> compte ${p.population} habitants.</p>
    //          <a href="${p.maps.googleMaps}" class="btn btn-primary" target="_blank">Carte</a>
    //      </div>
    // </div>`;

    pays.forEach(p => {
        const carte = document.createElement('div');
        carte.className = "card col-sm-12 col-md-6 col-lg-3 p-0";
        const carteHeader = document.createElement('div');
        carteHeader.classList.add('card-header');
        carteHeader.textContent = p.continents[0];
        const img = document.createElement('img');
        img.className = 'card-img-top rounded-0';
        img.src = p.flags.png;
        img.alt = "Drapeau du pays " + p.name.common;
        const carteBody = document.createElement('div');
        carteBody.className = 'card-body';
        const h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.textContent = p.name.common;
        const h6 = document.createElement('h6');
        h6.className = 'card-subtitle mb-2 text-muted';
        h6.textContent = 'Capitale : ' + p.capital[0];
        const elmP = document.createElement('p');
        p.className = "card-text";
        const sup = document.createElement('sup');
        sup.textContent = '2';
        elmP.append("Ce pays d'une superficie de ", p.area, " km", sup, " compte ", p.population, " habitants.");
        const a = document.createElement('a');
        a.href = p.maps.googleMaps;
        a.className = "btn btn-primary";
        a.target = "_blank";
        a.textContent = "Carte";

        carte.append(carteHeader, img, carteBody);
        carteBody.append(h5, h6, elmP, a);

        divPays.append(carte);

    });
};