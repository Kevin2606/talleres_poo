export default class Estudiante extends Persona {
    constructor(nombre, edad, sexo, carrera) {
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre} y estudio ${this.carrera}`);
    }
}