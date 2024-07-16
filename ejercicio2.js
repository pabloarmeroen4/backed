/* CLASE */
class Auto {
    constructor(marca, modelo, año, color, transmision, puertas, combustible, precio) {
        /* ATRIBUTOS */
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.transmision = transmision;
        this.puertas = puertas;
        this.combustible = combustible;
        this.propietario = "No asignado"; /* PROPIETARIO INICIAL */
        this.precio = precio ; 
        this.financiacion = false; /* INDICAR FINANCIACION */ 
        /* ATRIBUTOS */

    }


    /* Lo que busca la empresa es vender autos nuevos y de segunda mano, los problemas que podrían encontrase
    serían que el usuario no le guste el color y que si desea puede cambiarlo, que el usuario quiera sacar su auto 
    de manera financiada, que si el usuario desee vender su auto y pueda cambiarlo de propietario */

    
    /* MÉTODOS */

    pintarAuto(nuevoColor) {
        this.color = nuevoColor;
        return `El auto ha sido pintado de color ${this.color}.`;
    }

    cambiarPropietario(nuevoPropietario) {
        this.propietario = nuevoPropietario;
        return `El nuevo propietario es ${this.propietario}.`;
    }

    encender() {
        return `El auto ${this.marca} ${this.modelo} está encendido.`;
    }

    apagar() {
        return `El auto ${this.marca} ${this.modelo} está apagado.`;
    }

    activarFinanciacion() {
        this.financiacion = true;
        return `Financiación activada para el auto ${this.marca} ${this.modelo}.`;
    }

    toString() {
        return `Auto: ${this.marca} ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Transmisión: ${this.transmision}, Puertas: ${this.puertas}, Combustible: ${this.combustible}, Propietario: ${this.propietario}, Precio: ${this.precio}, ${this.financiacion ? 'Financiación disponible.' : 'Pago completo.'}`;
    }
    /* MÉTODOS */
}
/* CLASE */



/* INSTANCIAS */
    /* AUTO, PRECIO, SIN FINANCIACION */
let auto1 = new Auto("Toyota", "Corolla", 2020, "Rojo", "Automática", 4, "Gasolina", 25000);

    /* CAMBIAR EL PROPIETARIO DEL AUTO */
console.log(auto1.cambiarPropietario("Maria Gomez"));

    /* ACTIVAR FINANCIACIÓN DEL AUTO */
console.log(auto1.activarFinanciacion());

    /* AUTO, PRECIO, CON FINANCIACIÓN */
let auto2 = new Auto("Honda", "Civic", 2022, "Negro", "Manual", 4, "Gasolina", 30000);
auto2.activarFinanciacion();
/* INSTANCIAS */



/* MOSTRAR INFORMAICÓN DEL AUTO */
console.log(auto1.toString());
/* MOSTRAR INFORMACIÓN DEL AUTO CON FINANCIACIÓN */
console.log(auto2.toString());
