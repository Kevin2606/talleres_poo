export default class Persona {
    constructor({ edad, sexo, nombre}) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    saludar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    }
    get getEdad() {
        return this.edad;
    }
    set setEdad(value) {
        if (value < 0) throw new Error('La edad no puede ser negativa');
        this.edad = value;
    }
    static esMayorDeEdad(edad) {
        return edad >= 18;
    }
}

