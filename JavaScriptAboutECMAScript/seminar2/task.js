// Задание 1
const task1 = () => {
    const arr = [1, 5, 7, 9];
    console.log(Math.min(...arr));
}

// Задание 2
const task2 = () => {
    const createCounter = () => {
        let counter = 0;

        function increment() { //Увеличевает показатель на 1
            counter++;
            console.log(counter);
        }

        function decrement() { //Уменьшает показатель на 1
            counter--;
            console.log(counter);
        }

        return { //Создаем объект для возврата результата
            increment: increment,
            decrement: decrement
        };
    }

    // Создаем счетчик.
    const counterbutton = createCounter();
    counterbutton.increment(); // 1
    counterbutton.increment(); // 2
    counterbutton.decrement(); // 1
}

// Задание 3
const task3 = () => {
    function factorial(number) {
        if (number === 0 || number === 1) {
            return 1;
        }
        return factorial(number - 1) * number;
    }

    console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
    console.log(factorial(0)); // выводит 1 (по определению факториала)
}

