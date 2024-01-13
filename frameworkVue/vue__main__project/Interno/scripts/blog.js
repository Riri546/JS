const app = {
    data() {
        return {
            itemsData: [
                { id: 1, src: '../images/news_photo1.png', alt: 'news photo', tag: 'Kitchan Design', title: 'Let’s&nbsp;Get Solution For Building Construction Work', date: '26 December,2022'},
                { id: 2, src: '../images/news_photo2.png', alt: 'news photo', tag: 'Living Design',  title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022'},
                { id: 3, src: '../images/news_photo3.png', alt: 'news photo', tag: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022'},
                { id: 4, src: '../images/news_photo4.png', alt: 'news photo', tag: 'Kitchan Design', title: 'Let’s&nbsp;Get Solution For Building Construction Work', date: '26 December,2022'},
                { id: 5, src: '../images/news_photo5.png', alt: 'news photo', tag: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022'},
                {id: 6, src: '../images/news_photo6.png', alt: 'news photo', tag: 'Interior Design',title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022'}
            ]
        };
    },
};

Vue.createApp(app).mount('#news-items');