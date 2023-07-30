// Задание 1
const task1 = () => {
    const numbers = {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
        keyin4: 4,
        keyin5: 5,
        keyin6: 6,
        keyin7: 7,
    }

    console.log('Все значения больше или равные 3: ');
    for (const key in numbers) {
        if (numbers[key] >= 3) {
            console.log(numbers[key]);
        }
    }
}

// Задание 2
const task2 = () => {
    const post = {
        author: "John", // вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2, // вывести это число
                },
            },
            {
                userId: 5, // вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", // вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1,
                },
            },
        ],
    };

    console.log(`
    Автор: ${post.author}
    Не понравился: ${post.comments[0].rating.dislikes} 
    Идентификатор пользователя: ${post.comments[1].userId} 
    Текст: ${post.comments[1].text}`);
}

// Задание 3
const task3 = () => {
    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];

    console.log(`Изначальная цена
    Цена продукта под номером ${products[0].id} = ${products[0].price} ед;
    Цена продукта под номером ${products[1].id} = ${products[1].price} ед;
    Цена продукта под номером ${products[2].id} = ${products[2].price} ед;`);

    products.forEach(element => {
        element.price = (element.price * 0.85);
    });

    console.log(`С учетом скидки
    Цена продукта под номером ${products[0].id} = ${products[0].price} ед;
    Цена продукта под номером ${products[1].id} = ${products[1].price} ед;
    Цена продукта под номером ${products[2].id} = ${products[2].price} ед;`);
}

// Задание 4
const task4 = () => {

}