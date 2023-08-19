// Экземпляр vue
var app = new Vue({
    el: '#app',
    data: {
        computed: {
            filteredProducts: function() {
                return this.products
                    // Фильтруем по категории
                    .filter(product => {
                        return this.selectCategory == 0 || product.category_id == this.selectCategory;
                    })
             
                    // Фильтруем по полю поиска
                    .filter(product => {
                        return this.inputSearch == '' || product.good.toLowerCase().indexOf(this.inputSearch.toLowerCase()) !== -1;
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