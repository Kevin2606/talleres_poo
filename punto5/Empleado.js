export default class Empleado {
    static id = 0
    constructor({nombre, edad, sueldo}){
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = parseInt(sueldo);
        this.id = Empleado.generarIdEmpleado();
    }
    calcularSalarioAnual(){
        return this.sueldo * 12
    }
    static generarIdEmpleado(){
        return Empleado.id += 1;
    }
}