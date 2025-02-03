export default class Personne {
    constructor(nom="John Doe", age=0) {
        this.nom = nom;
        this.age = age;
    }

    afficherDetails() {
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
}


//pour exporter plusieurs class ala fois
// export {Personne, Bidon};
// pour importer: import {Personne, Bidon} from './Personne'