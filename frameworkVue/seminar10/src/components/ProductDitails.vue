<template>
    <div>
        <div v-for="product in products" :key="product.id">
            <img src="../assets/dresser.jpg" :alt="product.alt">
            <h1>{{ product.name }}</h1>
            <p>{{  }}</p>
            <h2></h2>
            <p></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JSProductDitails',

    data() {
        return {
            products: [{
                alt:'photo',
                name: 'Lorem ipsum dolor sit amet.',
                about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita dicta enim molestiae, inventore porro quae veniam architecto, repellendus quod dolores provident recusandae. Quam consectetur animi assumenda, blanditiis exercitationem illum!',
                price: 'Price:',
                status: 'Availability status:'
            }]
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>