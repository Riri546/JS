var app1 = new Vue({
    el: '#app-1',
    data: {
        linkHref: "blog.html",
        post1: [{
            topic: 'Kitchan Design',
            title: 'Let’s Get Solution For Building Construction Work',
            date: '26 December,2022',
        }]
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        linkHref: "blog.html",
        post2: [{
            topic: 'Living Design',
            title: 'Low Cost Latest Invented Interior Designing Ideas.',
            date: '22 December,2022',
        }]
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        linkHref: "blog.html",
        post3: [{
            topic: 'Interior Design',
            title: 'Best For Any Office & Business Interior Solution',
            date: '25 December,2022',
        }]
    }
});


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