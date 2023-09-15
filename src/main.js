const xapato = {
    name: "Xapato",
    age: 1,
    cursosAprobado: ["Kinder", "Primaria"],

    //metodo
    aprobarCurso(nuevoCursito){
        this.cursosAprobado.push(nuevoCursito);
    }
};

console.log(xapato.cursosAprobado);

//Agregamo un grado mas a xapato
// xapato.cursosAprobado.push("Secundaria");

// console.log(xapato.cursosAprobado);

// console.log(xapato.age);
// xapato.age += 1;
// console.log(xapato.age);

//usamos el metodo
xapato.aprobarCurso('Preparatoria');
console.log(xapato.cursosAprobado);


function Student (name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function(nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso);
    // }
} 

Student.prototype.aprobarCurso = function (nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);  
}

const landis = new Student(
    "Landis", 
    18,
    ["Kinder", "Primaria", "Secundaria"],
    );

console.log(landis);


landis.aprobarCurso('Preparatoria');

console.log(landis);