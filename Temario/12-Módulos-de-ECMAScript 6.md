## Módulos de ECMAScript 6

<aside>
💡 En caso de que quisieramos trabajar con módulos en Javascript se recomienda cambiar la extensión de `.js` a `.mjs`. Esto nos ayuda a saber qué archivo es un módulo y cuál no.

</aside>

### Cómo exportar

Dos formas: 

- Colocar en frente de cada elemento la palabra clave `export`

```jsx
export class learningPath{
    constructor({
        name,
        courses = []
    }){
        this.name = name;
        this.courses = courses;
    }
}
```

- Exportar en una sola declaración las características a exportar

```jsx
export {PlatziClass, Student, LearningPaths};
```

### Cómo importar

Se hace en el script en el cuál queremos usar los elementos a importar:

```jsx
import {PlatziClass, Student, LearningPaths} from'/ruta';
```

Para que los módulos funcionen de forma correcta hay que agregar un `type="module"` al tag de script en HTML

```jsx
<script src="./main.js" type="module"></script>
```