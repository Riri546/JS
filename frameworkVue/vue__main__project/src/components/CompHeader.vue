<template>
    <div class="top">
        <header class="head">
            <nav class="head__navigation">
                <!-- Логотип с сылкой на главную страницу -->
                <div class="head__logo" v-for="head in head__logo" :key="head.id">
                    <a :href="head.link"> <img src="../assets/img/logo.svg" :alt="head.alt"></a>
                </div>

                <!-- Иконки навигации -->
                <div class="head__icon">
                    <div v-for="head__icon in head__icons" :key="head__icon.id">
                        <a class="head__icon_link" :href="head__icon.link">{{ head__icon.name }}</a>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>
  
<script>
export default {
    name: 'HomePage',
    data() {
        return {
            head__logo: [{ link: './../public/index.html', img: "../assets/img/logo.svg", alt: 'logo' }],

            head__icons: [
                { link: 'HomePage.vue', name: 'Home' },
                { link: 'HomePage.vue', name: 'Project' },
                { link: 'HomePage.vue', name: 'Blog' }],

            top__info: [{ title: 'Let Your Home Be Unique', text: 'There are many variations of the passages of lorem Ipsum fromavailable,majority.', button_name: 'Get Started' }],
        };
    },
}
</script>
  
  
<style scoped>
.head {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
    padding-top: 53px;
    padding-bottom: 65px;
}

.head__navigation {
    font-family: 'Jost', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
}

.head__icon {
    display: flex;
    gap: 40px;
}

.head__icon_link {
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 25px */
    transition: 0.7s;
}

.head__icon_link:hover {
    color: #CDA274;
}
</style>
  