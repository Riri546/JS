<template>
    <div>
        <header class="subhead" v-for="subhead in subheader" :key="subhead.id">
            <div class="subhead__img">
                <img class="subhead__img_photo" src="../assets/img/project/subhead.jpg" :alt="subhead.alt">
                <span class="subhead__section">
                    <h1 class="subhead__section_title">{{ subhead.title }}</h1>
                    <div>
                        <a class="subhead__link" :href="subhead.linl_htef_one">{{ subhead.link_name_one }}</a> / <a
                            class="subhead__link" :href="subhead.linl_htef_two">{{ subhead.link_name_two }}</a>
                    </div>
                </span>
            </div>
        </header>
        <section class="navigation">
            <div class="navigation__border">
                <nav class="navigation__text" v-for="nav in navigations" :key="nav">
                    <a class="navigation__link" href="#">{{ nav }}</a>
                </nav>
            </div>
        </section>
        <section class="project">
            <article class="project__catalog item1">
                <img class="project__img" src="../assets/img/project/Photo (1).png" alt="photo">
                <div class="project__about">
                    <div class="project__text">
                        <h1 class="project__title">Minimal Bedroom</h1>
                        <a class="project__link" href="#">Decor</a>
                        <span class="project__link"> / </span>
                        <a class="project__link" href="#">Artchitectur</a>
                    </div>
                    <div>
                        <a class="catalog__link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                                viewBox="0 0 70 70" fill="none">
                                <circle class="catalog__link_color" cx="35" cy="35" r="35" fill="#F4F0EC" />
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg></a>
                    </div>
                </div>
            </article>
            <article class="project__catalog item2">
                <img class="project__img" src="../assets/img/project/Photo (2).png" alt="photo">
                <div class="project__about">
                    <div class="project__text">
                        <h1 class="project__title">Minimal Bedroom</h1>
                        <a class="project__link" href="#">Decor</a>
                        <span class="project__link"> / </span>
                        <a class="project__link" href="#">Artchitectur</a>
                    </div>
                    <div>
                        <a class="catalog__link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                                viewBox="0 0 70 70" fill="none">
                                <circle class="catalog__link_color" cx="35" cy="35" r="35" fill="#F4F0EC" />
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg></a>
                    </div>
                </div>
            </article>
            <article class="project__catalog item3">
                <img class="project__img" src="../assets/img/project/Photo (3).png" alt="photo">
                <div class="project__about">
                    <div class="project__text">
                        <h1 class="project__title">Classic Minimal Bedroom</h1>
                        <a class="project__link" href="#">Decor</a>
                        <span class="project__link"> / </span>
                        <a class="project__link" href="#">Artchitectur</a>
                    </div>
                    <div>
                        <a class="catalog__link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                                viewBox="0 0 70 70" fill="none">
                                <circle class="catalog__link_color" cx="35" cy="35" r="35" fill="#F4F0EC" />
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg></a>
                    </div>
                </div>
            </article>
            <article class="project__catalog item4">
                <img class="project__img" src="../assets/img/project/Photo (4).png" alt="photo">
                <div class="project__about">
                    <div class="project__text">
                        <h1 class="project__title">Modern Bedroom</h1>
                        <a class="project__link" href="#">Decor</a>
                        <span class="project__link"> / </span>
                        <a class="project__link" href="#">Artchitectur</a>
                    </div>
                    <div>
                        <a class="catalog__link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                                viewBox="0 0 70 70" fill="none">
                                <circle class="catalog__link_color" cx="35" cy="35" r="35" fill="#F4F0EC" />
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg></a>
                    </div>
                </div>
            </article>
            <article class="project__catalog item5">
                <img class="project__img" src="../assets/img/project/Photo (5).png" alt="photo">
                <div class="project__about">
                    <div class="project__text">
                        <h1 class="project__title">Minimal Bedroom table</h1>
                        <a class="project__link" href="#">Decor</a>
                        <span class="project__link"> / </span>
                        <a class="project__link" href="#">Artchitectur</a>
                    </div>
                    <div>
                        <a class="catalog__link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                                viewBox="0 0 70 70" fill="none">
                                <circle class="catalog__link_color" cx="35" cy="35" r="35" fill="#F4F0EC" />
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg></a>
                    </div>
                </div>
            </article>
            <article class="project__catalog item6">
                <img class="project__img" src="../assets/img/project/Photo (6).png" alt="photo">
                <div class="project__about">
                    <div class="project__text">
                        <h1 class="project__title">System Table</h1>
                        <a class="project__link" href="#">Decor</a>
                        <span class="project__link"> / </span>
                        <a class="project__link" href="#">Artchitectur</a>
                    </div>
                    <div>
                        <a class="catalog__link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                                viewBox="0 0 70 70" fill="none">
                                <circle class="catalog__link_color" cx="35" cy="35" r="35" fill="#F4F0EC" />
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg></a>
                    </div>
                </div>
            </article>
            <article class="project__catalog item7">
                <img class="project__img" src="../assets/img/project/Photo (7).png" alt="photo">
                <div class="project__about">
                    <div class="project__text">
                        <h1 class="project__title">Modern Medroom</h1>
                        <a class="project__link" href="#">Decor</a>
                        <span class="project__link"> / </span>
                        <a class="project__link" href="#">Artchitectur</a>
                    </div>
                    <div>
                        <a class="catalog__link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                                viewBox="0 0 70 70" fill="none">
                                <circle class="catalog__link_color" cx="35" cy="35" r="35" fill="#F4F0EC" />
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg></a>
                    </div>
                </div>
            </article>
            <article class="project__catalog item8">
                <img class="project__img" src="../assets/img/project/Photo (8).png" alt="photo">
                <div class="project__about">
                    <div class="project__text">
                        <h1 class="project__title">Modern Bedroom</h1>
                        <a class="project__link" href="#">Decor</a>
                        <span class="project__link"> / </span>
                        <a class="project__link" href="#">Artchitectur</a>
                    </div>
                    <div>
                        <a class="catalog__link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                                viewBox="0 0 70 70" fill="none">
                                <circle class="catalog__link_color" cx="35" cy="35" r="35" fill="#F4F0EC" />
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg></a>
                    </div>
                </div>
            </article>
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
    name: 'JSProjectPage',

    data() {
        return {
            subheader: [
                { src_img: '../assets/img/blog/Image_laceholder.jpg', alr: 'img blog ditails', title: 'Articles & News', linl_htef_one: 'index.html', link_name_one: 'Home', linl_htef_two: 'blogDitails.html', link_name_two: 'Project' }],
            navigations: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area']
        };
    },

    mounted() {

    },

    methods: {

    },
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

