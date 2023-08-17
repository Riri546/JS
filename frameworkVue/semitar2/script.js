const app5 = new Vue({
    el: '#app-1',
    data: {
        message: 'Привет, Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app4 = new Vue({
    el: '#app-2',
    data: {
        todos: [
            { text: 'Изучить JavaScript' },
            { text: 'Изучить Vue' },
            { text: 'Создать что-нибудь классное' }
        ]
    },
    methods: {
        adding: function () {
            app4.todos.push({ text: 'Добавлен новый элемент' })
        },
        removing: function remove(el) {
            var element = el;
            element.remove();
        }
    }
})