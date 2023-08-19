var app = new Vue({
    el: '#app',
    data: {
        sortParam: '',
        phones: [
            { title: 'Galaxy S8', company: 'Samsung', price: 45000 },
            { title: 'iPhone 7', company: 'Apple', price: 49000 },
            { title: 'Nokia N8', company: 'HMD Global', price: 25000 },
            { title: 'Galaxy Note 8', company: 'Samsung', price: 50000 },
            { title: 'iPhone 8', company: 'Apple', price: 60000 }]
    },
    computed: {
        sortedList() {
            switch (this.sortParam) {
                case 'title': return this.phones.sort(sortByTitle);
                case 'company': return this.phones.sort(sortByCompany);
                case 'price': return this.phones.sort(sortByPrice);
                default: return this.phones;
            }
        }
    }
});


// cards.sort((a, b) => a.details.price - b.details.price);
var sortByTitle = function () { return (d1.title.toLowerCase() > d2.title.toLowerCase()) ? 1 : -1; };
var sortByCompany = function (d1, d2) { return (d1.company.toLowerCase() > d2.company.toLowerCase()) ? 1 : -1; };
var sortByPrice = function (a, b) { return (a.price > b.price) ? 1 : -1; };



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

// const app1 = new Vue({
//     el: '#app-1',
//     data: {
//         sortRules: [
//             { key: 'good_id:asc', title: 'По порядку' },
//             { key: 'rating:desc', title: 'По рейтингу' },
//             { key: 'price:asc', title: 'По цене, сначала дешевые' },
//             { key: 'price:desc', title: 'По цене, сначала дорогие' }
//         ],
//         products: [
//             {
//                 name: 'Джинсы',
//                 details: {
//                     price: 30,
//                     size: 'small'
//                 },
//             },
//             {
//                 name: 'Куртка',
//                 details: {
//                     price: 50,
//                     size: 'large'
//                 },
//             },
//             {
//                 name: 'Футболка',
//                 details: {
//                     price: 20,
//                     size: 'medium'
//                 },
//             },
//         ]
//     },
//     methods: {
//         filteredProducts: function () {
//             // Фильтруем товары
//             var filtered = this.products
//                 // По категории
//                 .filter(product => {
//                     return this.selectCategory == 0 || product.category_id == this.selectCategory;
//                 })

//                 // По брендам
//                 .filter(product => {
//                     return this.selectBrand == 0 || product.brand == this.selectBrand;
//                 })

//                 // По ценам
//                 .filter(product => {
//                     return Number(product.price) >= this.minPrice && Number(product.price) <= this.maxPrice;
//                 })

//                 // По полю поиска
//                 .filter(product => {
//                     return this.inputSearch == '' || product.good.toLowerCase().indexOf(this.inputSearch.toLowerCase()) !== -1;
//                 });

//             // Сортируем
//             var sorted = _.sortBy(filtered, product => {
//                 return Number(product[this.sortKey]);
//             });

//             // При необходимости сортируем в обратном направлении
//             if (this.sortDir === 'desc') {
//                 sorted = sorted.reverse();
//             }

//             return sorted;
//         }


        // sortSize: function () {
        //     products.sort((a, b) =>
        //         customSortOrder[a.details.size] - customSortOrder[b.details.size])
        // },
        // sortPricesAscendingOrder: function(){
        //     products.sort((a, b) => a.details.price - b.details.price)
        // }
//     }
// })


// const customSortOrder = {
//     small: 1,
//     medium: 2,
//     large: 3,
// };
