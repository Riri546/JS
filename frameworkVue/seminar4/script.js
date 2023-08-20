const app1 = new Vue({
    el: '#app-1',
    data: {
        products: [
            {
                name: 'Ноутбук',
                brands: 'Asus',
                price: 45000
            },
            {
                name: 'Умные часы',
                brands: 'Xiaomi',
                price: 5000
            },
            {
                name: 'Смартфон',
                brands: 'HUAWEI',
                price: 20000
            },
            {
                name: 'Смартфон',
                brands: 'Xiaomi',
                price: 25800
            },
            {
                name: 'Геймпад',
                brands: 'Microsoft Xbox',
                price: 6499
            },
            {
                name: 'Чайник для плиты',
                brands: 'Aceline',
                price: 950
            },
            {
                name: 'Стиральная машина',
                brands: 'Aceline',
                price: 11490
            },
            {
                name: 'Стиральная машина',
                brands: 'Gorenje',
                price: 54299
            },
            {
                name: 'Встраиваемый холодильник',
                brands: 'Haier',
                price: 82999
            },
            {
                name: 'Планшет',
                brands: 'HUAWEI',
                price: 44999
            },
        ]
    },
    methods: {
        sortedPriceIncreasing: function () {
            // return this.products.sort((a, b) => a.price - b.price);
            this.products.sort((a, b) => {
                if (a.price > b.price) {
                    return 1;
                }
                if (a.price < b.price) {
                    return -1;
                }
                return 0;
            });
        },
        sortedPriceDecreasing: function () {
            this.products.sort((a, b) => {
                if (a.price < b.price) {
                    return 1;
                }
                if (a.price > b.price) {
                    return -1;
                }
                return 0;
            });
        },
        sortedName: function () {
            this.products.sort((a, b) => {
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
        },
        sortedBrands: function () {
            this.products.sort((a, b) => {
                const brandsA = a.brands.toUpperCase(); // ignore upper and lowercase
                const brandsB = b.brands.toUpperCase(); // ignore upper and lowercase
                if (brandsA < brandsB) {
                    return -1;
                }
                if (brandsA > brandsB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
        }
    }
})
