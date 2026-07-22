class Employee {
    public name: string;
    private salary: number;
    protected dept: string;

    constructor(name: string, salary: number, dept: string) {
        this.name = name;
        this.salary = salary;
        this.dept = dept;
    }

    display() {
        console.log(this.name);
    }
}

let employee = new Employee("John", 50000, "IT");
employee.display();