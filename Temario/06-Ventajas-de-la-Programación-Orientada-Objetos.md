## Ventajas de la Programación Orientada a Objetos

Como visto anteriormente un objeto literal se ve como el siguiente:

```jsx
const sofia = {
    name: "Sofia Gonzalez",
    username: "sofiagonzaloc",
    points: 100,
    socialMedia: {
        twitter: undefined,
        instagram: "sofiagonzaloc",
        facebook: "sofiagonzaloc"
    },
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso práctico de HTML y CSS"
    ],
    rutasAprendizaje: [ // Una ruta tiene varios cursos, razón por la que se crea un ARRAY DE OBJETOS
        { // Ruta 1
            name: "Desarrollo web",
            cursos: [
                " HTML y CSS definitivo",
                "HTML y CSS práctico",
                "Curso responsive design"
            ]
        },
        { // Ruta 2
            name: "Inteligencia artificial y Machine learning",
            cursos: [
                "Python básico",
                "Análisis de negocio",
                "Pensamiento computacional con Python"
            ]
        }
    ]
}
```

Un solo objeto toma alrededor de 30 líneas de código, lo cual puede ser perjudicioso para el procesamiento de nuestro programa. Es por esto que es mejor siempre optar por el uso de clases (o funciones) e instancias de objetos. Todo el código anterior puede resumirse a:

```jsx
class student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        points = undefined,
        cursosAprobados = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        },
        this.points = points;
        this.cursosAprobados = cursosAprobados;
    }
}
```

Una instancia solo necesitaria mínimo 5 líneas de código:

```jsx
const juan = new student({
    name: "JuanDC",
    username: "juandc",
    email: "juan@mail.com",
    twitter: "fjuandc"
})
```

<aside>
💡 **Reto:** Crea una clase rutasAprendizaje y que sus instancias sean las escuelas existentes.

</aside>

```jsx
class rutaAprendizaje{
    constructor({
        name,
        cursos
    }){
        this.name = name;
        this.cursos = cursos;
    }
}

const desarrolloWeb = new rutaAprendizaje({
    name: "Escuela de Desarrollo Web",
    cursos: [
        "Computación básica",
        "Programación básica",
        "Algoritmos y pensamiento lógico básico"
    ]
})

const englishAcademy = new rutaAprendizaje({
    name: "Escuela de Platzi English Academy",
    cursos: [
        "Estrategias para aprender inglés online",
        "Inglés para principiantes",
        "Inglés básico"
    ]
})
```
