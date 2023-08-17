var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    }
})

const task1 = new Vue({
    el: '#task1',
    data: {
        text: 'Lorem ipsum dolor sit amet.',
        button: 'Flip over'
    },
    method: {
        flipOver(text){
            this.text = text;
            text = text.split("").reverse().join("");
        }
    }
    // text = 'abcd';
    // str = 
})