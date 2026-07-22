class Student1 {
    readonly stud_entId: number;

    constructor(id: number) {
        this.stud_entId = id;
    }
}

let st = new Student1(101);

console.log(st.stud_entId);