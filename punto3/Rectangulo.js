import Figura from "./Figura.js";
export default class Rectangulo extends Figura {
    constructor({color, largo, ancho}){
        super({color, area: 0});
        this.largo = largo;
        this.ancho = ancho;
    }
    calcularArea(){
        this.area = this.largo * this.ancho;
        return this.area;
    }
}