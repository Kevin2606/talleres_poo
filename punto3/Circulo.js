import Figura from "./Figura.js";
export default class Circulo extends Figura {
    constructor({color, radio}){
        super({color, area: 0});
        this.radio = radio;
    }
    calcularArea(){
        this.area = Math.round(Math.PI * Math.pow(this.radio, 2));
        return this.area;
    }
}