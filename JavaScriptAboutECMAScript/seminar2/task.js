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
        name = '';
        age = ;
        grade = 'Эксмо';

        // Конструктор класса 
        constructor() {
        }

        // Методы класса
        displayinof = () => {
            console.log(`
            Имя: ${this.title}
            Возраст: ${this.author}
            Класс: ${this.publishingHouse}
            `);
        }
    }

    // Создаем экземпляр класса
    const Mara = new Book();

    // Обращение к объекту класса
    console.log(Mara.title);

    // Отложенный вызов методов объекта
    setTimeout(Mara.displayinof(), 2000);
}

// Задание 3
const task3 = () => {

}

