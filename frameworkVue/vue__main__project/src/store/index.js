import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // начальное состояние
        informations: [{
            title: 'Minimal Look Bedrooms',
            class_title: 'info__title',
            class_text: 'info__text',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
            text2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
        }]
    },
    mutations: {
        // методы для изменения состояния
    },
    actions: {
        // методы для асинхронности
    },
    getters: {
        // методы для чтения состояний
    },
    modules: {
        // модули Vuex для разделения хранилища на под-хрнилища
    }
})