import Vehiculo from "./Vehiculo.js";

export default class Coche extends Vehiculo {
    constructor({marca, modelo, velocidad, combustible}){
        super({marca, modelo, velocidad})
        this.combustible = combustible;
    }
    acelerar() { 
        this.velocidad+=20
        return Math.round(this.velocidad)
    }
    
}