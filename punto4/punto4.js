import Vehiculo from "./Vehiculo.js";
import Coche from "./Coche.js";

const form_vehiculo = document.querySelector('#form_vehiculo')
const form_coche = document.querySelector('#form_coche')
form_vehiculo.addEventListener('submit', (e) => {
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target));
    const vehiculo1 = new Vehiculo(data);
    const form_response = document.querySelector('#form_response')
    form_response.innerHTML = '';
    form_response.insertAdjacentHTML('beforeend', `<p>El vehiculo acelero: ${vehiculo1.acelerar()} unidades</p>`)
    document.querySelector('#form_container2').style.display = 'block';
})

form_coche.addEventListener('submit', (e) => {
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target));
    const coche1 = new Coche(data);
    const form_response = document.querySelector('#form_response')
    form_response.innerHTML = '';
    let velocidad = coche1.acelerar();
    form_response.insertAdjacentHTML('beforeend', `<p>El coche acelero: ${velocidad} km/h</p>`)
    form_response.insertAdjacentHTML('beforeend', `<p>El coche acelero: ${Coche.convertirKmEnMph(velocidad)} mph</p>`)
    document.querySelector('#form_container2').style.display = 'block';
})