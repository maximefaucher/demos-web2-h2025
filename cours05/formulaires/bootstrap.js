document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('myForm');

    form.addEventListener('submit', evt => {

        // Variables utiles
        const champMdp = document.getElementById('password');
        const champMdp2 = document.getElementById('confirmPassword');
        
        // Remettre les validations personnalisées à 0 (si on en a manipulé)
        champMdp2.setCustomValidity("");

        // Prévenir le comportement par défaut et la propagation des événements
        evt.preventDefault();
        evt.stopPropagation();
        // appliquer la validation Bootstrap
        form.classList.add('was-validated');
        //form.checkValidity(); // appliquer les pseudo-classes :invalid et :valid avec cette méthode
        if(!form.checkValidity()) { // va faire la validation 'native' HTML5
            return;
        };
        
        // Validations personnalisées ICI
        // Vérifions que les 2 mots de passe sont identiques
        if(champMdp.value !== champMdp2.value) {
            champMdp2.setCustomValidity("Les 2 mots de passe sont différents"); // va ajouter :invalid au champ confirmPassword
            //champMdp2.classList.remove('is-valid');
            //champMdp2.classList.add('is-invalid');
            champMdp2.focus();
            return;
        }
        else {
            champMdp2.setCustomValidity(""); // remet le champ :valid
            //champMdp2.classList.add('is-valid');
            //champMdp2.classList.remove('is-invalid');
        }

        // Autres validation personnalisées ici...

        // Afficher les champs du formulaire valide
        let data = new FormData(form);
        for( const [cle, valeur] of data.entries()) {
            console.log(cle, "=", valeur);
        }

        // Si on soumettait réellement les données, on enverrait une requête ici (si envoi asynchrone)

        form.reset(); // remise à 0
        form.classList.remove('was-validated'); // retrait de la classe Bootstrap
        return;
    });


});