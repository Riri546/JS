const blogs = {
    data() {
        return {
            sortedArray: [
                { id: 'kitchen', title: 'Let’s Get Solution for Building Construction Work', date: '26 December,2022', link: 'Interior / Home / Decore', firstpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don’t look even slightly believable.', secondpargth: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.', src: '#', alt: 'photo', quote: 'The details are not the details. They make the design.', subtitle: 'Design sprints are great', thirdpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', firstnumber: '1', secondnumber: '2', thirdnumber: '3', fourthpargth: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', secondsrc: '#' }],
            articles: [
                { id: 'kitchen', title: 'Let’s Get Solution for Building Construction Work', date: '26 December,2022', link: 'Interior / Home / Decore', firstpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don’t look even slightly believable.', secondpargth: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.', src: '#', alt: 'photo', quote: 'The details are not the details. They make the design.', subtitle: 'Design sprints are great', thirdpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', firstnumber: '1', secondnumber: '2', thirdnumber: '3', fourthpargth: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', secondsrc: '#' },
                { id: 'bedroom', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', link: 'Interior / Home / Decore', firstpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don t look even slightly believable.', secondpargth: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.', src: '#', alt: 'photo', quote: 'The details are not the details. They make the design.', subtitle: 'Design sprints are great', thirdpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', firstnumber: '1', secondnumber: '2', thirdnumber: '3', fourthpargth: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', secondsrc: '#' },
                { id: 'kitchen-planning', title: 'Kitchen Planning: Selecting the Right Layout', date: '25 December,2022', link: 'Interior / Home / Kitchen', firstpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don t look even slightly believable.', secondpargth: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.', src: '#', alt: 'photo', quote: 'The kitchen is the heart of the home.', subtitle: 'Kitchens should be designed around whats truly important – fun, food, and life.', thirdpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', firstnumber: '1', secondnumber: '2', thirdnumber: '3', fourthpargth: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', secondsrc: '#' }],

            numbersandtexts: [
                { number: '1', text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                { number: '2', text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                { number: '3', text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' }],
            buttons: [{ id: 'kitchen', text: 'Kitchen' }, { id: 'bedroom', text: 'Bedroom' }, { id: 'building', text: 'Building' }, { id: 'architecture', text: 'Architecture' }, { id: 'kitchen-planning', text: 'Kitchen Planning' }],
            title: 'Tags'
        };
    },
    methods: {
        sortArticles(e) {
            console.log(e.target);
            if (document.querySelector('.blog-details__button-active') !== null) {
                document.querySelector('.blog-details__button-active').classList.remove('blog-details__button-active');
            }
            const divButton = e.target.closest('.blog-details__button');
            divButton.classList.add('blog-details__button-active');
        },
        filters(e) {
            this.sortedArray = this.articles.filter(article => article.id === e.target.dataset.id);
        }
    },
    template: `
            <div class="blog-details">
                <article class="blog-detailsart" v-for="article in sortedArray" :key="article.id" :id="article.id">
                <h2 class="blog-details__title">{{ article.title }}</h2>
                <div class="blog-details__image-data-box">
                    <img :src="article.src" alt="article.alt" class="blog-details__image">
                    <div class="blog-details__date-box">
                        <p class="blog-details__date">{{ article.date }}</p>
                        <p class="blog-details__links">{{ article.link }}</p>
                    </div>
                </div>
                <p class="blog-details__prgth-one">{{ article.firstpargth }}</p>
                <p class="blog-details__prgth-two">{{ article.secondpargth }}</p>
                <div class="blog-details__quote">
                    <div class="blog-details__quote-content">
                        <svg width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M58.7516 0.600003C63.1516 0.600003 66.7516 2.06667 69.5516 5C72.2182 7.93334 73.5516 11.8667 73.5516 16.8C73.5516 25.4667 70.6849 33 64.9516 39.4C59.0849 45.8 52.0849 51.0667 43.9516 55.2L41.9516 51.8C45.2849 49.6667 48.4182 46.9333 51.3516 43.6C54.1516 40.2667 56.3516 36.6667 57.9516 32.8L52.3516 28.6C50.0849 27.1333 48.2182 25.1333 46.7516 22.6C45.2849 20.2 44.5516 17.8667 44.5516 15.6C44.5516 11.3333 45.8849 7.73334 48.5516 4.8C51.0849 2 54.4849 0.600003 58.7516 0.600003ZM17.5516 0.599999C21.9516 0.6 25.5516 2.06667 28.3516 5C31.0182 7.93333 32.3516 11.8667 32.3516 16.8C32.3516 25.4667 29.4849 33 23.7516 39.4C17.8849 45.8 10.8849 51.0667 2.75156 55.2L0.751558 51.8C4.08489 49.6667 7.21823 46.9333 10.1516 43.6C12.9516 40.2667 15.1516 36.6667 16.7516 32.8L11.1516 28.6C8.88489 27.1333 7.01823 25.1333 5.55156 22.6C4.08489 20.2 3.35156 17.8667 3.35156 15.6C3.35156 11.3333 4.6849 7.73333 7.35156 4.8C9.8849 2 13.2849 0.599999 17.5516 0.599999Z"
                                fill="#CDA274" />
                        </svg>
                        <p class="blog-details__quote-prgth">{{ article.quote }}</p>
                    </div>
                </div>
                <h3 class="blog-details__subtitle">{{ article.subtitle }}</h3>
                <p class="blog-details__sub-prgth">{{ article.thirdpargth }}</p>
                <div v-for="numberandtext in numbersandtexts" class="blog-details__sub-box">
                    <p class="blog-details__number">{{ numberandtext.number }}</p>
                    <p class="blog-details__text">{{ numberandtext.text }}</p>
                </div>
                <img class="blog-details__image-bottom" :src="article.secondsrc" :alt="article.alt">
                <p class="blog-details__prgth-bottom">{{ article.thirdpargth }}</p>
                </article>
            </div>
            
            <div class="blog-details__aside">
                <h3 class="blog-details__aside-title">{{title}}</h3>
                <div   class="blog-details__buttons"> 
                    <div  v-for="button in buttons"                class="blog-details__button">
                    <label :data-id="button.id" @change="sortArticles"><input  :data-id="button.id" @click="filters" class="blog-details__input" type="radio" name="radio">
                    {{button.text}}</label>
                    </div>
                </div>
            </div>
            `,
};


// Vue.component('blog_details', {
//     props: {},

//     data() {
//         return {
//             id: 'Kitchen',
//             title: 'Let’s Get Solution for Building Construction Work',
//             img: "img/blogDitails/Photo.jpg",
//             alt: 'photo',
//             date: '26 December,2022',
//             link_interior: 'Interior',
//             linkHref_interior: 'index.html',
//             span: ' / ',
//             link_home: 'Home',
//             linkHref_home: 'index.html',
//             link_decore: 'Decore',
//             linkHref_decore: 'blog.html',
//             text_one: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
//             text_two: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
//             quotes_text: 'The details are not the details.They make the design.',
//             subtitle: 'Design sprints are great',
//             second_text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
//             list_text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
//             second_img: 'img/blogDitails/Photo2.jpg',
//         }

//     },
//     template: `
//     <section class="paper">
//     <article class="paper__first">
//         <h1 class="paper__first_title">{{ title }}</h1>
//         <img class="paper__first_img" :src="img" :alt="alt">
//         <div class="date__breadcrumbs">
//             <div class="date">
//                 <p>{{ date }}</p>
//             </div>
//             <div class="breadcrumbs">
//                 <a class="breadcrumbs__link" :href="linkHref_interior">{{ link_interior }}</a>
//                 <span class="breadcrumbs__link"> {{ span }} </span>
//                 <a class="breadcrumbs__link" :href="linkHref_home">{{ link_home }}</a>
//                 <span class="breadcrumbs__link"> {{ span }} </span>
//                 <a class="breadcrumbs__link" :href="linkHref_decore">{{ link_decore }}</a>
//             </div>
//         </div>
//         <p class="paper__first_text"> {{ text_one }}</p>
//         <p class="paper__first_text"> {{ text_two }}</p>

//         <blockquote class="quote">
//             <h2 class="quote__title"><svg width="74" height="56" viewBox="0 0 74 56" fill="none"
//                     xmlns="http://www.w3.org/2000/svg">
//                     <path
//                         d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
//                         fill="#CDA274" />
//                 </svg>
//             </h2>
//             <p class="quote__text">{{ quotes_text }}</p>
//         </blockquote>
//     </article>
//     <article class="paper__second">
//         <h2 class="paper__second_title">{{ subtitle }}</h2>
//         <p class="paper__second_text">{{ second_text }}</p>
//         <ol>
//             <li class="paper__second_list">{{ list_text }}</li>
//             <li class="paper__second_list">{{ list_text }}</li>
//             <li class="paper__second_list">{{ list_text }}</li>
//         </ol>
//         <img class="paper__second_img" :src="second_img" :alt="alt">
//         <p class="paper__second_text">{{ second_text }}</p>
//     </article>
// </section>`,
// });

// Vue.component('blog_list', {
//     props: {},

//     data() {
//         return {
//             buttons: [
//                 { id: 'kitchen', name: 'Kitchen' },
//                 { id: 'bedroom', name: 'Bedroom' },
//                 { id: 'building', name: 'Building' },
//                 { id: 'architecture', name: 'Architecture' },
//                 { id: 'kitchen_planning', name: 'Kitchen Planning' },
//                 { id: 'bedroom', name: 'Bedroom' },],

//             articles_kithen: [
//                 { id: 'kitchen', src: 'img/Image_blog2.svg', alt: 'interior', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
//                 // { id: 'kitchen', src: 'img/Image_blog2.svg', alt: 'interior', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
//                 // { id: 'kitchen', src: 'img/Image_blog2.svg', alt: 'interior', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
//                 // { id: 'kitchen', src: 'img/Image_blog2.svg', alt: 'interior', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
//             ],

//             articles_bedroom: [
//                 { id: 'bedroom', src: 'img/Image_blog5.svg', alt: 'interior', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
//                 // { id: 'bedroom', src: 'img/Image_blog5.svg', alt: 'interior', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
//                 // { id: 'bedroom', src: 'img/Image_blog5.svg', alt: 'interior', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
//                 // { id: 'bedroom', src: 'img/Image_blog5.svg', alt: 'interior', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
//             ],

//             articles_building: [
//                 { id: 'building', src: 'img/Image_blog3.svg', alt: 'interior', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', button: 'Interior Design' },
//                 // { id: 'building', src: 'img/Image_blog3.svg', alt: 'interior', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', button: 'Interior Design' },
//                 // { id: 'building', src: 'img/Image_blog3.svg', alt: 'interior', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', button: 'Interior Design' },
//                 // { id: 'building', src: 'img/Image_blog3.svg', alt: 'interior', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', button: 'Interior Design' },
//             ],

//             articles_architecture: [
//                 { id: 'architecture', src: 'img/Image_blog1.svg', alt: 'interior', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', button: 'Kitchan Design' },
//                 // { id: 'Architecture', src: 'img/Image_blog1.svg', alt: 'interior', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', button: 'Kitchan Design' },
//                 // { id: 'Architecture', src: 'img/Image_blog1.svg', alt: 'interior', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', button: 'Kitchan Design' },
//                 // { id: 'Architecture', src: 'img/Image_blog1.svg', alt: 'interior', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', button: 'Kitchan Design' },
//             ],

//         };

//     },
//     methods: {
//         kit: function (event) {
//             if (event) {
//                 event.articles_architecture
//             }


//         },


//         template: `
//     <section class="tags">
//     <h2 class="tags__title">Tags</h2>
//     <div class="button">
//         <div v-for="button in buttons">
//             <button class="tags__button" :id="button.id" @clik="Kit">{{ button.name }}</button>
//         </div>
//     </div>
//     <article class="blog"
//     <div class="blog__item" v-for="article in articles_architecture" :key="article.id">
//         <img :src="article.src" :alt="article.alt" class="blog__list_img">
//         <h3 class="blog__list_text">{{article.title}}</h3>
//         <div class="blog__list_content">
//             <p class="blog__item_content-date">{{article.date}}</p>
//             <a href="blog.html" class="blog__item_content-elem">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53"
//                     fill="none">
//                     <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
//                     <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
//                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                 </svg>
//             </a>
//         </div>
//         <a href="blogDitails.html" class="blog__item_tag">{{article.button}}</a>
//     </div>
// </div>
    
// </section>
// `}
// });