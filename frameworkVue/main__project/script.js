var app1 = new Vue({
    el: '#app-1',
    data: {
        posts (){
            return { topic: ['Kitchan Design', 'Living Design', 'Interior Design']}
        }
        // newsArticles: [
        //     {
        //         post1: [
        //             {
        //                 topic: 'Kitchan Design',
        //                 title: 'Let’s Get Solution For Building Construction Work',
        //                 date: '26 December,2022',
        //             }
        //         ],
        //         post2: [
        //             {
        //                 topic: 'Kitchan Design',
        //                 title: 'Let’s Get Solution For Building Construction Work',
        //                 date: '26 December,2022',
        //             }
        //         ]
        //     },
        // ]
    },
    // methods: {
    //     post1: function () {
    //     }
    //     adding: function () {
    //         app2.todos.push({ text: 'Добавлен новый элемент' })
    //     },
    //     remove: function(index) {
    //         this.todos.splice(index, 1);
    //       }
// }
})