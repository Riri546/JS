// Задание 1
const task1 = () => {
    const getAsyncAwaitData = async (api) => {
        const res = await fetch(api);
        const json = await res.json();
        localStorage.setItem('users', JSON.stringify(json)); // Сохраняем
        return json;
    };

    const api = 'https://jsonplaceholder.typicode.com/users';


    try {
        const newData = getAsyncAwaitData(api);
        // const newData = await getAsyncAwaitData(api);
        console.log(newData);
        const pictureBoxEl = document.querySelector('.cards-box');
        newData.forEach((element) => {
            const picture = `
              <div class="card" id="${element.id}"><!-- Добавили ID -->
                  <h3>Пользователь ${element.id}</h3>
                  <p class="name">Имя: ${element.name}</p>
                  <p class="username">Ник: ${element.username}</p>
                  <p class="email">Email: ${element.email}</p>
                  <button class="btn__del">Удалить пользователя</button>
              </div>
              `

            pictureBoxEl.insertAdjacentHTML("beforeend", picture)
        })
        const deleteBtn = document.querySelectorAll('.btn__del');
        deleteBtn.forEach((button) => {
            button.addEventListener('click', () => {
                const product = button.closest('.card');
                product.remove();
                // Отфильтровали массив
                const filterData = newData.filter(item => item.id !== product.id);
                localStorage.setItem('users', JSON.stringify(filterData)); // Сохранили
            })
        })
    } catch (error) {
        console.error('что-то пошло не так');
    }
}

// Задание 2
const task2 = () => {

}