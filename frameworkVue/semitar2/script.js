const task1 = () =>{
    // Get all cards
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        // For each card
        card.querySelectorAll("div > button").forEach(btn => {
            // For each button on the card sides
            btn.addEventListener("click", ev => {
                // Toggle the "is-flipped" class of the button parent's parent
                ev.target.parentElement.parentElement.classList.toggle("is-flipped");
            });
        });
    });
}
// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Привет, Vue!'
//     }
// })

// const task1 = new Vue({
//     el: '#task1',
//     data: {
//         text: 'Lorem ipsum dolor sit amet.',
//         button: 'Flip over'
//     },
//     method: {
//         flipOver(){
//             this.text = text;
//             text = text.split("").reverse().join("");
//             return text;
//         }
//     }
// })

