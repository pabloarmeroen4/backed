import Animal from "./animal.js"

class Perro extends Animal{
    constructor (nombre , raza) {
        super (nombre)
        this.raza=raza
    }
    informacionperro () {
        return "Perro-info: nombre: "+this.nombre+ "raza: "+this.raza
    }
}

export default Perro