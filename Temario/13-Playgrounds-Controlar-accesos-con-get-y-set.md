En este reto dada la siguiente clase:

```jsx
export class Course {
  constructor({
    name,
    classes = [],
  }) {
    this.name = name;
    this.classes = classes;
  }

  get name() {

  }

  set name(nuevoNombrecito) {

  }
}
```

Usando el set de la propiedad name valida siempre que se le quiera asignar un valor lo siguiente:

- Que sea de tipo string.
    -  Si es string convierte la primera letra de cada palabra del nombre en mayúsculas

- Si no es un string no se cambia el valor de la propiedad name.
La solución debería tener un input y output como los siguientes:

**Input**

```jsx
const courseName = "curso de programación básica"
const nombreMaysuculas = new Course({
    name: courseName,
})
nombreMayusculas.name
```

**Output**

```jsx
'Curso De Programación Básica'
```
**Solucion**
```jsx
class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }

  get name() {
    return this.name;
  }

  set name(nuevoNombrecito) {
    const isString = typeof nuevoNombrecito;
    if (isString === "string") {
      this.name = nuevoNombrecito
        .map((palabra) => {
          return palabra[0].toUpperCase() + palabra.substring(1);
        })
        .join(" ");
    }
  }
}

```
