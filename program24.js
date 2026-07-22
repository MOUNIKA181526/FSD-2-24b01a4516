"use strict";
class Employee {
    name;
    salary;
    dept;
    constructor(name, salary, dept) {
        this.name = name;
        this.salary = salary;
        this.dept = dept;
    }
    display() {
        console.log(this.name);
    }
}
let emp = new Employee("John", 50000, "IT");
emp.display();
