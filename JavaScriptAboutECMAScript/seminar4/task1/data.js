const getData = async (url) => {
    try {
        const res = await fetch (url);
        const data = await res.json();
        data.forEach(item => {
            localStorage.setItem(JSON.stringify(item.id), JSON.stringify(item));
         });
    } catch (error) {
        console.log(error.message);
    }
}
const url = 'https://jsonplaceholder.typicode.com/users';
getData(url);


//получаем массив объектов из localStorage
let usersInfo = [];
for(let i=1; i<=localStorage.length; i++) {
    usersInfo.push(JSON.parse(localStorage.getItem([i])));
}
console.log(usersInfo);

//создаем карточки пользователей
const content = document.querySelector('.content');
const contentItems = document.querySelector('.content__items');

for (let i = 0; i < usersInfo.length; i++) {

    //div item
    const userItem = document.createElement('div');
    userItem.classList.add('item');
    contentItems.append(userItem);

    //cross-button
    const itemCrossBtn = document.createElement('button');
    itemCrossBtn.classList.add('item__cross-button');
    itemCrossBtn.setAttribute('id', `${usersInfo[i].id}`);
    userItem.append(itemCrossBtn);

    const itemCrossBtnSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    itemCrossBtnSvg.setAttribute("width", "18");
    itemCrossBtnSvg.setAttribute("height", "18");
    itemCrossBtnSvg.setAttribute("viewBox", "0 0 18 18");
    itemCrossBtnSvg.setAttribute("fill", "none");
    itemCrossBtnSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    const itemCrossBtnSvgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const d = "M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z";
    const fill="#7B6152";

    itemCrossBtnSvgPath.setAttribute("d", d);
    itemCrossBtnSvgPath.setAttribute("fill", fill);

    itemCrossBtnSvg.append(itemCrossBtnSvgPath);
    itemCrossBtn.append(itemCrossBtnSvg);

    //div item__content
    const itemContent = document.createElement('div');
    itemContent.classList.add('item__content');
    userItem.append(itemContent);

    //первый уровень
    const listUlFirstLevel = document.createElement('ul');
    listUlFirstLevel.classList.add('item__content-firstul');
    itemContent.append(listUlFirstLevel);
                    //объект из массива
    for (const key in usersInfo[i]) {
        const listLiFirstLevel = document.createElement('li');
        listLiFirstLevel.classList.add('item__content-firstli');
            //объект по первому ключу
        if (usersInfo[i][key] instanceof Object) {

            let arrayOfKeys = Object.keys(usersInfo[i][key]);
            let arrayOfValues = Object.values(usersInfo[i][key]);

            listLiFirstLevel.innerHTML = `<strong>${key}:</strong>`;
            listUlFirstLevel.append(listLiFirstLevel);

            for (let i = 0; i < arrayOfKeys.length; i++) {
                //второй уровень
                const listUlSecondLevel = document.createElement('ul');
                listUlSecondLevel.classList.add('item__content-secondul');
                listLiFirstLevel.append(listUlSecondLevel);

                const listLiSecondLevel = document.createElement('li');
                listLiSecondLevel.classList.add('item__content-secondli');

                if(typeof arrayOfValues[i] ==='string'){
                    listLiSecondLevel.innerHTML = `<strong>${arrayOfKeys[i]}</strong>: ${arrayOfValues[i]}`;
                    listUlSecondLevel.append(listLiSecondLevel);

                }else if(typeof arrayOfValues[i] === 'object') {

                    let secondArrayOfKeys = Object.keys(arrayOfValues[i]);
                    let secondArrayOfValues = Object.values(arrayOfValues[i]);

                    listLiSecondLevel.innerHTML = `<strong>${arrayOfKeys[i]}</strong>:`;
                    listUlSecondLevel.append(listLiSecondLevel);

                    for (let i = 0; i < secondArrayOfKeys.length; i++) {

                        //третий уровень
                        const listUlThirdLevel = document.createElement('ul');
                        listUlThirdLevel.classList.add('item__content-thirdul');
                        listLiSecondLevel.append(listUlThirdLevel);

                        const listLiThirdLevel = document.createElement('li');
                        listLiThirdLevel.classList.add('item__content-thirdli');
                        listLiThirdLevel.innerHTML = `<strong>${secondArrayOfKeys[i]}</strong>: ${secondArrayOfValues[i]}`;
                        listUlThirdLevel.append(listLiThirdLevel);
                    }
                }
            }
        }else {

            listLiFirstLevel.innerHTML = `<strong>${key}:</strong> ${usersInfo[i][key]}`;
            listUlFirstLevel.append(listLiFirstLevel);
        }
    }
}

// удяляем карточку пользователя из секции content
function removeUserFromSection(usersInfo) {
    const contentItems = document.querySelector('.content__items');
    contentItems.addEventListener('click', function(event) {
        const target = event.target.closest('.item__cross-button');
        const userCard = event.target.closest('.item');
        if(target){
            for (let i = 1; i <= localStorage.length; i++) {
                if(localStorage.key(i) === target.id){
                    localStorage.removeItem(localStorage.key(i));
                }
            }
            userCard.remove();
        }
    });
}
content.addEventListener('click', removeUserFromSection);