// Auteur
// Date
// Sujet

const init = () => {
    // Nos éléments à injecter
    const divContainer = document.createElement('div');
    const divClickMeCard = document.createElement('div');
    const divClickMeBtn = document.createElement('div');
    const pClickMe = document.createElement('p');
    const btnClickMe = document.createElement('button');
    // Ajout au DOM
    document.body.prepend(divContainer);
    divContainer.append(divClickMeCard, divClickMeBtn);
    divClickMeCard.append(pClickMe);
    divClickMeBtn.append(btnClickMe);
    // Personnaliser les éléments
    divContainer.classList.add('container', 'vh-100');
    divClickMeCard.className = "card mt-5 w-25 h-25 align-items-center bg-success";
    divClickMeCard.setAttribute('id', 'clickMeCard'); // possible avec divClickMeCard.id = "  "
    divClickMeCard.dataset.dangerCount = 0;
    pClickMe.classList.add('m-auto');
    pClickMe.innerText = "Click below! 😊";
    divClickMeBtn.className = "card-body w-25 align-items-center d-flex";
    btnClickMe.className = "btn m-auto btn-dark";
    btnClickMe.type = "button";
    btnClickMe.innerText = "--> Click here <--";
    btnClickMe.id = "btnClickMe";
};

const changeClickMeCardToWarningState = () => {
    const divClickMeCard = document.querySelector('#clickMeCard');
    divClickMeCard.classList.replace('bg-success', 'bg-warning');
    divClickMeCard.classList.replace('bg-danger', 'bg-warning');
    divClickMeCard.firstChild.innerText = "Don't do it! 😱";
};

const changeClickMeCardToSuccessState = () => {
    const divClickMeCard = document.querySelector('#clickMeCard');
    divClickMeCard.classList.replace('bg-warning', 'bg-success');
    divClickMeCard.classList.replace('bg-danger', 'bg-success');
    divClickMeCard.firstChild.innerText = "Click below! 😊";
};

const changeClickMeCardToDangerState = () => {
    const divClickMeCard = document.getElementById('clickMeCard');
    divClickMeCard.classList.replace('bg-success', 'bg-danger');
    divClickMeCard.classList.replace('bg-warning', 'bg-danger');
    divClickMeCard.firstChild.innerText = "OUCH! 🤕";
    divClickMeCard.dataset.dangerCount++;
};

const changeClickMeCardToFaintedState = () => {
    const divClickMeCard = document.getElementById('clickMeCard');
    if(divClickMeCard.dataset.dangerCount > 5) {
        divClickMeCard.classList.replace('bg-success', 'bg-secondary');
        divClickMeCard.classList.replace('bg-warning', 'bg-secondary');
        divClickMeCard.classList.replace('bg-danger', 'bg-secondary');
        divClickMeCard.firstChild.innerText = "I fainted! 😵";
        const bouton = document.querySelector('button');
        bouton.removeEventListener('mouseover', changeClickMeCardToWarningState);
        bouton.removeEventListener('mouseout', changeClickMeCardToSuccessState);
        bouton.removeEventListener('click', changeClickMeCardToDangerState);
        bouton.removeEventListener('click', changeClickMeCardToFaintedState);
    } 
};

// Programme principal
const main = () => {
    init();
    const bouton = document.querySelector('button');
    bouton.addEventListener('mouseover', changeClickMeCardToWarningState);
    bouton.addEventListener('mouseout', changeClickMeCardToSuccessState);
    bouton.addEventListener('click', changeClickMeCardToDangerState);
    bouton.addEventListener('click', changeClickMeCardToFaintedState);
};

// Lancement du programme principal
main();