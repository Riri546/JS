<template>
    <div class="top">
        <header class="subhead" v-for="subhead in subheader" :key="subhead.id">
            <div class="subhead__img">
                <img class="subhead__img_photo" :src="subhead.src_img" :alt="subhead.alt">
                <span class="subhead__section">
                    <h1 class="subhead__section_title">{{ subhead.title }}</h1>
                    <div>
                        <a class="subhead__link" :href="subhead.linl_htef_one">{{ subhead.link_name_one }}</a> / <a
                            class="subhead__link" :href="subhead.linl_htef_two">{{ subhead.link_name_two }}</a>
                    </div>
                </span>
            </div>
        </header>
        <section class="latestPost" v-for="latestPost in latestPosts" :key="latestPost.id">
            <h1 class="latestPost__title">{{ latestPost.title }}</h1>
            <article class="latestPost__post">
                <img class="latestPost__img" src="../assets/img/blog/post_img.jpg" :alt="latestPost.alt">
                <div class="latestPost__content">
                    <h2 class="latestPost__subtitle">{{ latestPost.subtitle }}</h2>
                    <p class="latestPost__text">{{ latestPost.text }}</p>
                    <div class="news__date__link">
                        <div class="date">
                            <p class="date__text">{{ latestPost.date }}</p>
                        </div>
                        <div class="link">
                            <a :href="latestPost.link_href" class="catalog__link"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="70" height="70" viewBox="0 0 70 70" fill="none">
                                    <circle class="catalog__link_color" cx="35" cy="35" r="35" fill="#F4F0EC" />
                                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg></a>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section class="blog">
            <h2 class="blog__header">Articles & News</h2>
            <div class="blog__items" id="cardbox-container">
                <div class="blog__item" v-for="article in articlesData" :key="article.id">
                    <img src="../assets/img/Image_blog1.svg" :alt="article.alt" class="blog__item_img">
                    <h3 class="blog__item_text">{{ article.title }}</h3>
                    <div class="blog__item_content">
                        <p class="blog__item_content-date">{{ article.date }}</p>
                        <a href="blog.html" class="blog__item_content-elem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <a href="blogDitails.html" class="blog__item_tag">{{ article.button }}</a>
                </div>
            </div>
        </section>
        <div class="articles__pagination">
            <a href="#" class="articles__pagination-item">01</a>
            <a href="#" class="articles__pagination-item">02</a>
            <a href="#" class="articles__pagination-item">03</a>
            <a href="#" class="articles__pagination-item"><svg class="articles__pagination-svg" width="9" height="16"
                    viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogPage',
    data() {
        return {
            articlesData: [
                { id: 1, src: 'Image_blog1.svg', alt: 'interior', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', button: 'Kitchan Design' },
                { id: 2, src: '../src/assets/img/Image_blog1.svg', alt: 'interior', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
                { id: 3, src: '../assets/img/Image_blog3.svg', alt: 'interior', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', button: 'Interior Design' },
                { id: 4, src: '../assets/img/Image_blog4.svg', alt: 'interior', title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022', button: 'Kitchan Design' },
                { id: 5, src: '../assets/img/Image_blog5.svg', alt: 'interior', title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022', button: 'Living Design' },
                { id: 6, src: '../assets/img/Image_blog6.svg', alt: 'interior', title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022', button: 'Interior Design' }],

            subheader: [
                { src_img: require('../assets/img/blog/Image_laceholder.jpg'), alr: 'img blog ditails', title: 'Articles & News', linl_htef_one: 'index.html', link_name_one: 'Home', linl_htef_two: 'blogDitails.html', link_name_two: 'Blog' }],

            latestPosts: [
                { title: 'Latest Post', src_img: '../assets/img/blog/post_img.jpg', alt: 'post img', subtitle: 'Low Cost Latest Invented Interior Designing Ideas', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.', date: '26 December,2022', link_href: 'blogDitails.html' }
            ],
        };
    },

    computed: {
        imgUrl() {
            return require(`@/assets/img/${this.result.img}`)
        }
    }
};
</script>

<style lang="css" scoped>
.subhead__img {
    position: relative;
    display: inline-block;
}

.subhead__img_photo {
    width: 100vw;
}

.subhead__section {
    border-radius: 37px 37px 0px 0px;
    background: #FFF;
    position: absolute;
    bottom: 1px;
    display: flex;
    width: 503px;
    margin-left: 28%;
    padding: 41px 78px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.subhead__section_title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
}

.subhead__link {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.news__date__link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
}

.latestPost {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
    padding-top: 183px;
    padding-bottom: 150px;
}

.latestPost__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
    padding-bottom: 33px;
}

.latestPost__post {
    display: flex;
    padding: 22px;
    flex-direction: row;
    align-items: flex-start;
    gap: 65px;
    border-radius: 62px;
    border: 1px solid #E7E7E7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
}

.latestPost__img {
    max-width: 569px;
    border-radius: 62px;
}

.latestPost__content {
    max-width: 463px;
}

.latestPost__subtitle {
    padding-top: 52px;
    padding-bottom: 22px;
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
}

.latestPost__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    padding-bottom: 41px;
    letter-spacing: 0.22px;
}

.blog {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    margin-top: 96px;
    margin-bottom: 96px;
}

.blog__title {
    color: #292F36;
    text-align: center;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
    margin-bottom: 10px;
    text-align: center;
    letter-spacing: 1px;
}

.blog__text {
    color: #4D5053;
    text-align: center;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    margin-bottom: 52px;
    width: 811px;
    text-align: center;
    letter-spacing: 0.22px;
}

.blog__items {
    display: flex;
    flex-direction: row;
    gap: 25px;
    flex-wrap: wrap;
}

.blog__item {
    position: relative;
    padding: 20px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    transition: 0.7s;
}

.blog__item_img {
    margin-bottom: 21px;
    border-radius: 60px 60px 0px 0px;
}

.blog__item_tag {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
    position: absolute;
    width: 124px;
    top: 247px;
    left: 40px;
    letter-spacing: 0.16px;
    background-color: #fff;
    border-radius: 8px 8px 8px 0px;
    padding: 7px 9px 10px 11px;
    transition: 0.7s;
}

.blog__item_text {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
    display: flex;
    width: 305px;
    height: 70px;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 0.5px;
    margin-bottom: 30px;
}

.blog__item_content {
    display: flex;
    width: 340px;
    align-items: center;
    gap: 65px;
}

.blog__item_content-date {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
    display: flex;
    width: 223px;
    height: 33px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.circle {
    transition: 0.7s;
}

.blog__item:hover {
    background: #F4F0EC;
}

.blog__item:hover circle {
    fill: #fff;
}

.blog__header {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
    padding-bottom: 30px
}

.articles {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
    padding-bottom: 30px;
}

.articles__title {
    color: #292F36;
    font-family: 'DM Serif Display', serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
}

.articles__pagination {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-direction: row;
    flex-wrap: nowrap;
}

.articles__pagination-item {
    padding: 14px 17px;
    border: 1px solid #CDA274;
    box-sizing: border-box;
    border-radius: 100%;
    color: #292F36;
    font-family: 'Jost', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    text-transform: capitalize;
    transition: all 0.7s;
}

.articles__pagination-item:hover {
    background: #F4F0EC;
    border: 1px solid #F4F0EC;
}

.articles__pagination-svg {
    padding-left: 5px;
    padding-right: 5px;
}

.foot {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
    display: grid;
    grid-template-columns: repeat(3, 340px);
    justify-content: space-between;
    padding-bottom: 134px;
}
</style>