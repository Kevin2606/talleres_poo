import Persona from "./Persona.js";
import Estudiante from "./Estudiante.js";

const form_persona = document.querySelector('#form_persona');
form_persona.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    const estudiante1 = new Estudiante(data);
    const form_response = document.querySelector('#form_response');
    form_response.insertAdjacentHTML('beforeend', `<p>${estudiante1.saludar()}</p>`);
    form_response.insertAdjacentHTML('beforeend', `<p>${estudiante1.estudiar()}</p>`);
    document.querySelector('#form_container2').style.display = 'block';
});