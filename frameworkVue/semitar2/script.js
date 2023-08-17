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

