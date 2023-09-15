import { Comment } from "./Comment";
import { Student } from "./Student";

class TeacherStudent extends Student {
    // Tu código aquí 👈
    constructor({props, 
        skills = []
    }) {
        super(props);
        this.skills = skills;
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            studentName: this.name,
            studentRole: `(profesor de ${this.skills.join})`,
            content: commentContent,
            
        });
        return comment.publicar();
    }


}


const skills = ["js", "python", "mongodb"];
  const props = {
    name: "Erik Ochoa",
    username: "elyager"
  };

  const profesor = new TeacherStudent(props, skills);
  profesor.publicarComentario('Mi primer comentario');