class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    informacionPersona() {
        return "persona: nombre " + this.nombre + " edad: " + this.edad;
    }
}

class Alumno extends Persona { 
    constructor(nombre, edad, matricula) {
        super(nombre, edad);
        this.matricula = matricula;
    }

    informacionAlumno() {
        return "alumno: nombre: " + this.nombre + " edad: " + this.edad + " matricula: " + this.matricula;
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, id) {
        super(nombre, edad);
        this.id = id;
    }

    set setMateria(materia) {
        this.materia = materia;
    }

    get getMateria() {
        return this.materia;
    }

    informacionProfesor() {
        return "Profesor: nombre: " + this.nombre + " edad: " + this.edad + " id: " + this.id + " materia: " + this.materia;
    }
}

// Crear una instancia de Profesor
let objprofesor = new Profesor("freddy cruz", 36, "123456");

// Asignar la materia usando el setter
objprofesor.setMateria = "sociales";

// Mostrar la información del profesor
console.log(objprofesor.informacionProfesor());

// Obtener la materia usando el getter
console.log(objprofesor.getMateria);
