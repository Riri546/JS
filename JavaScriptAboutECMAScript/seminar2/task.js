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

}

