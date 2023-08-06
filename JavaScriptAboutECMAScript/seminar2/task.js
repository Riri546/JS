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

        // Методы класса
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

    // Отложенный вызов методов объекта
    setTimeout(Mara.displayinof(), 2000);
}

// Задание 2
const task2 = () => {
    // Класс студент
    class Student {
        // Свойства класса
        name = 'Lilia Loshakova';
        age = 17;
        grade = '11th';

        // Конструктор класса 
        constructor() {
        }

        // Методы класса
        displayinof = () => {
            console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Grade: ${this.grade}`);
        }
    }

    // Создаем экземпляры класса
    const student1 = new Student();
    const student2 = new Student('John Smith', 16, '10th');
    student2.displayinof();
    // const student3 = new Student();


    // Отложенный вызов методов объекта
    setTimeout(student1.displayinof(), 1000);
    setTimeout(student2.displayinof(), 10000);
    // setTimeout(student3.displayinof(), 5000);

}

// Задание 3
const task3 = () => {

}

