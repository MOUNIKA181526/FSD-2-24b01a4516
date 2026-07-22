"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    showDetails() {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }
}
const e1 = new Employee("Mounika", 50000, "IT");
e1.showDetails();
//# sourceMappingURL=Exp-3(2).js.map