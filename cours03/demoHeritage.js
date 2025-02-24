/*
Auteur  : Maxime Faucher
Date    : 4 février 2025
Sujet   : Démos sur les l'héritage de classes JavaScript

Références utiles
    https://www.youtube.com/watch?v=DqUPa0D2N78 
    https://www.programiz.com/javascript/inheritance


Notions importantes
    mots-clés 'extends' et 'super'
    vocabulaire : classe parent (ou mère)/ classe enfant, classe de base / classe dérivée
    redéfinition de méthode (overriding) pour préciser un comportement

*/

// importation des classes
import Animal from "./classes/Animal.js";
import { Chien } from "./classes/Chien.js";

// Utilisation des classes
const unAnimal = new Animal("Popcorn");
const monChien = new Chien("Rex", "Labrador");
console.log(monChien.nom); // Rex
console.log(monChien.race); // Labrador
unAnimal.faireDuBruit(); // Un bruit d'animal
monChien.faireDuBruit(); // Wouf! Wouf!
console.log(monChien.decrire()); // Cet animal s'appelle Rex. C'est un chien de race Labrador.
console.log(unAnimal.decrire()); // Cet animal s'appelle Popcorn.
console.log(unAnimal instanceof Animal, unAnimal instanceof Chien);
console.log(monChien instanceof Animal, monChien instanceof Chien);
