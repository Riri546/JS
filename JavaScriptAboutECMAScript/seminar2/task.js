// Задание 1
const task1 = () => {
    // Класс книги 
    class Book {
        // Свойства класса
        title = 'Мара и Морок';
        author = 'Лия Арден';
        publishingHouse = 'Эксмо';
        series = 'Охотники за мирами';
        yearPublication = 2022;
        pages = 352;

        // Конструктор класса 
        constructor() {
        }

        // Метод класса
        displayinof = () => {
            console.log(`
            Название книги: ${this.title}
            Автор: ${this.author}
            Издательство: ${this.publishingHouse}
            Серия: ${this.series}
            Год публикации: ${this.yearPublication}
            Количество страниц: ${this.pages} `);
        }
    }

    // Создаем экземпляр класса
    const Mara = new Book();

    // Обращение к объекту класса
    console.log(Mara.title);

    // Вызов метода объекта
    Mara.displayinof();
}

// Задание 2
const task2 = () => {
    // Класс студент
    class Student {
        // Конструктор класса 
        constructor(name, age, grade) {
            this.name = name;
            this.age = age;
            this.grade = grade;
        }

        // Метод класса
        displayinof = () => {
            console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Grade: ${this.grade}`);
        }
    }

    // Создаем экземпляры класса
    const student1 = new Student('Lilia Loshakova', 17, '11th grade');
    const student2 = new Student('John Smith', 16, '10th grade');
    const student3 = new Student('Jane Doe', 17, '11th grade');

    // Вызов методов объекта
    student1.displayinof();
    student2.displayinof();
    student3.displayinof();
}

// Задание 3
const task3 = () => {
    useName = prompt('Введите ваше имя');
    useAge = Number(prompt('Ваш возраст'));

    // Класс для работы с банком
    class Bank {
        // Добвление названия банка
        constructor(name) {
            this.name = name;
            console.log(name);
        }

        // Метод добавления нового клиента
        addClient = (client) => {
            this.client = client;
        }

        // Метод открытия счета
        openAccount = (client, accountNumber, balance) => {
            this.client = client;
            this.accountNumber = accountNumber;
            this.balance = balance;
            console.log('Клиент: ', this.client,'Номер счета: ', this.accountNumber);
        }

        // Метод внесения денежных средств на счет
        deposit = (amount) => {
            this.balance += amount;
            console.log(`Пополнение счета ${this.accountNumber} на сумму ${amount}`);
        }

        // Метод снятия денежных средств со счета
        withdraw = (amount) => {
            if (amount > this.balance) {
                console.log(`Недостаточно средств на счете ${this.accountNumber}`);
            } else {
                this.balance -= amount;
                console.log(`Снято ${amount} со счета ${this.accountNumber}`);
            }
        }

        // Метод просмотра баланса
        checkBalance = () => {
            console.log(`Текущий баланс: ${this.balance}`);
        }
    }

    // Класс с методами принимающими имя и возраст клиента
    class Client {
        constructor(name, age) {
            this.name = name;
            this.age = age;

            console.log(`
            Имя клиента: ${name} 
            Возраст: ${age}`);
        }
    }

    const bank = new Bank('Мой Банк');
    const client1 = new Client('Иван', 25);
    const client2 = new Client('Мария', 30);
    const client3 = new Client(useName, useAge);

    bank.addClient(client1);
    bank.addClient(client2);
    bank.addClient(client3);

    bank.openAccount(client1, 1000, 123456789);
    bank.deposit(200);
    bank.checkBalance();

    bank.openAccount(client2, 500, 987654321);
    bank.withdraw(100);
    bank.checkBalance();
    
    bank.openAccount(client3, 150, 1200);
    bank.withdraw(500);
    bank.checkBalance();
}