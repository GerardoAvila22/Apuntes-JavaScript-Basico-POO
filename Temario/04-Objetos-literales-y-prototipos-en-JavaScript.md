## ****Objetos literales y prototipos en JavaScript****

### Función constructora

- Una función constructora es la que nos ayuda a crear un objeto.
- Cuando creamos una función constructora se crea un objeto prototipo también. El prototipo constructor tiene una referencia a la función constructora original.

![Untitled](img/Untitled(4).png)

- Estas instancias también tienen una propiedad llamada `_proto_` . Esto es una referencia al prototipo de su constructor. `Dog.prototype` en este caso.

![Untitled](img/Untitled%20(5).png)

- Podemos salvar memoria añadiendo nuevas propiedades al prototipo que todas las instancias puedan compartir, en lugar de crear nuevas copias de cada propiedad cada vez.


![Untitled](img/Untitled%20(6).png)

### Funciones en un objeto

Existen dos formas de crear una función dentro de un objeto:

```jsx
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "HTML y CSS definitivo",
        "HTML y CSS práctico",
    ],
    aprobarCurso: function(){
        ...
    }
}
```

```jsx
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "HTML y CSS definitivo",
        "HTML y CSS práctico",
    ],
    aprobarCurso(){
        ...
    }
}
```

<aside>
💡 https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co

</aside>
