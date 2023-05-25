import Persona from './Persona.js';
export default class Estudiante extends Persona {
    constructor({nombre, edad, sexo, carrera}) {
        super({nombre, edad, sexo});
        this.carrera = carrera;
    }
    saludar() {
        return `Hola, soy ${this.nombre} y estudio ${this.carrera}`
    }
    estudiar(){
        return `Estoy estudiando ${this.carrera}`
    }
}