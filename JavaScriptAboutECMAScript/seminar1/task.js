// Задание 1
const task1 = () => {
    const arr = [1, 5, 7, 9];
    console.log(Math.min(...arr));
}
// Задание 2
const task2 = () => {
    const createCounter = () => {
        let counter = 0;

        function increment() {
            counter++;
            console.log(counter);
        }

        function decrement() {
            counter--;
            console.log(counter);
        }

        return {
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

}