.navigation {
    padding-top: 200px;
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
    display: flex;
    justify-content: center;
}

.navigation__border {
    display: flex;
    gap: 96px;
    justify-content: center;
    align-items: center;
    border: 1px solid #CDA274;
    border-radius: 20px;
    min-width: 880px;
    min-height: 75px;
}

.navigation__text {
    transition: 1s;
}

.navigation__link {
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
    transition: 1s;
}

.navigation__text:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    /* padding: 26px 66px; */
    height: 75px;
    width: 230px;
    border-radius: 20px;
    background: #CDA274;
}

.navigation__link:hover {
    color: #FFF;
    padding: 26px 66px;
}

.project {
    display: grid;
    grid-template-columns: repeat(2, 586px);
    grid-template-rows: repeat(10, 320px);
    gap: 33px;
    max-width: 590px;
    padding: 61px calc(50% - 1200px/2);
}

.project__about {
    padding-top: 28px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}

.project__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
}

.project__link {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.project__catalog {
    transition: 1s;
}

.project__catalog:hover {
    transform: scale(1.1)
}

.item1 {
    grid-row-start: 1;
    grid-row-end: 4;
}

.item2 {
    grid-row-start: 1;
    grid-row-end: 3;
}

.item3 {
    grid-row-start: 3;
    grid-row-end: 6;
}

.item4 {
    grid-row-start: 4;
    grid-row-end: 6;
}

.item5 {
    grid-row-start: 6;
    grid-row-end: 9;
}

.item6 {
    grid-row-start: 6;
    grid-row-end: 8;
}

.catalog__link_color {
    transition: 0.7s;
}

.articles__pagination-item:hover {
    background: #F4F0EC;
    border: 1px solid #F4F0EC;
}


.catalog__link:hover {
    stroke: #292F36;
}

.catalog__link_color:hover {
    fill: #FFF;
}

.articles__pagination {
    padding: 61px calc(50% - 1200px/2) 200px calc(50% - 1200px/2);
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

.articles__pagination-svg {
    padding-left: 5px;
    padding-right: 5px;
}
</style>