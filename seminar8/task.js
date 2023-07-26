// Задание 1
const task1 = () => {
    function even(a) {
        return a % 2 === 0;
    }

    for (let i = 0; i < 11; i++) {
        if (i === 0) {
            console.log(`${i} - это ноль`);
        } else if (even(i)) {
            console.log(`${i} - четное число`);
        } else {
            console.log(`${i} - нечетное число`);
        }
    }
}

// Задание 2
const task2 = () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    console.log(`Данн массив ${array}, удалим эллементы 4 и 5`);
    array.splice(3, 2);
    console.log(`Измененный массив ${array}`);
}

// Задание 3
const task3 = () => {
    const array = [];
    for (let i = 0; i <= 4; i++) {
        array.push(Math.ceil(Math.random() * (9 - 0) + 0));

    }
    console.log(`Сгененрированный массив: ${array}`);

    const sum = array.reduce(add, 0);

    function add(accumulator, a) {
        return accumulator + a;
    }

    console.log(`Сумма чисел массива: ${sum}`);
    console.log(`Минимальное значение в массиве: ${Math.min.apply(Math, array)}`);

    if (array.indexOf(3) !== -1) {
        console.log(`В массиве есть число 3`);
    }
}

// Задание 4 *Необязательное*
const task4 = () => {
    for (let i = 1; i < 21; i++) {
        let slide = ""
        for (let j = 1; j <= i; j++) {
            slide += "x";
        }
        console.log(slide);
    }
}