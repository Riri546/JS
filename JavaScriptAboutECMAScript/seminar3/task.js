// Задание 1
const task1 = () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }

        displayInfo = () => {
            console.log(`Name: ${this.name}`);
        }
    }

    class Manager extends Employee {
        constructor(name,department) {
            super();
            this.name = name;
            this.department = department;
          }
        
        displayInfo = () => {
            console.log(`Name: ${this.name}`);
            console.log(`Department: ${this.department}`);
        }
    }    
    
    const employee = new Employee('John Smith')
    employee.displayInfo();

    const manager = new Manager("Jane Doe", "Sales");
    manager.displayInfo();
}

// Задание 2
const task2 = () => {

}

// Задание 3
const task3 = () => {

}