// Definición de la clase "Integrante" para representar a los miembros de la banda
class Integrante {
  constructor({ nombre, instrumento }) {
    this.nombre = nombre;         // Nombre del integrante
    this.instrumento = instrumento; // Instrumento que toca el integrante
  }
}

// Definición de la clase "Banda" que representa una banda musical
class Banda {
  constructor({ nombre, generos = [] }) {
    this.nombre = nombre;   // Nombre de la banda
    this.generos = generos; // Géneros musicales de la banda
    this.integrantes = [];  // Lista de integrantes de la banda
  }

  // Método para verificar si la banda ya tiene un integrante con un instrumento específico
  integra() {
    return this.integrantes.find((objeto) => buscar(objeto));
  }

  // Método para agregar un nuevo integrante a la banda
  agregarIntegrante(integranteNuevo) {
    // Buscar si ya existe un integrante con el instrumento "Bateria"
    const buscado = this.integrantes.find(
      (objeto) => objeto.instrumento === "Bateria"
    );

    // Si no se encuentra un integrante con "Bateria", agregar el nuevo integrante
    if (!buscado) {
      this.integrantes.push(integranteNuevo);
    } else {
      console.log("ERR"); // Si ya hay un integrante con "Bateria", mostrar un mensaje de error
    }
  }
}

// Crear una instancia de la clase "Integrante" llamada "eliud"
const eliud = new Integrante({
  nombre: "Eliud",
  instrumento: "Bajo",
});

console.log(eliud); // Imprimir la información del integrante "eliud"

// Crear una instancia de la clase "Banda" llamada "gndx" con algunos géneros musicales
const gndx = new Banda({
  nombre: "GNDX",
  generos: ["Tumbads", "Corridos"],
});

console.log(gndx); // Imprimir la información de la banda "gndx"

// Agregar el integrante "eliud" a la banda "gndx"
gndx.agregarIntegrante(eliud);

console.log(gndx.integrantes); // Imprimir la lista de integrantes de la banda "gndx"
