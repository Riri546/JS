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
        constructor(name, department) {
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
    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }
    
    class Order {
        product = this.addProducts;

        constructor(orderNumber) {
            this.orderNumber = orderNumber;
        }

        addProducts = () => {

        }

        getTotalPrice = () => {

        }
    }




    const order = new Order(12345);
    const product1 = new Product('Phone', 500);
    order.addProduct(product1);
    const product2 = new Product('Headphones', 100);
    order.addProduct(product2);
    console.log(order.getTotalPrice());
}

// Задание 3
const task3 = () => {

}