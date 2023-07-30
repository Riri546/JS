const buttonTask3 = () => {
    let firstNumber = Number(prompt('Введите первое число'));
    let secondNumber = Number(prompt('Введите второе число'));
    let thirdNumber = Number(prompt('Введите третье число'));
    alert(`Вы ввели значения ${firstNumber}, ${secondNumber}, ${thirdNumber}`)

    const max = (firstNum, secondNum, thirdNum) => Math.max(firstNum, secondNum, thirdNum);

    console.log(`Максимальное значение: ${max(firstNumber, secondNumber, thirdNumber)}`);
    alert(`Максимальное значение: ${max(firstNumber, secondNumber, thirdNumber)}`);
}
