// const products = [
//     {
//         name: 'Куртка',
//         details: {
//             price: 50,
//             size: 'large'
//         },
//     },
//     {
//         name: 'Джинсы',
//         details: {
//             price: 30,
//             size: 'small'
//         },
//     },
//     {
//         name: 'Футболка',
//         details: {
//             price: 20,
//             size: 'medium'
//         },
//     },
//     methods: {

//     },
// ];




// console.log(products.sort((a, b) => a.details.price - b.details.price));

const app1 = new Vue({
    el: '#app-1',
    data: {
        products: [
            {
                name: 'Куртка',
                details: {
                    price: 50,
                    size: 'large'
                },
            },
            {
                name: 'Джинсы',
                details: {
                    price: 30,
                    size: 'small'
                },
            },
            {
                name: 'Футболка',
                details: {
                    price: 20,
                    size: 'medium'
                },
            },
        ]
    },
    methods: {
        sortSize: function (a, b){
            products.sort(customSortOrder[a.details.size] - customSortOrder[b.details.size])
        }
    }
})

const customSortOrder = {
    small: 1,
    medium: 2,
    large: 3,
};
