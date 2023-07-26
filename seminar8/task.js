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
    const a = [1, 2, 3, 4, 5, 6, 7];
    console.log(`Данн массив ${a}, удалим эллементы 4 и 5`);
    alert(`Данн массив ${a}, удалим эллементы 4 и 5`);
    a.splice(3, 2);
    alert(`Измененный массив ${a}`);
    console.log(`Измененный массив ${a}`);
}

// Задание 3
const task3 = () => {

}