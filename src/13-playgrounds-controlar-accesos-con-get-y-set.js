// Definición de la clase "Course"
class Course {
  constructor({ name, classes = [] }) {
    this.name = name;       // Asignación del nombre del curso
    this.classes = classes; // Asignación de las clases dentro del curso
  }

  // Getter para obtener el nombre del curso
  get name() {
    return this.name;
  }

  // Setter para establecer el nombre del curso con ciertas reglas
  set name(nuevoNombrecito) {
    const isString = typeof nuevoNombrecito;

    // Verificar si el nuevo nombre es una cadena de texto
    if (isString === "string") {
      // Convertir el nuevo nombre en un título con la primera letra de cada palabra en mayúscula
      this.name = nuevoNombrecito
        .split(" ")  // Dividir el nombre en palabras
        .map((palabra) => {
          return palabra[0].toUpperCase() + palabra.substring(1);
        })
        .join(" "); // Unir las palabras con un espacio en blanco entre ellas
    }
  }
}
