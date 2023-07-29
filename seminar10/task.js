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

    // const dislikesCount = comments.find((count) => count.dislikes)

    console.log(`Автор: ${post.author}
    Не понравился: ${post.comments.dislikes} 
    Идентификатор пользователя: ${post.comments.userId} 
    Текст: ${post.comments.text}`);
}

// Задание 3
const task3 = () => {

}

// Задание 4
const task4 = () => {

}