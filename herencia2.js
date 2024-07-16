class Animal {
    constructor (nombre , especie , raza) {
        this.nombre = nombre
        this.especie = especie 
        this.raza = raza
    }
    informacionanimal () {
        return "Animal nombre: "+this.nombre+ " especie: "+this.especie+" raza: "+this.raza
    }
    set setalimentacion (alimentacion) {
        this.alimentacion = alimentacion
    }
    get getalimentacion () {
        return this.alimentacion
    }
    expo
}

class Perro extends Animal{
    constructor (nombre , especie , raza , domestico) {
        super (nombre , especie , raza)
        this.domestico = domestico
    }

    informacionperro () {
        return "Perro nombre: "+this.nombre+ " especie: "+this.especie+" raza: "+this.raza+ " domestico: "+this.domestico
    }
}

class Gato extends Animal{
    constructor (nombre , especie , raza) {
        super (nombre , especie , raza)
    }
    informaciongato () {
        return "Gato nombre: "+this.nombre+ " especie: "+this.especie+" raza: "+this.raza+ " sonido: "+this.sonido
    }
    set setsonido (sonido) {
        this.sonido = sonido
    }
    get getsonido () {
        return this.sonido
    }
}

/* let objanimal = new Animal ("leon" , "felino" , "grande")
console.log(objanimal.informacionanimal()) */

/* let objperro = new Perro ("lalo" , "criollo" , "grande" , "si es domestico")

console.log(objperro.informacionperro()) */

let objgato = new Gato ("lucius" , "criollo" , "grande" ,)

objgato.setsonido = "si ronronea";

console.log(objgato.informaciongato());

console.log(objgato.getsonido);