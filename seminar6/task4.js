const buttonTask4Sum = () => {
    let useNumA = Number(prompt('Введите первое число'));
    let useNumB = Number(prompt('Введите второе число'));
    const summa = (a, b) => a + b;
    alert(`Сумма чисел = ${summa(useNumA, useNumB)}`)
    console.log(`Сумма чисел = ${summa(useNumA, useNumB)}`);
}

const buttonTask4Dif = () => {
    let useNumA = Number(prompt('Введите первое число'));
    let useNumB = Number(prompt('Введите второе число'));
    const difference = (a, b) => a - b;
    alert(`Разность чисел = ${difference(useNumA, useNumB)}`)
    console.log(`Разность чисел = ${difference(useNumA, useNumB)}`);
}

const buttonTask4Mult = () => {
    let useNumA = Number(prompt('Введите первое число'));
    let useNumB = Number(prompt('Введите второе число'));
    const multiplication = (a, b) => a * b;
    alert(`Произведение чисел = ${multiplication(useNumA, useNumB)}`)
    console.log(`Произведение чисел = ${multiplication(useNumA, useNumB)}`);
}

const buttonTask4Divis = () => {
    let useNumA = Number(prompt('Введите первое число'));
    let useNumB = Number(prompt('Введите второе число'));
    const division = (a, b) => a / b;
    alert(`Частное чисел = ${division(useNumA, useNumB)}`)
    console.log(`Частное чисел = ${division(useNumA, useNumB)}`);
}

// summa()
// difference()
// multiplication()
// division()