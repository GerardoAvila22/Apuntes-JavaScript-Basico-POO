class Comment {
    constructor({
        content,
        studentName,
        studentRole = "Estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.like = 0;
    }

    publicar(){
        console.log(`${this.studentName}  ${this.studentRole} tiene ${this.like} likes`);
        console.log(`${this.content}`);
        
    }

}


class Student{
    constructor({
        name,
        email = "@platzi",
        username = "usuario",
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        learningPaths = [],
        approvedCourses = [],
    }){
        this.email = email,
        this.name = name,
        this.username = username,
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.learningPaths = learningPaths,
        this.approvedCourses = approvedCourses
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name
        });
        
        comment.publicar();
    }

}


class FreeStudent extends Student{
    //nos permite referenciar llamar al constructor de la clase padre
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
        }
    }

}


class BasicStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en ingles");
        }
    }

}

class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}


class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "Profesor",
        });
        
        comment.publicar();
    }
}


class Course{
    constructor(
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    ){
        this.name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get getName(){
        return this._name;
    }

    set setName(name){
        this._name = name;
    }


}


const cursoPOO = new Course({
    name: "Curso POO",
    lang: "english",
});


const cursoBasic = new Course({
    name: "Curso Basica",
    isFree: true,
});


const gerardo = new TeacherStudent({
    name: "Gerardo"
});

const vainilla = new BasicStudent({
    name: "vainilla"
});


gerardo.publicarComentario("Tu respuesta es correcta");



// const gerardo = new FreeStudent({name: "gerardo"});
// const vainilla = new BasicStudent({name: "vainilla"});


// gerardo.approveCourse(cursoPOO);

// vainilla.approveCourse(cursoPOO);