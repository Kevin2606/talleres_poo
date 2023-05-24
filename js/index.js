import Persona from "./Persona.js";

const form_persona = document.querySelector('#form_persona');
form_persona.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    const persona = new Persona(data);
    persona.saludar();
});