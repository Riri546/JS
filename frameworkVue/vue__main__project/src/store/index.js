import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // начальное состояние
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