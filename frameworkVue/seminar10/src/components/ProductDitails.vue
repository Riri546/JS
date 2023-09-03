<template>
    <div>
        <div v-for="item in items" :key="item.id">
            <img src="../assets/dresser.jpg" alt="photo">
            <H1></H1>
            <p></p>
            <p></p>
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