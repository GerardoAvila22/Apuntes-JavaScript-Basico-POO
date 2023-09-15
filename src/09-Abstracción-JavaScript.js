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

// Creación de instancias de la clase "Course" para representar cursos
const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
});
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
});

// Definición de la clase "LearningPath" para representar caminos de aprendizaje
class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;     // Nombre del camino de aprendizaje
        this.courses = courses; // Lista de cursos en el camino de aprendizaje
    }
}

// Creación de instancias de la clase "LearningPath" para representar caminos de aprendizaje
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});
const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso DataBusiness",
        "Curso Dataviz",
    ],
});
const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal",
    ],
});

// Definición de la clase "Student" para representar a los estudiantes
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;                   // Nombre del estudiante
        this.email = email;                 // Dirección de correo electrónico del estudiante
        this.username = username;           // Nombre de usuario del estudiante
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses; // Lista de cursos aprobados por el estudiante
        this.learningPaths = learningPaths;     // Lista de caminos de aprendizaje del estudiante
    }
}

// Creación de instancias de la clase "Student" para representar a los estudiantes
const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});
