/* =================== Getters y setters en JavaScript ===================*/
// Definición de la clase "Course"
class Course {
    constructor() {
        // Se definen dos propiedades, "_name" y "classes", sin asignar valores iniciales
        this._name;
        this.classes;
    }

    // Getter para obtener el nombre del curso
    get getName() {
        return this._name;
    }

    // Setter para establecer el nombre del curso
    set setName(name) {
        this._name = name;
    }
}

// Creación de una instancia de la clase "Course" llamada "cursoPOO"
const cursoPOO = new Course();

// Imprimir la instancia "cursoPOO" en la consola
console.log(cursoPOO);

// Utilización del setter "setName" para asignar un nombre al curso
cursoPOO.setName = "Curso POO";

// Utilización del getter "getName" para obtener el nombre del curso y luego imprimirlo
console.log(cursoPOO.getName);

/* =================================================================================== */

class LearningPaths{
    constructor(name, courses){
        this.name = name;
        this.courses = courses;
    }
}


class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        learningPaths = [],
    }){
        this.email = email,
        this.name = name,
        this.username = username,
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.learningPaths = learningPaths
    }
}


const cursoProgBasica = new Course({
    name: "Curso Gratis de Programacion Basica",
    
});

const escuelaJS = new LearningPaths("Escuela JS", ["Fundamnetos POO", "Curso POO", ]);

const vainilla = new Student({
    name: "Vainilla",
    email: "vainilla@correo.com",
    username: "vainillaDC",
    twitter: "vainillaDC",
    instagram: "vainillaDC",
    learningPaths: escuelaJS
});


console.log(vainilla);


