import Animal from './Animal.js';
import Perro from './Perro.js';

const form_form = document.querySelector('#form_form');
form_form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    const animal1 = new Animal(data);
    const perro1 = new Perro(data);
    const form_response = document.querySelector('#form_response');
    form_response.innerHTML = '';
    form_response.insertAdjacentHTML('beforeend', `<p>${animal1.hacerSonido()}</p>`);
    form_response.insertAdjacentHTML('beforeend', `<p>${perro1.hacerSonido()}</p>`);
    form_response.insertAdjacentHTML('beforeend', `<p>${perro1.moverCola()}</p>`);
    document.querySelector('#form_container2').style.display = 'block';
});