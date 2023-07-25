let useMony = Number(prompt('Введите сумму вашего зароботка до вычита НДФЛ(13%)'));
const salary = (mony) => mony * 0.87;

function typeCheck(mony) {
    if (isNaN(mony)) {
        alert('Значение задано не верно!');
        console.log('Значение задано не верно!');
    } else {
        alert(`Ваш заработок за вычетом НДФЛ, составляет: ${salary(useMony)}`);
        console.log(`Ваш заработок за вычетом НДФЛ, составляет: ${salary(useMony)}`);
    }
}

typeCheck(useMony);
