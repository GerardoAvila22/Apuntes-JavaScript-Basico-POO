// Definición de la clase "Student" que representa a un estudiante
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [], // Un array vacío por defecto para almacenar cursos aprobados
        learningPaths = [],   // Un array vacío por defecto para almacenar caminos de aprendizaje
    }){
        // Inicialización de propiedades del estudiante con los valores proporcionados
        this.email = email;                   // Dirección de correo electrónico del estudiante
        this.name = name;                     // Nombre del estudiante
        this.username = username;             // Nombre de usuario del estudiante
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses; // Lista de cursos aprobados (puede estar vacía)
        this.learningPaths = learningPaths;     // Lista de caminos de aprendizaje (puede estar vacía)
    }
}

// Creación de una instancia de la clase "Student" llamada "vainilla" con información del estudiante
const vainilla = new Student({
    name: "Vainilla",
    email: "vainilla@correo.com",
    username: "vainillaDC",
    twitter: "vainillaDC",
    instagram: "vainillaDC",
    approvedCourses: ["Curso POO JS", "Curso JS"], // Dos cursos aprobados
    learningPaths: "Desarrollo Web" // Este valor se inicializa incorrectamente como una cadena
});

// Impresión en la consola del objeto "vainilla"
console.log(vainilla);
