// Función para reproducir un video
function videoPlay(id){
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Se está reproduciendo desde la URL " + urlSecreta);
}

// Función para pausar un video
function videoStop(id){
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Pausamos la URL " + urlSecreta);
}

// Exportación de la clase "PlatziClass"
export class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    // Método para reproducir el video asociado a la instancia de la clase
    reproducir(){
        videoPlay(this.videoID);
    }

    // Método para pausar el video asociado a la instancia de la clase
    pausar(){
        videoStop(this.videoID);
    }
}
