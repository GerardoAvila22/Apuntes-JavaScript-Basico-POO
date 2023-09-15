/* ============== JavaScript: orientado a objetos, basado en prototipos ============== */

// Basado en clases 
// Definir una clase llamada "Persona"
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método de la clase
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Crear objetos basados en la clase "Persona"
const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("María", 25);

// Llamar al método "saludar" en ambos objetos
persona1.saludar(); // Imprimirá: Hola, mi nombre es Juan y tengo 30 años.
persona2.saludar(); // Imprimirá: Hola, mi nombre es María y tengo 25 años.

// Basado en prototipos
// Crear un objeto "persona" usando un constructor de función
function PersonaV2(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Agregar un método al prototipo de "Persona"
PersonaV2.prototype.saludar = function() {
  console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
};

// Crear objetos basados en el prototipo "Persona"
const persona3 = new Persona("Juan", 30);
const persona4 = new Persona("María", 25);

// Llamar al método "saludar" en ambos objetos
persona1.saludar(); // Imprimirá: Hola, mi nombre es Juan y tengo 30 años.
persona2.saludar(); // Imprimirá: Hola, mi nombre es María y tengo 25 años.
