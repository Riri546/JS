<template>
    <div>
        <header class="subhead__img" v-for="subhead in subheader" :key="subhead">
            <img :class="subhead.class" :src="subhead.src" :alt="subhead.alt">
        </header>
    </div>
</template>

<script>
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
</style>