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
        constructor(orderNumber) {
            this.orderNumber = orderNumber;
            this.amount = 0;
            this.products = [];
            this.addProduct = function (newObject) {
                this.products.push(newObject);
            };
        }

        getTotalPrice() {
            for (let i = 0; i < this.products.length; i++) {
                this.amount += this.products[i].price;
            }
            return this.amount;
        }
    }

    const order = new Order(12345);
    console.log(`Заказ №${order.orderNumber}`);

    const product1 = new Product('Phone', 500);
    order.addProduct(product1);
    console.log(`Товар 1: ${order.products[0].name} цена ${order.products[0].price}`);

    const product2 = new Product('Headphones', 100);
    order.addProduct(product2);
    console.log(`Товар 2: ${order.products[1].name} цена ${order.products[1].price}`);

    console.log(`Общая цена заказа: ${order.getTotalPrice()}`);
}

// Задание 3
const task3 = () => {
    class Student {
        constructor(_name, _age, _averageGrade) {
            this._name = _name;
            this._age = _age;
            this._averageGrade = _averageGrade;
        }

        setName(value) {
            return this._name = value;
        }

        getName() {
            return this._name;
        }

        setAge(value) {
            this._age = value;
        }

        getAge() {
            return this._age;
        }

        setAverageGrade(value) {
            this._averageGrade = value;
        }

        getAverageGrade() {
            return this._averageGrade;
        }

        displayInfo = () => {
            console.log(`Имя: ${this.getName()}`);
            console.log(`Возраст: ${this.getAge()}`);
            console.log(`Средний балл: ${this.getAverageGrade()}`);
        }
    }

    const student = new Student();
    student.setName('Питер Паркер');
    student.setAge(20);
    student.setAverageGrade(85);
    student.displayInfo();
}