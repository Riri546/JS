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
    /* Создайте класс BankAccount, который представляет банковский счет.
У него должны быть свойства accountNumber (номер счета) и balance
(баланс), а также методы deposit(amount) для пополнения счета и
withdraw(amount) для снятия денег со счета. Класс должен иметь
также статическое свойство bankName, которое содержит название
банка.
const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account
1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account
1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account
1234567890 */

    class BankAccount {
        constructor(accountNumber, balance) {
            this.accountNumber = accountNumber;
            this.balance = balance;
        }

        bankName = 'Мой банк';

        deposit(amount) {
            this.balance += amount;
            console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
        }

        withdraw(amount) {
            if (amount > this.balance) {
                console.log(`Insufficient funds in account ${this.accountNumber}`);
            } else {
                this.balance -= amount;
                console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
            }
        }
    }

    const account1 = new BankAccount('1234567890', 1000);
    account1.deposit(500);
    account1.withdraw(200);
    account1.withdraw(1500);
}

