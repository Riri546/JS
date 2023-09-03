<template>
    <div>
        <div class="product" v-for="product in products" :key="product.id">
            <img class="product__img" src="../assets/dresser.jpg" :alt="product.alt">
            <h1 class="product__title">{{ product.name }}</h1>
            <p class="product__text">{{ product.about }}</p>
            <div class="product__info">
                <div>
                    <h2 class="product__subtitle">{{ product.price_name }}</h2>
                    <p>{{ product.price_sum }}</p>
                </div>
                <div class="product__subinfo">
                    <h2 class="product__subtitle"> {{ product.status_name }}</h2>
                    <p class="product__text">{{ product.status_value === "true" ? product.available : product.available_none
                    }}</p>
                </div>
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
                price_sum: 99.99,
                status_name: 'Status:',
                status_value: 'true',
                available: 'Available',
                available_none: 'Out of stock'
            }]
        };
    },
    computed: {
        formattedPrice() {
            // this.products.price_sum += '$';
            return '$' + this.products.price_sum
        }
    },

    // methods: {
    //     vailabilityStatus() {
    //         this.products.status = 'false';
    //     }
    // },
}
// }.mount('#app');
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
    flex-direction: column;
    align-items: center;
}

.product__subinfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    gap: 15px;
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
    padding-bottom: 10px;
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
    padding-bottom: 10px;
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
</style>