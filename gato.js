import Animal from "./animal";

class Gato extends Animal {
    constructor(nombre , raza ,sonido) {
        super (nombre,raza)
        this.sonido = sonido
    }
    informaciongato () {
        return "Gato-info: nombre: "+this.nombre+ "raza: "+this.raza+"sonido: "+this.sonido
    }
}

export default Gato