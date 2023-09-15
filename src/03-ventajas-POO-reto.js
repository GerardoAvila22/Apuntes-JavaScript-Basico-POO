// Definición de la clase "Course" para representar cursos
class Course {
    constructor({
        name,
        classes = [],
    }) {
        this.name = name;       // Nombre del curso
        this.classes = classes; // Lista de clases dentro del curso (por defecto, vacía)
    }
}

// Definición de la clase "LearningPaths" para representar caminos de aprendizaje
class LearningPaths {
    constructor(name, courses) {
        this.name = name;     // Nombre del camino de aprendizaje
        this.courses = courses; // Lista de cursos en el camino de aprendizaje
    }
}

// Definición de la clase "Student" para representar a los estudiantes
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        learningPaths = [],
    }) {
        this.email = email;                 // Dirección de correo electrónico del estudiante
        this.name = name;                   // Nombre del estudiante
        this.username = username;           // Nombre de usuario del estudiante
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.learningPaths = learningPaths; // Lista de caminos de aprendizaje del estudiante (por defecto, vacía)
    }
}

// Creación de una instancia de la clase "Course" llamada "cursoProgBasica"
const cursoProgBasica = new Course({
    name: "Curso Gratis de Programacion Basica",
});

// Creación de una instancia de la clase "LearningPaths" llamada "escuelaJS" con una lista de cursos
const escuelaJS = new LearningPaths("Escuela JS", ["Fundamentos POO", "Curso POO"]);

// Creación de una instancia de la clase "Student" llamada "vainilla" con información del estudiante y sus caminos de aprendizaje
const vainilla = new Student({
    name: "Vainilla",
    email: "vainilla@correo.com",
    username: "vainillaDC",
    twitter: "vainillaDC",
    instagram: "vainillaDC",
    learningPaths: escuelaJS,
});

// Imprimir la información del objeto "vainilla" en la consola
console.log(vainilla);
