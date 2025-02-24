
const init = () => {
    // Création des éléments
    const divContainer = document.createElement('div');
    const divClickMeCard = document.createElement('div');
    const divClickMeBtn = document.createElement('div');
    const pClickMe = document.createElement('p');
    const btnClickMe = document.createElement('button');
    // Les rattacher à la page
    divClickMeCard.append(pClickMe);
    divClickMeBtn.append(btnClickMe);
    divContainer.append(divClickMeCard, divClickMeBtn);
    document.body.prepend(divContainer);
    // Personnalisation des éléments
    divContainer.classList.add("container", "vh-100");
    divClickMeCard.className = "card mt-5 w-25 h-25 align-items-center bg-success";
    divClickMeCard.setAttribute('id', 'clickMeCard');
    divClickMeCard.dataset.dangerCount = 0;
    pClickMe.classList.add("m-auto");
    pClickMe.innerText = "Click below! 😊";
    divClickMeBtn.className = "card-body w-25 align-items-center d-flex";
    btnClickMe.classList.add("btn", 'm-auto', 'btn-dark');
    btnClickMe.id = "btnClickMe";
    btnClickMe.innerText = "--> Click here <--";
    btnClickMe.type = "button";

};

changeClickMeCardToWarningState = () => {
    const divClickMeCard = document.querySelector('#clickMeCard');
    divClickMeCard.classList.replace('bg-success', 'bg-warning');
    divClickMeCard.classList.replace('bg-danger', 'bg-warning');
    divClickMeCard.firstChild.innerText = "Don't do it! 😱";
};

changeClickMeCardToSuccessState = () => {
    const divClickMeCard = document.querySelector('#clickMeCard');
    divClickMeCard.classList.replace('bg-warning', 'bg-success');
    divClickMeCard.classList.replace('bg-danger', 'bg-success');
    divClickMeCard.firstChild.innerText = "Click below! 😊";
};

changeClickMeCardToDangerState = () => {
    const divClickMeCard = document.querySelector('#clickMeCard');
    divClickMeCard.classList.replace('bg-success', 'bg-danger');
    divClickMeCard.classList.replace('bg-warning', 'bg-danger');
    divClickMeCard.firstChild.innerText = "OUCH! 🤕";
    divClickMeCard.dataset.dangerCount++;
};

changeClickMeCardToFaintedState = () => {
    const divClickMeCard = document.getElementById('clickMeCard');
    if(divClickMeCard.dataset.dangerCount > 5) {
        divClickMeCard.classList.replace('bg-success', 'bg-secondary');
        divClickMeCard.classList.replace('bg-warning', 'bg-secondary');
        divClickMeCard.classList.replace('bg-danger', 'bg-secondary');
        divClickMeCard.firstChild.innerText = "I fainted! 😵";
        const btnClickMe = document.querySelector('button');
        btnClickMe.removeEventListener('mouseover', changeClickMeCardToWarningState);
        btnClickMe.removeEventListener('mouseout', changeClickMeCardToSuccessState);
        btnClickMe.removeEventListener('click', changeClickMeCardToDangerState);
        btnClickMe.removeEventListener('click', changeClickMeCardToFaintedState);
    }
};

const main = () => {
    init();
    const btnClickMe = document.querySelector('button');
    btnClickMe.addEventListener('mouseover', changeClickMeCardToWarningState);
    btnClickMe.addEventListener('mouseout', changeClickMeCardToSuccessState);
    btnClickMe.addEventListener('click', changeClickMeCardToDangerState);
    btnClickMe.addEventListener('click', changeClickMeCardToFaintedState);

};


document.addEventListener('DOMContentLoaded', main);

