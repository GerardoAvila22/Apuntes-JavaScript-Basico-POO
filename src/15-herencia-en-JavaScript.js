/* =============== Herencia en JavaScript =============== */

// Definición de la clase "Student" para representar a los estudiantes
class Student {
    constructor({
        name,
        email = "@platzi",
        username = "usuario",
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        learningPaths = [],
        approvedCourses = [],
    }) {
        this.email = email;
        this.name = name;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.learningPaths = learningPaths;
        this.approvedCourses = approvedCourses;
    }
}

// Clase "FreeStudent" que hereda de la clase "Student"
class FreeStudent extends Student {
    constructor(props) {
        super(props); // Llama al constructor de la clase padre (Student)
    }

    // Método para aprobar un curso gratuito
    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}

// Clase "BasicStudent" que hereda de la clase "Student"
class BasicStudent extends Student {
    constructor(props) {
        super(props); // Llama al constructor de la clase padre (Student)
    }

    // Método para aprobar cursos básicos
    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
        }
    }
}

// Clase "ExpertStudent" que hereda de la clase "Student"
class ExpertStudent extends Student {
    constructor(props) {
        super(props); // Llama al constructor de la clase padre (Student)
    }

    // Método para aprobar cualquier curso (sin restricciones)
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

// Definición de la clase "Course" para representar cursos
class Course {
    constructor(name, classes = [], isFree = false, lang = "spanish") {
        this.name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
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

// Creación de instancias de cursos
const cursoPOO = new Course({
    name: "Curso POO",
    lang: "english",
});

const cursoBasic = new Course({
    name: "Curso Básico",
    isFree: true,
});

// Creación de instancias de estudiantes
const gerardo = new FreeStudent({ name: "Gerardo" });
const vainilla = new BasicStudent({ name: "Vainilla" });

// Aprobación de cursos por parte de los estudiantes
gerardo.approveCourse(cursoPOO);
vainilla.approveCourse(cursoPOO);

