<template>
    <div>
        <header class="subhead" v-for="subhead in subheader" :key="subhead.id">
            <div class="subhead__img">
                <img class="subhead__img_photo" src="../assets/img/blog/Image_laceholder.jpg" :alt="subhead.alt">
                <span class="subhead__section">
                    <h1 class="subhead__section_title">{{ subhead.title }}</h1>
                    <div>
                        <a class="subhead__link" :href="subhead.linl_htef_one">{{ subhead.link_name_one }}</a> / <a
                            class="subhead__link" :href="subhead.linl_htef_two">{{ subhead.link_name_two }}</a>
                    </div>
                </span>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'JSProjectPage',

    data() {
        return {
            subheader: [
                { src_img: '../assets/img/blog/Image_laceholder.jpg', alr: 'img blog ditails', title: 'Articles & News', linl_htef_one: 'index.html', link_name_one: 'Home', linl_htef_two: 'blogDitails.html', link_name_two: 'Blog' }],

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>