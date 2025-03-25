// Auteur:  Maxime Faucher
// Date:    2024-02-01
// Sujet:   Démo sur la notation JSON en JavaScript

// Références:     https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON
//                 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
//                 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

// EXERCICE :   Reproduire l'affichage de https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/JSON/json-superheroes.png
//              à partir des données du fichier JSON suivant : https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json

// TÂCHES
// 1.   Créer un <h1> ayant le contenu de la clé "squadName" et l'ajouter au <header>
// 2.   Créer un <p> ayant le contenu des clés "homeTown" et "formed" et l'ajouter au <header>
// 3.   Afficher les membres de l'équipe et les afficher dans le <section> avec la structure suivante :
/*
        <article>
            <h2>{name}</h2>
            <p>Secret identity: {secretIdentity}</p>
            <p>Age: {age}</p>
            <p>Superpowers</p>
            <ul>
                <li>{powers[0]}</li>
                <li>{powers[...]}</li>
                <li>{powers[powers.length - 1]}</li>
            </ul>
        </article>  
*/

// Variables utiles
const header = document.querySelector('header');
const section = document.querySelector('section');
// Voici un exemple d'objet JSON. Nous allons le récupérer via une requête et le traiter.
const urlRequete = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

// Fonctions pour requêtes AJAX
const montrerContenu = (method, url, type, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.responseType = type;
    xhr.addEventListener('load', (evt) => {
        if(xhr.status == 200){
            callback(xhr.response);
        }
        else{
            console.error('Erreur de requête: ' + xhr.status);
        }
    });
    xhr.send();
}

// Définissons la fonction de rappel pour traiter le contenu
const traiterJSON = (reponse) => {
    console.log(reponse); // inspecter l'objet dans la console!

    // 1.   Créer un <h1> ayant le contenu de la clé "squadName" et l'ajouter au <header>
    const h1 = document.createElement('h1');
    h1.textContent = reponse.squadName;
    header.append(h1)

    // 2.   Créer un <p> ayant le contenu des clés "homeTown" et "formed" et l'ajouter au <header>
    const p = document.createElement('p');
    p.textContent = `Hometown: ${reponse.homeTown} // Formed: ${reponse.formed}`;
    header.append(p)

    // 3.   Afficher les membres de l'équipe et les afficher dans le <section> avec la structure suivante :
    /*
            <article>
                <h2>{name}</h2>
                <p>Secret identity: {secretIdentity}</p>
                <p>Age: {age}</p>
                <p>Superpowers</p>
                <ul>
                    <li>{powers[0]}</li>
                    <li>{powers[...]}</li>
                    <li>{powers[powers.length - 1]}</li>
                </ul>
            </article>  
    */
    reponse.members.forEach( membre => {
        // Créer les éléments
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const ul = document.createElement('ul');
        // Remplir selon les données
        h2.textContent = membre.name;
        p1.textContent = `Secret identity: ${membre.secretIdentity}`;
        p2.textContent = `Age: ${membre.age}`;
        p3.textContent = "Superpowers";
        // Boucler pour les superpouvoirs
        membre.powers.forEach( pouvoir => {
            const li = document.createElement('li');
            li.textContent = pouvoir;
            ul.append(li);
        });
        // Rattacher les éléments
        article.append(h2, p1, p2, p3, ul);
        section.append(article);
    });
    
}

document.addEventListener('DOMContentLoaded', () => {
    // Faisons la requête AJAX pour obtenir le contenu du fichier JSON
    montrerContenu('GET', urlRequete, 'json', traiterJSON);
});
