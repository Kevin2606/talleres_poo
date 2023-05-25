import Animal from './Animal.js';
export default class Perro extends Animal {
    constructor({nombre, edad, raza}){
        super({nombre, edad});
        this.raza = raza;
    }
    moverCola(){
        return `${this.nombre} está moviendo la cola`;
    }
    hacerSonido(){
        return `${this.nombre} está haciendo guau guau`;
    }
}