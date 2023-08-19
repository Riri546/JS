// Экземпляр vue
var app = new Vue({
    el: '#app',
    data: {
        products: []
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