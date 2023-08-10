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

    const employee = new Employee('John Smith')
    employee.displayInfo();

    class Manager extends Employee {
        // name = Employee.prototype.name;
        department = this.department;
        // constructor(department) {
        //     this.department = department;
        //     // this.name = name;
        // }
        

        displayInfo = () => {
            // console.log(`Name: ${this.name}`);
            console.log(`Department: ${this.department}`);
        }
        __proto__ = Employee;
    }
    const manager = Manager('jdkk', 'dkdk');
    // Object.getPrototypeOf(Manager);
    // console.log(Object.getPrototypeOf(Manager));
    manager.displayInfo();
    // console.log(Manager.prototype.displayInfo());;
}

// Задание 2
const task2 = () => {

}

// Задание 3
const task3 = () => {

}