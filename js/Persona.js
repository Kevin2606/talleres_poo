export default class Persona {
    constructor({ edad, sexo, nombre}) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    saludar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    }
    static esMayorDeEdad(edad) {
        return edad >= 18;
    }
}

