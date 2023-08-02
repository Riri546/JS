// Задание 1
const task1 = () => {
    const arr = [1, 5, 7, 9];
    console.log(Math.min(...arr));
}
// Задание 2
const task2 = () => {
    const createCounter = () => {
        let counter = 0;
        const result = {
            increment: function () {
                return ++counter;
            },
            decrement: function () {
                return --counter;
            }
        }

        result.run = function () {
            return ++counter;
        };

        const decrement = () => {
            return --counter;
        };



        return increment(), decrement();
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

