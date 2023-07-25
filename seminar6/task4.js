const buttonTask4Sum = () => {
    let useNumA = Number(prompt('Введите первое число'));
    let useNumB = Number(prompt('Введите второе число'));
    const summa = (a, b) => a + b;
    alert(`Сумма = ${summa(useNumA, useNumB)}`)
    console.log(`Сумма = ${summa(useNumA, useNumB)}`);
}

const buttonTask4Dif = () => {
    let useNumA = Number(prompt('Введите первое число'));
    let useNumB = Number(prompt('Введите второе число'));
    const difference = (a, b) => a - b;
    alert(`Разность = ${difference(useNumA, useNumB)}`)
    console.log(`Разность = ${difference(useNumA, useNumB)}`);
}

// summa()
// difference()
// multiplication()
// division()