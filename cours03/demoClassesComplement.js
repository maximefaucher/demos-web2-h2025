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
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    afficherDetails() {
        console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans.`);
    }
}

// Créer une classe Rectangle par expression de classe
// anonyme
let Rectangle = class {
    constructor(hauteur, largeur) {
        this.hauteur = hauteur;
        this.largeur = largeur;
    }
    dessiner() {
        let dessin = `Rectangle ${this.hauteur} par ${this.largeur}\n`;
        // ligne 0 [la première]
        for(let i=0; i<this.largeur; ++i) {
            dessin += '_';
        }
        dessin += '\n';
        // lignes 1 à (hauteur - 2)
        for(let i=1; i<this.hauteur-1; ++i) {
            dessin += '|';
            for(let j=1; j<this.largeur-1; ++j) {
                dessin += ' ';
            }
            dessin += '|\n';
        }
        // ligne (hauteur -1) [la dernière]
        for(let i=0; i<this.largeur; ++i) {
            dessin += '¯';
        }
        dessin += '\n';
        console.log(dessin);
    }
};
  
// nommée
let Rectangle2 = class Rectangle2 {
    constructor(hauteur, largeur) {
        this.hauteur = hauteur;
        this.largeur = largeur;
    }
};

const rect1 = new Rectangle(10, 10);
rect1.dessiner();
  

// Appeler la méthode afficherDetails()


// Modifier et afficher le nom avec la notation .


// Modifier l'âge et l'afficher avec la notation []

