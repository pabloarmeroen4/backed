class Ruta {
    constructor (ubicacionInicial, ubicacionFinal, distancia) {
    this.ubicacionInicial = ubicacionInicial
    this.ubicacionFinal = ubicacionFinal
    this.distancia = distancia
    }
    getubicacionInicial(){
        return this.ubicacionInicial
    }

    setubicacionInicial(ubicacion){
        this.ubicacionInicial = ubicacion
    }
}

let ruta =new  Ruta ("abc","cde","2km")
console.log(ruta.getubicacionInicial())
ruta.setubicacionInicial("gf")

console.log(ruta.getubicacionInicial())