export default class Persona {
    constructor({nombre, edad, sexo}) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

