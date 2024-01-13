// * Задачи по vue
// Задание 1
// Создать кнопку "Перевернуть". При клике на кнопку текст кнопки, должен перевернуться и отобразиться в обратном порядке.
// Задание 2
// есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".
// * При клике на элемент списка он должен быть удален. (по желанию)

Vue.createApp({
    data() {
        return {
            buttonText: 'Перевернуть',
            listOfElements: ['элемент 1', 'элемент 2', 'элемент 3', 'элемент 4', 'элемент 5'],
            newElement: 'Новый элемент списка'
        };
    },
    methods: {
        reverseButtonText() {
            this.buttonText = this.buttonText.split('').reverse().join('');
        },
        addNewElementToList(){
            this.listOfElements.push(this.newElement);
        },
        deleteElementFromList(event) {
            event.target.remove();
        }
    },
}).mount('#app');