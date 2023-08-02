// Задание 1
const task1 = () => {
    const arr = [1, 5, 7, 9];
    console.log(Math.min(...arr));
}
// Задание 2
const task2 = () => {
    const createCounter = () => {
        let counter = 0;
        const increment = () => {
            return ++counter;
        }
        decrement = () => {
            return ++counter;
        }

        const result = {
            increment: increment(),
            decrement: decrement ()
        }
        return result;
    }

    // Создаем счетчик.
    const counter1 = createCounter();
    console.log(counter1()); // 1
    console.log(counter1());// 2
    console.log(counter1());

}

// Задание 3
const task3 = () => {

}

