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
        <div>
            <nav></nav>
            <nav></nav>
            <nav></nav>
            <nav></nav>
        </div>
        <section class="project">
            <article class="project__catalog">
                <img class="project__img" src="../assets/img/project/Photo (1).png" alt="photo">
                <div class="project__about">
                    <div class="project__text">
                        <h1 class="project__title">Minimal Bedroom</h1>
                        <a class="project__link" href="#">Decor</a>
                        <span class="project__link">/</span>
                        <a class="project__link" href="#">Artchitectur</a>
                    </div>
                    <div>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"
                                fill="none">
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg></a>
                    </div>
                </div>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    name: 'JSProjectPage',

    data() {
        return {
            subheader: [
                { src_img: '../assets/img/blog/Image_laceholder.jpg', alr: 'img blog ditails', title: 'Articles & News', linl_htef_one: 'index.html', link_name_one: 'Home', linl_htef_two: 'blogDitails.html', link_name_two: 'Project' }],

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

.project {
    padding: 61px calc(50% - 1200px/2);
}

.project__about {
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
</style>