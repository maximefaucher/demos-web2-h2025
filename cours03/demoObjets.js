// Démonstration des objets en JavaScript

/* 
Ce fichier JavaScript couvre les bases de la manipulation des objets en JavaScript, 
y compris la création, l'accès, la modification, l'ajout, la suppression de propriétés, 
les méthodes, les objets imbriqués, l'utilisation de prototypes et le parcours des propriétés.

Sections :

1. Création d'un objet simple :
    Nous créons un objet personne1 avec les propriétés nom et âge.
2. Accès aux propriétés de l'objet :
    Nous accédons aux propriétés en utilisant la notation par point et par crochets.
3. Modification des propriétés de l'objet :
    Nous modifions la valeur de la propriété âge.
4. Ajout de nouvelles propriétés à l'objet :
    Nous ajoutons une nouvelle propriété profession à l'objet.
5. Suppression d'une propriété de l'objet :
    Nous supprimons la propriété profession de l'objet avec l'intruction delete.
6. Méthodes dans un objet :
    Nous ajoutons une méthode saluer à l'objet personne4 qui affiche un message de salutation.
7. Objets imbriqués :
    Nous créons un objet voiture qui contient un autre objet propriétaire en tant que propriété.
8. Accès aux propriétés d'un objet imbriqué :
    Nous accédons aux propriétés de l'objet imbriqué propriétaire.
9. Parcourir les propriétés d'un objet avec une boucle for...in :
    Nous utilisons une boucle for...in pour parcourir et afficher les propriétés de l'objet personne1.
10. Utilisation de Object.create() pour créer un nouvel objet avec un prototype :
    Nous utilisons Object.create() pour créer un nouvel objet chien avec animal comme prototype.
11. Fonction constructeur pour créer des objets :
    Nous créons une fonction constructeur Personne pour créer des objets.

DÉFINITION :
Un objet en JavaScript est une collection de propriétés, où chaque propriété est une paire clé-valeur. 
On utilise les accolates {} pour représenter un objet et les propriétés sont séparées par des virgules.
On sépare la clé et la valeur par le caractère deux points : cle: valeur.
Les clés sont des chaînes de caractères et les valeurs peuvent être de tout type de données (nombre, 
chaîne, tableau, objet, fonction, etc.).
*/

// 1. Création d'un objet (simple) JavaScript
// a) Création d'un objet avec un objet littéral (notation avec {})
const personne1 = {
    nom: "Alice",
    age: 30,
};
console.log("1. Objet personne1 :", personne1);
// b) Création d'un objet avec le constructeur de la classe Object
const personne2 = new Object({nom: "Bob", age: 25});
// Similairement, on peut créer un objet vide avec le constructeur Object
// et ajouter des propriétés par la suite
// const personne2 = new Object();
// personne2.nom = "Bob";
// personne2.age = 25;
// personne2['age'] = 25;
console.log("1. Objet personne2 :", personne2);

// 2. Accès aux propriétés de l'objet
// Nous accédons aux propriétés en utilisant la notation par point et par crochets.
console.log("2. Nom :", personne1.nom); // Utilisation de la notation par point
console.log("2. Âge :", personne1["age"]); // Utilisation de la notation par crochets

// 3. Modification des propriétés de l'objet
personne1.age = 31;
console.log("3. Âge modifié :", personne1.age);

// 4. Ajout de nouvelles propriétés à l'objet
personne1.profession = "Ingénieure";
console.log("4. Ajout de la profession :", personne1);

// 5. Suppression d'une propriété de l'objet avec l'instruction delete
delete personne1.profession;
console.log("5. Après suppression de la profession :", personne1);

// 6. Méthodes dans un objet
const personne3 = {
    nom: "Albert",
    age: 57,
    saluer: function() {
        console.log(`6. Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
};
personne3.saluer();
//personne1.saluer();

// 7. Objets imbriqués
const voiture = {
    marque: "Tesla",
    modele: "Model S",
    proprietaire: {
        nom: "Charlie",
        age: 40
    }
};
console.log("7. Voiture :", voiture);

// 8. Accès aux propriétés d'un objet imbriqué
console.log("7. Nom du propriétaire :", voiture.proprietaire.nom);
console.log("8. Âge du propriétaire :", voiture.proprietaire["age"]); // mélange de notations . et []

// 9. Parcourir les propriétés d'un objet avec une boucle for...in
console.log("9. Propriétés de l'objet personne1 :");
for (const cle in personne1) {
    console.log(cle + " : " + personne1[cle]);
}
// 10. Utilisation de Object.create() pour créer un nouvel objet avec un prototype
const animal = {
    type: "Inconnu",
    afficherType: function() {
        console.log("10. Type d'animal :", this.type);
    }
};

const chien = Object.create(animal);
chien.type = "Chien";
chien.afficherType();

// 11. Fonction constructeur pour créer des objets
function Personne(nom='Inconnu', age=0) {
    this.nom = nom;
    this.age = age;
    this.afficherDetails = function() {
        console.log(`11. Nom : ${this.nom}, Âge : ${this.age}`);
    };
}
const personne4 = new Personne();
const personne5 = new Personne("David", 35);
personne4.afficherDetails();
personne5.afficherDetails();

// EXERCICE : 
// a) Mettre les 5 objets (personne1 à personne5) dans un tableau appelé 'personnes'
const personnes=[personne1, personne2, personne3, personne4, personne5];

// b) Calculer l'âge moyen (avec .reduce())
let sommeAge = personnes.reduce((accumulateur,elm) => accumulateur+elm.age,0 );
console.log("la moyenne des ages du tableau est ", sommeAge/personnes.length," ans.");

// Tous les objets qu'on a créés sont des instances de la classe Object
console.log(personne1 instanceof Object, personne2 instanceof Object, personne3 instanceof Object, personne4 instanceof Object, personne5 instanceof Object); // true
console.log(typeof personne1, typeof personne2, typeof personne3, typeof personne4, typeof personne5); // object

// Et maintenant... les CLASSES! 