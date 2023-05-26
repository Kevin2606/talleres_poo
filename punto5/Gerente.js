import Empleado from "./Empleado.js";

export default class Gerente extends Empleado {
    constructor({nombre, edad, sueldo, departamento}){
        super({nombre, edad, sueldo})
        this.departamento = departamento;
    }
    calcularSalarioAnual(){
        return Math.round((this.sueldo+(this.sueldo*0.1))*12)
    }
}