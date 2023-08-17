// const task1 = () =>{
//     // Get all cards
//     const cards = document.querySelectorAll(".card");
//     cards.forEach(card => {
//         // For each card
//         card.querySelectorAll("div > button").forEach(btn => {
//             // For each button on the card sides
//             btn.addEventListener("click", ev => {
//                 // Toggle the "is-flipped" class of the button parent's parent
//                 ev.target.parentElement.parentElement.classList.toggle("is-flipped");
//             });
//         });
//     });
// }
const app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Привет, Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
