import Persona from "./Persona.js";
import Estudiante from "./Estudiante.js";

const form_persona = document.querySelector('#form_persona');
form_persona.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    const estudiante1 = new Estudiante(data);
    const form_response = document.querySelector('#form_response');
    form_response.innerHTML = '';
    form_response.insertAdjacentHTML('beforeend', `<p>${estudiante1.saludar()}</p>`);
    form_response.insertAdjacentHTML('beforeend', `<p>${estudiante1.estudiar()}</p>`);
    let str = Persona.esMayorDeEdad(estudiante1.getEdad) ? 'Eres mayor de edad' : 'Eres menor de edad';
    form_response.insertAdjacentHTML('beforeend', `<p>${str}</p>`);
    document.querySelector('#form_container2').style.display = 'block';
});