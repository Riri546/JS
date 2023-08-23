Vue.component('test', {
    props: {},

    data() {
        return {
            title: 'Hello world 1'
        }
    },

    template: `<h2>{{ title }}</h2>`,
});