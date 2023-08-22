const app = {
    data() {
        return {
            articlesData: [
                { id: 1, src: 'img/Image_blog1.svg', alt: 'interior', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', button: 'Kitchan Design' },
                { id: 2, src: 'img/Image_blog2.svg', alt: 'interior', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
                { id: 3, src: 'img/Image_blog3.svg', alt: 'interior', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', button: 'Interior Design' },
                { id: 4, src: 'img/Image_blog4.svg', alt: 'interior', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', button: 'Kitchan Design' },
                { id: 5, src: 'img/Image_blog5.svg', alt: 'interior', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
                { id: 6, src: 'img/Image_blog6.svg', alt: 'interior', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', button: 'Interior Design' }
            ]};
    },
};

Vue.createApp(app).mount('#cardbox-container');
