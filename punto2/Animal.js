export default class Animal {
    constructor({nombre, edad}){
        this.nombre = nombre;
        this.edad = edad;
    }
    hacerSonido(){
        return `${this.nombre} está haciendo un sonido`;
    }
}