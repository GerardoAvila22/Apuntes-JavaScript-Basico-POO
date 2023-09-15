## ¿Qué es la herencia?

Mientras que la abstracción nos permite crear instancias de clases para asi crear objetos. La herencia nos permite crear clases a partir de otras. 

En el caso del proyecto actual tenemos tres tipos de estudiantes: free, basic y expert. Todos estos pueden heredar atributos de una clase madre.

Para heredar atributos de una clase se utiliza la palabra clave `extend`.

```jsx
class Student{
	constructor({name}){
		this.name = name;
	}
}

class FreeStudent *extends* Student;
```