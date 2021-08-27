const registrationButton = document.querySelector('.registration');
const accessButton = document.querySelector('.access');
const startWorkButton = document.querySelector('.startWork');

const FAQ_registration = document.querySelector('.FAQ_registration');
const FAQ_access = document.querySelector('.FAQ_access');
const FAQ_startWork = document.querySelector('.FAQ_startWork');

const mainButton = [document.querySelector('.registration'), document.querySelector('.access'), document.querySelector('.startWork')]

registrationButton.onclick = function() {
    FAQ_registration.classList.remove('hidden');
    FAQ_access.classList.add('hidden');
    FAQ_startWork.classList.add('hidden');    
};

accessButton.onclick = function() {
    FAQ_registration.classList.add('hidden');
    FAQ_access.classList.remove('hidden');
    FAQ_startWork.classList.add('hidden');    
};

startWorkButton.onclick = function() {
    FAQ_registration.classList.add('hidden');
    FAQ_access.classList.add('hidden');
    FAQ_startWork.classList.remove('hidden');    
};

function hideFAQblock(button) {
    const block = button.closest('.FAQ_item');

    document.querySelectorAll('.visible').forEach(item => item.classList.remove('visible'));

    block.classList.toggle('visible');
    
}

document.addEventListener('DocumentDOMLoaded или как оно там', function () {
	console.log('документ загрузился', document.location);
	console.log(document.location.search.replace('?', '').split('&'))
})
/*

// ----------------------------------------------------------------
const registrationQuestion1 = document.querySelector('.regQuestion1');
const registrationAnswer1 = document.querySelector('.regAnswer1');
const buttonRegistrationQuestion1 = document.querySelector('.ButtonRegQuestion_1');
const regArrow1 = document.querySelector('.regArrow1');

const registrationQuestion2 = document.querySelector('.regQuestion2');
const registrationAnswer2 = document.querySelector('.regAnswer2');
const buttonRegistrationQuestion2 = document.querySelector('.ButtonRegQuestion_2');
const regArrow2 = document.querySelector('.regArrow2');

/*
const hideButton = function(a, b) {
    if (a.classList.contains('hidden') == false) {
        a.classList.add('hidden');
        b.src = "img/arr_down.svg";
    } else if (a.classList.contains('hidden')) {
        a.classList.remove('hidden');
        b.src = "img/arr_up.svg";
    }
}

buttonRegistrationQuestion1.onclick = function() {
    if (registrationAnswer1.classList.contains('hidden') == false) {
        registrationAnswer1.classList.add('hidden');
        regArrow1.src = "img/arr_down.svg";
    } else if (registrationAnswer1.classList.contains('hidden')) {
        registrationAnswer1.classList.remove('hidden');
        regArrow1.src = "img/arr_up.svg";
    }
};

buttonRegistrationQuestion2.onclick = hideButton(registrationAnswer2, regArrow2);



buttonRegistrationQuestion1.onclick = function() {
    registrationAnswer2.classList.add('hidden');
    registrationAnswer1.classList.remove('hidden');
    regArrow1.src = "img/arr_up.svg";
    regArrow2.src = "img/arr_down.svg";
};

buttonRegistrationQuestion2.onclick = function() {
    registrationAnswer1.classList.add('hidden');
    registrationAnswer2.classList.remove('hidden');
    regArrow2.src = "img/arr_up.svg";
    regArrow1.src = "img/arr_down.svg";
};

// ----------------------------------------------------------------
const accessQuestion1 = document.querySelector('.accessQuestion1');
const accessAnswer1 = document.querySelector('.accessAnswer1');
const buttonAccessQuestion1 = document.querySelector('.ButtonAccessQuestion_1');
const accessArrow1 = document.querySelector('.accessArrow1');

const accessQuestion2 = document.querySelector('.accessQuestion2');
const accessAnswer2 = document.querySelector('.accessAnswer2');
const buttonAccessQuestion2 = document.querySelector('.ButtonAccessQuestion_2');
const accessArrow2 = document.querySelector('.accessArrow2');

buttonAccessQuestion1.onclick = function() {
    accessAnswer2.classList.add('hidden');
    accessAnswer1.classList.remove('hidden');
    accessArrow1.src = "img/arr_up.svg";
    accessArrow2.src = "img/arr_down.svg";
};

buttonAccessQuestion2.onclick = function() {
    accessAnswer1.classList.add('hidden');
    accessAnswer2.classList.remove('hidden');
    accessArrow2.src = "img/arr_up.svg";
    accessArrow1.src = "img/arr_down.svg";
};

// ----------------------------------------------------------------
const startWorkQuestion1 = document.querySelector('.startWorkQuestion1');
const startWorkAnswer1 = document.querySelector('.startWorkAnswer1');
const buttonStartWorkQuestion1 = document.querySelector('.ButtonStartWorkQuestion_1');
const startWorkArrow1 = document.querySelector('.startWorkArrow1');

const startWorkuestion2 = document.querySelector('.startWorkQuestion2');
const startWorkAnswer2 = document.querySelector('.startWorkAnswer2');
const buttonStartWorkQuestion2 = document.querySelector('.ButtonStartWorkQuestion_2');
const startWorkArrow2 = document.querySelector('.startWorkArrow2');

buttonStartWorkQuestion1.onclick = function() {
    startWorkAnswer2.classList.add('hidden');
    startWorkAnswer1.classList.remove('hidden');
    startWorkArrow1.src = "img/arr_up.svg";
    startWorkArrow2.src = "img/arr_down.svg";
};

buttonStartWorkQuestion2.onclick = function() {
    startWorkAnswer1.classList.add('hidden');
    startWorkAnswer2.classList.remove('hidden');
    startWorkArrow2.src = "img/arr_up.svg";
    startWorkArrow1.src = "img/arr_down.svg";
};

*/