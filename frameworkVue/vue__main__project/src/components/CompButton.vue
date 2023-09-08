<template>
    <div class="project__buttons_item">{{ text.name }}</div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: Object
    },
}
</script>

<style lang="scss" scoped>
.project__buttons_item {
    display: flex;
    padding: 26px 66px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 18px;
    // background: #CDA274;
    background: #FFF;

    // color: #FFF;
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;

    &-active {
        background: #CDA274;
        color: #FFF;

    }
}
</style>