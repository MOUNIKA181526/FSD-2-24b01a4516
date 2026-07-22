"use strict";
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log(this.id, this.name);
    }
}
let s1 = new Student(101, "Mounika");
s1.display();
