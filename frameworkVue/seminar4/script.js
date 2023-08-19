const products = [
    {
        name: 'Куртка',
        details: {
            price: 50,
            priority: 'high'
        },
    },
    {
        name: 'Джинсы',
        details: {
            price: 30,
            priority: 'low'
        },
    },
    {
        name: 'Футболка',
        details: {
            price: 20,
            priority: 'medium'
        },
    },
];

const customSortOrder = {
    high: 1,
    medium: 2,
    low: 3,
};

products.sort((a, b) => customSortOrder[a.priority] - customSortOrder[b.priority]);

console.log(products);

products.sort((a, b) => a.details.price - b.details.price);

