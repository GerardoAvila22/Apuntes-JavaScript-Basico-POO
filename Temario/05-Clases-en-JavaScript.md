## ****Clases en JavaScript****

Existen varias formas de crear un objeto en Javascript

Existen varias formas de crear un objeto en Javascript

<aside>
💡 No existe diferencia entre crear un objeto con una clase que con un constructor. Diferentes métodos con el mismo resultado

</aside>

### Con una función

Se declara una función junto con sus parámetros. En caso de querer incluir una función es posible incluirla dentro de la misma función como una variable o escribirla fuera de la función.

Para crear una instancia solo es necesario crear la constancia del objeto junto con sus parámetros. 

```jsx
function student(name, age, cursosAprobados) {
    this.name = name
    this.age = age
    this.cursosAprobados = cursosAprobados
}
student.prototype.aprobarCurso = function (curso) { // Añade la función aprobarCurso al objeto prototipo student
    this.cursosAprobados.push(curso)
}
// Instancia
const juanita = new student(
    "Juanita Alejandra",
    15,
    ["POO", "Introducción a videojuegos", "Introducción a diseño"]
)
```

### Con una clase

Se crea una clase haciendo uso del [método constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor) para declarar los parámetros. Las funciones pueden ser declaradas dentro de la misma clase.

La instancia se declara de la misma manera que si fuera una función. 

```jsx
class student2 {
    constructor(name, age, cursosAprobados) {
        this.name = name
        this.age = age
        this.cursosAprobados = cursosAprobados
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito)
    }
}
// Instancia
const miguel = new student2(
    "Miguel Álvarez",
    25,
    [
        "Análisis de negocios",
        "Principios de visualización de datos"
    ]
)
```

![Untitled](img/Untitled%20(7).png)
