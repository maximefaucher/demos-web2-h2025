// Définition d'une classe parent
export default class Animal {
    constructor(nom="N/D") {
        this.nom = nom;
    }
    
    faireDuBruit() {
        console.log("Un bruit d'animal");
    }
    
    decrire() {
        return `Cet animal s'appelle ${this.nom}.`;
    }
}

