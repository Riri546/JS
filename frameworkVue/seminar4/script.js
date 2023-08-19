// var example1 = new Vue({
//     el: '#example-1',
//     data: {
//         sortKey: 'name',
//         checked: false,
//         searchString: "",
//         items: [
//             { price: '1100', name: 'Футболка' },
//             { price: '2500', name: 'Джинсы' },
//             { price: '7000', name: 'Куртка зимняя' },
//             { price: '3000', name: 'Свитер' },
//             { price: '2300', name: 'Кеды' },
//             { price: '700', name: 'Цепочка' },
//         ]
//     },
//     computed: {
//         sortedItems: function () {
//             let searchString = this.searchString;
//             const sortedArray = this.items.sort((a, b) => {
//                 if (a[this.sortKey] < b[this.sortKey]) return -1
//                 if (a[this.sortKey] > b[this.sortKey]) return 1
//                 return 0
//             });
//             if (!searchString) {
//                 return sortedArray;
//             } else {
//                 searchString = searchString.trim().toLowerCase();
//                 const search_array = sortedArray.filter((item) => {
//                     if (item.name.toLowerCase().indexOf(searchString) !== -1) {
//                         return item;
//                     }
//                 });
//                 return search_array;
//             }
//         },
//     }
// })

// Функция сортировки товаров
function sortCatalog(products, section, reverse = false) {
    // Переменные
    var arProductsList = [];
    var strHtml = '';

    // Переделываем в массив
    products.each(function (e) {
        arProductsList.push(products[e]);
    });
    // Проверяем как сортировать массив и сортируем его
    if (reverse) {
        arProductsList.sort(comparePrice).reverse();
    } else {
        arProductsList.sort(comparePrice);
    }
    // Очищаем каталог
    section.html('');
    // Добовляем элементы на страницу
    for(var i = 0; i < arProductsList.length; i++) {
        $('.catalog_list').append(arProductsList[i]);
    }
}

// Функция учавствующая в сортировке
function comparePrice(prodictA, productB) {
    return prodictA.getAttribute('data-sort-price') - productB.getAttribute('data-sort-price');
}

// Использование
sortCatalog($('.catalog_item.item_p'), $('.catalog_list'), false);