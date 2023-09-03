<template>
    <div class="top">
        <header class="subhead__img">
            <img class="subhead__img_photo" src="../assets/img/blogDitails/subhead.jpg" alt="subhead img">
        </header>
        <main class="main-blog-details">
            <div id="blogdetails" class="blog-details__box center">
                <div class="blog-details">
                    <article class="blog-detailsart" v-for="article in sortedArray" :key="article.id" :id="article.id">
                        <h2 class="blog-details__title">{{ article.title }}</h2>
                        <div class="blog-details__image-data-box">
                            <img alt="article.alt" class="blog-details__image" src="../assets/img/blogDitails/Photo.jpg">
                            <div class="blog-details__date-box">
                                <p class="blog-details__date">{{ article.date }}</p>
                                <p class="blog-details__links">{{ article.link }}</p>
                            </div>
                        </div>
                        <p class="blog-details__prgth-one">{{ article.firstpargth }}</p>
                        <p class="blog-details__prgth-two">{{ article.secondpargth }}</p>
                        <div class="blog-details__quote">
                            <div class="blog-details__quote-content">
                                <svg width="74" height="56" viewBox="0 0 74 56" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M58.7516 0.600003C63.1516 0.600003 66.7516 2.06667 69.5516 5C72.2182 7.93334 73.5516 11.8667 73.5516 16.8C73.5516 25.4667 70.6849 33 64.9516 39.4C59.0849 45.8 52.0849 51.0667 43.9516 55.2L41.9516 51.8C45.2849 49.6667 48.4182 46.9333 51.3516 43.6C54.1516 40.2667 56.3516 36.6667 57.9516 32.8L52.3516 28.6C50.0849 27.1333 48.2182 25.1333 46.7516 22.6C45.2849 20.2 44.5516 17.8667 44.5516 15.6C44.5516 11.3333 45.8849 7.73334 48.5516 4.8C51.0849 2 54.4849 0.600003 58.7516 0.600003ZM17.5516 0.599999C21.9516 0.6 25.5516 2.06667 28.3516 5C31.0182 7.93333 32.3516 11.8667 32.3516 16.8C32.3516 25.4667 29.4849 33 23.7516 39.4C17.8849 45.8 10.8849 51.0667 2.75156 55.2L0.751558 51.8C4.08489 49.6667 7.21823 46.9333 10.1516 43.6C12.9516 40.2667 15.1516 36.6667 16.7516 32.8L11.1516 28.6C8.88489 27.1333 7.01823 25.1333 5.55156 22.6C4.08489 20.2 3.35156 17.8667 3.35156 15.6C3.35156 11.3333 4.6849 7.73333 7.35156 4.8C9.8849 2 13.2849 0.599999 17.5516 0.599999Z"
                                        fill="#CDA274" />
                                </svg>
                                <p class="blog-details__quote-prgth">{{ article.quote }}</p>
                            </div>
                        </div>
                        <h3 class="blog-details__subtitle">{{ article.subtitle }}</h3>
                        <p class="blog-details__sub-prgth">{{ article.thirdpargth }}</p>
                        <div class="blog-details__sub-box" v-for="numberandtext in numbersandtexts" :key="numberandtext.id">
                            <p class="blog-details__number">{{ numberandtext.number }}</p>
                            <p class="blog-details__text">{{ numberandtext.text }}</p>
                        </div>
                        <img class="blog-details__image-bottom" src="../assets/img/blogDitails/Photo2.jpg"
                            :alt="article.alt">
                        <p class="blog-details__prgth-bottom">{{ article.thirdpargth }}</p>
                    </article>
                </div>

                <div class="blog-details__aside">
                    <h3 class="blog-details__aside-title">{{ title }}</h3>
                    <div class="blog-details__buttons">
                        <div class="blog-details__button" v-for="button in buttons" :key="button.id">
                            <label :data-id="button.id" @change="sortArticles"><input :data-id="button.id" @click="filters"
                                    class="blog-details__input" type="radio" name="radio">
                                {{ button.text }}</label>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'JSBlogDitailsPage',

    data() {
        return {
            sortedArray: [
                { id: 'kitchen', title: 'Let’s Get Solution for Building Construction Work', date: '26 December,2022', link: 'Interior / Home / Decore', firstpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don’t look even slightly believable.', secondpargth: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.', src: 'img/blogDitails/Photo.jpg', alt: 'photo', quote: 'The details are not the details. They make the design.', subtitle: 'Design sprints are great', thirdpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', firstnumber: '1', secondnumber: '2', thirdnumber: '3', fourthpargth: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', secondsrc: 'img/blogDitails/Photo2.jpg' }],

            articles: [
                { id: 'kitchen', title: 'Let’s Get Solution for Building Construction Work', date: '26 December,2022', link: 'Interior / Home / Decore', firstpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don’t look even slightly believable.', secondpargth: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.', src: 'img/blogDitails/kitchen.jpg', alt: 'photo', quote: 'The details are not the details. They make the design.', subtitle: 'Design sprints are great', thirdpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', firstnumber: '1', secondnumber: '2', thirdnumber: '3', fourthpargth: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', secondsrc: 'img/blogDitails/kitchen2.jpg' },
                { id: 'bedroom', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', link: 'Interior / Home / Decore', firstpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don t look even slightly believable.', secondpargth: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.', src: 'img/blogDitails/bedroom.jpg', alt: 'photo', quote: 'The details are not the details. They make the design.', subtitle: 'Design sprints are great', thirdpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', firstnumber: '1', secondnumber: '2', thirdnumber: '3', fourthpargth: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', secondsrc: 'img/blogDitails/bedroom2.jpg' },
                { id: 'building', title: 'Building, a usually roofed and walled structure built for permanent use.', date: '20 December,2022', link: 'Country / City / Building', firstpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don t look even slightly believable.', secondpargth: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.', src: 'img/blogDitails/building.jpg', alt: 'photo', quote: 'Good buildings come from good people, and all problems are solved by good design.', subtitle: 'We shape our buildings; thereafter, they shape us.', thirdpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', firstnumber: '1', secondnumber: '2', thirdnumber: '3', fourthpargth: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', secondsrc: 'img/blogDitails/building2.jpg' },
                { id: 'architecture', title: 'Our paper emphasizes the importance of the kitchen layout in facilitating consumers food hygiene practices.', date: '29 December,2022', link: 'Country / City / Architecture', firstpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don t look even slightly believable.', secondpargth: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.', src: 'img/blogDitails/architecture.jpg', alt: 'photo', quote: 'Architecture is a visual art, and the buildings speak for themselves.', subtitle: 'Architecture around the world by contemporary architects including cutting-edge houses, skyscrapers, cultural buildings, hotels, airports, apartments.', thirdpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', firstnumber: '1', secondnumber: '2', thirdnumber: '3', fourthpargth: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', secondsrc: 'img/blogDitails/architecture2.jpg' },
                { id: 'kitchen-planning', title: 'Kitchen Planning: Selecting the Right Layout', date: '25 December,2022', link: 'Interior / Home / Kitchen', firstpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don t look even slightly believable.', secondpargth: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.', src: 'img/blogDitails/klitchen_planing.jpg', alt: 'photo', quote: 'The kitchen is the heart of the home.', subtitle: 'Kitchens should be designed around whats truly important – fun, food, and life.', thirdpargth: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', firstnumber: '1', secondnumber: '2', thirdnumber: '3', fourthpargth: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', secondsrc: 'img/blogDitails/klitchen_planing2.jpg' }],

            numbersandtexts: [
                { number: '1', text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                { number: '2', text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                { number: '3', text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' }],

            buttons: [{ id: 'kitchen', text: 'Kitchen' }, { id: 'bedroom', text: 'Bedroom' }, { id: 'building', text: 'Building' }, { id: 'architecture', text: 'Architecture' }, { id: 'kitchen-planning', text: 'Kitchen Planning' }],

            title: 'Tags',
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
};
</script>

<style lang="css" scoped>
.subhead__img {
    padding-bottom: 200px;
}

.subhead__img_photo {
    width: 100vw;
}

.main-blog-details {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
}

.blog-details {
    width: 799px;
}

.blog-details__intro {
    margin-top: 45px;
}

.blog-details__box {
    margin-bottom: 96px;
    display: flex;
    flex-direction: row;
    gap: 57px;
}

.blog-details__title {
    max-width: 685px;
    margin-bottom: 21px;
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
}

.blog-details__image-data-box {
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
    gap: 46px;
}

.blog-details__image {
    width: 799px;
    height: 539px;
    border-radius: 50px;
}

.blog-details__date-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 418px;
}

.blog-details__date {
    display: flex;
    width: 146px;
    height: 24px;
    flex-direction: column;
    justify-content: center;

    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.blog-details__links {
    display: flex;
    width: 249px;
    height: 24px;
    flex-direction: column;
    justify-content: center;

    color: #4d5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.blog-details__prgth-one {
    margin-bottom: 34px;
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.blog-details__prgth-two {
    margin-bottom: 38px;
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.blog-details__quote {
    margin-bottom: 27px;
    border-radius: 50px;
    background: #f4f0ec;
}

.blog-details__quote-content {
    padding: 82px 217px 59px 223px;
    text-align: center;
    color: #cda274;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: italic;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
}

.blog-details__subtitle {
    margin-top: 29px;
    margin-bottom: 20px;
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
}

.blog-details__sub-prgth {
    margin-bottom: 24px;
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.blog-details__sub-box {
    margin-bottom: 32px;
    display: flex;
    flex-direction: row;
    gap: 9px;
}

.blog-details__number {
    color: #cda274;
    font-family: DM Serif Display;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 25px */
    letter-spacing: 0.4px;
}

.blog-details__text {
    width: 713px;
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.blog-details__image-bottom {
    margin-top: 12px;
    margin-bottom: 26px;
    border-radius: 50px;
    width: 799px;
    height: auto;
}

.blog-details__prgth-bottom {
    margin-bottom: 50px;
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.blog-details__aside {
    display: flex;
    flex-direction: column;
    gap: 23px;
}

.blog-details__buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
}

.blog-details__button {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px 30px;
    color: #292f36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.36px;
    border-radius: 10px;
    background: #f4f0ec;
    border: none;
}

.blog-details__button input[type="radio"] {
    display: none;
}

.blog-details__button-active {
    background: #292f36;
    color: #ffffff;
}

.blog-details__aside-title {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
}
</style>