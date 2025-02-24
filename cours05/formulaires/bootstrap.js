document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('myForm');

    form.addEventListener('submit', evt => {

        evt.preventDefault();
        evt.stopPropagation();
        if(!form.checkValidity()) { // va faire la validation 'native' HTML5
            
        }
        
        form.classList.add('was-validated');

        // Validations personnalisées
        // Vérifions que les 2 mots de passe sont identiques
        const champMdp = document.getElementById('password');
        const champMdp2 = document.getElementById('confirmPassword');
        if(champMdp.value !== champMdp2.value) {
            champMdp2.classList.remove('is-valid');
            champMdp2.classList.add('is-invalid');
            champMdp2.focus();
            return;
        }
        else {
            champMdp2.classList.add('is-valid');
            champMdp2.classList.remove('is-invalid');
        }

        // Envoyer le formulaire valide
        let data = new FormData(form);
        for( const [cle, valeur] of data.entries()) {
            console.log(cle, "=", valeur);
        }

        form.reset();
        form.classList.remove('was-validated');
        return;
    });


});