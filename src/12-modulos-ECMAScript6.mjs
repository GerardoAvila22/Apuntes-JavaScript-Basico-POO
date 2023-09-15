// Importar la clase "PlatziClass" desde el módulo "06-modulo.mjs"
import { PlatziClass } from "./06-modulo.mjs";

// Crear una instancia de la clase "PlatziClass" llamada "clase47"
const clase47 = new PlatziClass({
    name: "El 47",
    videoID: 4578,    
});

// Llamar al método "reproducir()" de la instancia "clase47" para iniciar la reproducción del video asociado
clase47.reproducir();

// Llamar al método "pausar()" de la instancia "clase47" para pausar el video asociado
clase47.pausar();
