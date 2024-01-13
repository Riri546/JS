// * Задание VUE
// Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).

Vue.createApp({
    data() {
        return {
            products: [
                { id: 1, title: 'Хлеб', price: 34 },
                { id: 2, title: 'Молоко', price: 63 },
                { id: 3, title: 'Соль', price: 28 },
                { id: 4, title: 'Сахар', price: 66 },
            ]
        };
    },
    methods: {
        sortInAscendingOrder() {
            return this.products.sort((a, b) => a.price - b.price);
        },
        sortInDescendingOrder() {
            return this.products.sort((a, b) => b.price - a.price);
        }
    },
}).mount('#app');
