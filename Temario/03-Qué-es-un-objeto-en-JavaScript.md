## ****Qué es un objeto en JavaScript****

### ¿Qué es un objeto en Javascript?

- Todos los lenguajes de programación tienen estructuras de datos
- Casi todos los lenguajes de programación tienen arrays

<aside>
💡 Los objetos literales **no** son lo mismo que un objeto de POO

</aside>

<aside>
💡 Un objeto es cualquier instancia del prototipo `Object`
</aside>

![Untitled (1).png](img/Untitled%20(1).png)

### Objeto

Estructuras de datos formadas por métodos y atributos, los cuales hereda de su prototipo padre.

Los objetos son instancias de ese prototipo, particularmente cuando fue creado por el desarrollador (de lo contrario son objetos literales).

Un objeto puede tener:

- **Atributos:** Pueden ser un sustantivo, define las características de un objeto.
- **Métodos**: Son verbos, acciones que puede hacer el objeto.

```jsx
function student() {
    this.name = "Nombre"
    this.age = 18
    this.points = 750
}

const juanita = new student()
```

En la consola aparecerá como:

![Untitled (1).png](img/Untitled%20(2).png)

### **Objeto literal**

- Se distinguen de los objetos POO porque **no son instancias** de un prototipo creado por el desarrollador.

- Los objetos literales son instancias del prototipo `object` creado por defecto en Javascript.

```jsx
const Natalia = {
	'Name' : 'Natalia',
	'Age' : 20,
	'Rank' : 2000
}
```

En la consola aparecerá como:

![Untitled (1).png](img/Untitled%20(3).png)

### Prototipo

- Estructura de código a partir de la cual se crean objetos, ya que guarda los atributos y métodos que luego podrán ser heredados por sus instancias.
- Es un "molde" de objetos.

```jsx
function student(){
	this.name = 'Nombre'
	this.age = '18'
	this.points = '750'
}

const Juanita = new Student()
```

### Atributo `_proto_`

Atributo donde se guardarán los métodos de las estructuras de datos que tiene Javascript.

Se hereda a partir de los prototipos por defecto de Javascript para cada estrutura de datos en particular. Ejemplo: prototipos `Object` y `Array`

También se hereda a los objetos, ya que estos son instancias de algún prototipo creado por el desarrollador y del prototipo Object.

**¿Todo en Javascript es un objeto?**

https://stackoverflow.com/questions/9108925/how-is-almost-everything-in-javascript-an-object

