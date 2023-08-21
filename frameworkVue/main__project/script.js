const app = {
    data() {
        return {
            articlesData: [
                { id: 1, src: 'blog.html', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', topic: 'Kitchan Design' },
                { id: 2, src: 'blog.html', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', topic: 'Living Design' },
                { id: 3, src: 'blog.html', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', topic: 'Interior Design' },
                { id: 4, src: 'blog.html', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', topic: 'Kitchan Design' },
                { id: 5, src: 'blog.html', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', topic: 'Living Design' },
                { id: 6, src: 'blog.html', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', topic: 'Interior Design' }
            ]
        };
    }
};

Vue.createApp(app).mount('#app1');


// var app1 = new Vue({
//     el: '#app-1',
//     data: {
//         linkHref: "blog.html",
//         post1: [{
//             topic: 'Kitchan Design',
//             title: 'Let’s Get Solution For Building Construction Work',
//             date: '26 December,2022',
//         }]
//     }
// });

// var app2 = new Vue({
//     el: '#app-2',
//     data: {
//         linkHref: "blog.html",
//         post2: [{
//             topic: 'Living Design',
//             title: 'Low Cost Latest Invented Interior Designing Ideas.',
//             date: '22 December,2022',
//         }]
//     }
// });

// var app3 = new Vue({
//     el: '#app-3',
//     data: {
//         linkHref: "blog.html",
//         post3: [{
//             topic: 'Interior Design',
//             title: 'Best For Any Office & Business Interior Solution',
//             date: '25 December,2022',
//         }]
//     }
// });



// Хочу сделать так, что бы небыло зависимости от id

// var postNews = {
//     data() {
//         return {
//             post1: [{
//                 topic: 'Kitchan Design',
//                 title: 'Let’s Get Solution For Building Construction Work',
//                 date: '26 December,2022',
//             }],
//             post2: [{
//                 topic: 'Living Design',
//                 title: 'Low Cost Latest Invented Interior Designing Ideas.',
//                 date: '22 December,2022',
//             }],
//             post3: [{
//                 topic: 'Interior Design',
//                 title: 'Best For Any Office & Business Interior Solution',
//                 date: '25 December,2022',
//             }]
//         }
//     }
// }