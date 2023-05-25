import Figura from "./Figura.js";
import Circulo from "./Circulo.js";
import Rectangulo from "./Rectangulo.js";

const form_figura = document.getElementById("form_figura");
const form_circulo = document.getElementById("form_circulo");
const form_rectangulo = document.getElementById("form_rectangulo");

form_figura.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    const figura1 = new Figura(data);
    const form_response = document.querySelector("#form_response");
    form_response.innerHTML = "";
    form_response.insertAdjacentHTML("beforeend", `<p>El area de la figura es ${figura1.calcularArea()}</p>`);
    document.querySelector('#form_container2').style.display = 'block';
});

form_circulo.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    const circulo1 = new Circulo(data);
    const form_response = document.querySelector("#form_response");
    form_response.innerHTML = "";
    form_response.insertAdjacentHTML("beforeend", `<p>El area del circulo es ${circulo1.calcularArea()}</p>`);
    document.querySelector('#form_container2').style.display = 'block';
});

form_rectangulo.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    const rectangulo1 = new Rectangulo(data);
    const form_response = document.querySelector("#form_response");
    form_response.innerHTML = "";
    form_response.insertAdjacentHTML("beforeend", `<p>El area del rectangulo es ${rectangulo1.calcularArea()}</p>`);
    document.querySelector('#form_container2').style.display = 'block';
});