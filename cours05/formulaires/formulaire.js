const toggleDivGenre = (evt) => {
    //console.log(evt.target);
    const genre = evt.target.value;
    console.log(genre);
    const divGenre = document.getElementById("div-autregenre");
    if(genre === "autre") { // on montre le div
        divGenre.style.display = "block";
        document.getElementById('genreautre').required = true;
    }
    else {
        divGenre.style.display = "none";
        document.getElementById('genreautre').removeAttribute('required');
    }
};


const chargement = () => {

    // Écouteur d'événement sur le 'change' du radio
    // pour pouvoir montrer / cacher le div
    const inputGenre = document.querySelectorAll("input[name=genre]").forEach(
        input => input.addEventListener('change', toggleDivGenre));
    

    // Intercepter l'envoi du formulaire
    const form = document.getElementById("formulaire");
    form.addEventListener('submit', evt => {
        // Prévenir le comportement par défaut et la propagation des événements
        evt.preventDefault();
        evt.stopPropagation();
        //console.log(evt.target);
        const formData = new FormData(form);
        console.log(formData.get('nom'));
        for( const [name, value] of formData.entries()) {
            console.log(`${name} : ${value}`);
        }
        // Validations particulières
        // Vérifier si l'utilisateur est majeur
        const age = document.getElementById("age").value;
        if(age < 18)
            console.log("Impossible de continuer!");
        else
            console.log("All good!");

        // vÉRIFIER SI les 2 mots de passes sont identiques
        const mdp1 = document.getElementById('motdepasse').value;
        const mdp2 = document.getElementById('motdepasse2').value;
        if(mdp1 !== mdp2) {
            console.log("Les 2 mots de passe doivent être identiques!");
        }


    });
};


document.addEventListener('DOMContentLoaded', chargement);