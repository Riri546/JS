<template>
    <div>
        <div class="product" v-for="product in products" :key="product.id">
            <img class="product__img" src="../assets/dresser.jpg" :alt="product.alt">
            <h1 class="product__title">{{ product.name }}</h1>
            <p class="product__text">{{ product.about }}</p>
            <div class="product__info">
                <h2 class="product__subtitle">{{ product.price }}</h2>
                <div>
                    <h2 class="product__subtitle color" v-if="product.status = true">
                        {{ product.available }}</h2>
                    <h2 class="product__subtitle color__none" v-if="product.status = false">{{ product.available_none }}
                    </h2>
                </div>
                <!-- <input class="product__input" type="rad/io" checked > -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDitails',

    data() {
        return {
            products: [{
                alt: 'photo',
                name: 'Lorem ipsum dolor sit amet.',
                about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita dicta enim molestiae, inventore porro quae veniam architecto, repellendus quod dolores provident recusandae. Quam consectetur animi assumenda, blanditiis exercitationem illum!',
                price_name: 'Price:',
                price_num: '',
                status: '',
                available: 'Available',
                available_none: 'Out of stock'
            }]
        };
    },
    computed: {
        // a computed getter
        publishedBooksMessage() {
            // `this` points to the vm instance
            return this.author.books.length > 0 ? 'Yes' : 'No'
        }
    },

    methods: {
        vailabilityStatus() {
            this.status.push = false;

        }
    },
}.mount('#app');
</script>

<style lang="css" scoped>
.product {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
}

.product__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.product__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 65px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 81.25px */
    max-width: 434px;
    padding-bottom: 18px;
}

.product__subtitle {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 81.25px */
    max-width: 434px;
    padding-bottom: 18px;
}

.product__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    padding-bottom: 21px;
    letter-spacing: 0.22px;
    max-width: 434px;
}

.color {
    color: green;
}

.color__none {
    color: red;
}
</style>