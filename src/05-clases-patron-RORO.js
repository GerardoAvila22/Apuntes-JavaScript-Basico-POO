/* ====================== Prototipos con la sintaxis de clase ====================== */

// Definición de la clase "Student" utilizando la sintaxis de clase en JavaScript
class Student {
    constructor({
        name, 
        age, 
        cursosAprobados = [], // Un array vacío por defecto para almacenar cursos aprobados
        email,
    }){
        // Inicialización de propiedades del estudiante con los valores proporcionados
        this.name = name;                 // Nombre del estudiante
        this.age = age;                   // Edad del estudiante
        this.cursosAprobados = cursosAprobados; // Lista de cursos aprobados (puede estar vacía)
        this.email = email;               // Correo electrónico del estudiante
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

// Creación de una instancia de la clase "Student" llamada "gerardo" con información del estudiante
const gerardo = new Student({
    name: "Gerardo",
    age: 22,
    email: "gerardo@student.mx",
    cursosAprobados: "Kinder"    // Este valor se inicializa incorrectamente como una cadena
});

// Impresión en la consola de la propiedad "age" del objeto "gerardo"
console.log(gerardo.age);