/* ====== Prototipos con la sintaxis de clase ====== */

// Definición de la clase "Student"
class Student {
    // Constructor para inicializar las propiedades del estudiante
    constructor(name, age, cursosAprobados){
        this.name = name;                   // Nombre del estudiante
        this.age = age;                     // Edad del estudiante
        this.cursosAprobados = cursosAprobados; // Array para almacenar los cursos aprobados
    }

    // Método para saludar al estudiante
    greet(){
        console.log(`Hola ${this.name}`);
    }

    // Método para agregar un nuevo curso a la lista de cursos aprobados
    addCourse(newCourse){
        this.cursosAprobados.push(newCourse);
    }
}

// Creación de una instancia de la clase "Student" llamada "gerardo"
const gerardo = new Student("Gerardo", 22, ["Kinder", "Primaria", "Secundaria"]);

// Imprimir la información del objeto "gerardo" en la consola
console.log(gerardo);

// Llamar al método "greet()" para saludar al estudiante
gerardo.greet();

// Llamar al método "addCourse()" para agregar un nuevo curso a la lista de cursos aprobados
gerardo.addCourse("Preparatoria");

// Imprimir la información actualizada del objeto "gerardo" en la consola
console.log(gerardo);