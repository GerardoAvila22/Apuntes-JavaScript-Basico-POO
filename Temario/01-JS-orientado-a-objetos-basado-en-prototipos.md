## ****JavaScript: orientado a objetos, basado en prototipos****

Las clases en Javascript no son iguales a otros lenguajes de programación. Los lenguajes de programación están orientados a objetos y basados en clases, mientras que en Javascript está orientado a objetos y orientado a prototipos.

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4815808c-21fd-433a-ab06-e57c9cad41a9/d2a86e9a-cd88-4ca3-b4f3-dd1bc9122592/Untitled.png)

Todos los objetos están construidos con prototipos

### **Prototype-based programming**

**La programación basada en prototipos** es un estilo de [programación orientada a objetos](https://developer.mozilla.org/es/docs/Glossary/OOP) en el que las clases no se definen explícitamente, sino que se derivan de agregar propiedades y métodos a una instancia de otra clase o, con menos frecuencia, agregarlos a un objeto vacío.

En palabras simples: este tipo de estilo permite la creación de un objeto sin definir primero su clase.

### **Diferencia entre lenguajes basados en clases y prototipos:**

**Lenguaje basado en clases**

Se basan en el concepto de entidades o clases

- **Clases**: Define las propiedades que caracterizan un determinado conjunto de objetos. .
    
    Una clase es una entidad abstracta
    
    - Ejemplo: La clase empleado define a un conjunto de empleados.
- **Instancias**: Instanciación de una clase, de uno de sus miembros. Una instancia tiene exactamente las mismas propiedades de su clase padre, ni una más ni una menos.
    - Ejemplo: Victoria es una instancia de la clase empleados.

**Lenguaje basado en prototipos**

No hace las mismas distinciones que los lenguajes basados en clases, simplemente tiene objetos.

- Toma el concepto de objeto prototípico. Un objeto se usa como plantilla a partir del cual se obtiene un conjunto inicial de propiedades de un nuevo objeto.
- Cualquier objeto puede especificar sus propias propiedades.
- Cualquier objeto puede ser usado como prototípico de otro objeto.
