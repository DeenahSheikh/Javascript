function randomQuote() {
    const quotes = [
        "Stay curious.",
        "Code. Learn. Repeat.",
        "Small steps every day.",
        "Consistency beats intensity."
    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randomIndex]);
}

randomQuote();