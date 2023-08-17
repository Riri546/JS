const app1 = new Vue({
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

var app2 = new Vue({
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
            app2.todos.push({ text: 'Добавлен новый элемент' })
        },
    }
})
