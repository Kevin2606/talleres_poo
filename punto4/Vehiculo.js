export default class Vehiculo {
    constructor({marca, modelo, velocidad}){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = Math.round(parseFloat(velocidad));
    }
    acelerar(){
        this.velocidad += 10;
        return this.velocidad
    }
    static convertirKmEnMph(velocidad){
        return Math.round(velocidad/1.60934);
    }
}