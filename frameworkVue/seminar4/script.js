const products = [
    {
        name: 'Куртка',
        details: {
            price: 50,
            size: 'high'
        },
    },
    {
        name: 'Джинсы',
        details: {
            price: 30,
            size: 'low'
        },
    },
    {
        name: 'Футболка',
        details: {
            price: 20,
            size: 'medium'
        },
    },
];

const customSortOrder = {
    high: 1,
    medium: 2,
    low: 3,
};

products.sort((a, b) => customSortOrder[a.size] - customSortOrder[b.size]);

console.log(products);

products.sort((a, b) => a.details.price - b.details.price);

