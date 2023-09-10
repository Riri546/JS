<template>
    <div>
        <header class="subhead__img" v-for="subhead in subheader" :key="subhead">
            <img :class="subhead.class" :src="subhead.src" :alt="subhead.alt">
        </header>
        <section class="project__info" v-for="info in informations" :key="info">
            <h1 :class="info.class_title">{{ info.title }}</h1>
            <p :class="info.class_text">{{ info.text1 }}</p>
            <p :class="info.class_text">{{ info.text2 }}</p>
        </section>
        <section class="project__img" v-for="info in informations" :key="info">
            <img :class="info.class_img" :src="info.src" :alt="info.alt">
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'ProjectDitailsPage',

    data() {
        return {
            subheader: [{
                class: 'subhead__img_photo',
                src: require('./../assets/img/projectDitails/subhead.jpg'),
                alt: 'subhead img'
            }]

        };
    },

    computed: {
        ...mapState(['informations'])
    },

    mounted() {

    },

    methods: {

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

.project__info {
    max-width: 658px;
    padding-left: calc(50% - 580px/2);
    padding-right: calc(50% - 580px/2);
}

.info__title {
    padding-bottom: 11px;
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
}

.info__text {
    padding-bottom: 30px;
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