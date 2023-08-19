// Экземпляр vue
var app = new Vue({
    el: '#app',
    data: {
        computed: {
            filteredProducts: function () {
                var that = this;
                return this.products.filter(function (product) {
                    return product.good.toLowerCase().indexOf(that.inputSearch.toLowerCase()) !== -1;
                });
            }
        },
        products: [],
        categories: [
            { id: 1, category: 'Ноутбуки' },
            { id: 2, category: 'Смартфоны' },
            { id: 3, category: 'Видеокарты' }
        ],
        inputSearch: '',
        selectCategory: 0
    },
    mounted: function () {
        var that = this;
        axios
            .get('/scripts/catalog.php')
            .then(function (response) {
                that.products = response.data.data.goods;
            });
    }
});

// Компонент продукта
Vue.component('ProductItem', {
    props: ['product'],
    template: `
     
        {{ product.good_id }}
        {{ product.good }}
        {{ product.brand }}
        {{ product.price }}
        {{ product.rating }}
     
    `
});