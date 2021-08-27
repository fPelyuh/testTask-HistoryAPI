const registrationButton = document.querySelector('.registration');
const accessButton = document.querySelector('.access');
const startWorkButton = document.querySelector('.startWork');

const FAQ_registration = document.querySelector('.FAQ_registration');
const FAQ_access = document.querySelector('.FAQ_access');
const FAQ_startWork = document.querySelector('.FAQ_startWork');

registrationButton.onclick = function() {
    FAQ_registration.classList.remove('hidden');
    FAQ_access.classList.add('hidden');
    FAQ_startWork.classList.add('hidden');   
    
    location.search= 'section=registration'; 
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

    window.history.pushState
    //location.search = ''+button.id;
    URLSearchParams.search.set('answer', button.id)
}


document.addEventListener('DOMContentLoaded', function () {
	console.log('документ загрузился', document.location);
	console.log(document.location.search.replace('?', '').split('&'));
    
});