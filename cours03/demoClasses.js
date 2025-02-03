/*
Auteur  : Maxime Faucher
Date    : 29 janvier 2025
Sujet   : Démos sur les classes JavaScript

Références utiles
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes
    https://www.programiz.com/javascript/classes

*/

// Reprenons notre modèle de personne pour en faire une classe.
class Personne {
    constructor(nom="john doe", age=0) {
        this.nom = nom;
        this.age = age;
    }

    afficherDetails() {
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
}

// Créer un objet de la classe
const personne1 = new Personne ("chico", 25);
console.log("personne1 est un object", personne1 instanceof Object);
console.log("personne1 est une Personne", personne1 instanceof Personne);
console.log("typeof personne1 = ", typeof personne1);


// Appeler la méthode afficherDetails()
personne1.afficherDetails();

// Modifier et afficher le nom avec la notation .
personne1.nom="mijo"
console.log("new name =",personne1.nom);

// Modifier l'âge et l'afficher avec la notation []
personne1['age']=18;
personne1.afficherDetails();
