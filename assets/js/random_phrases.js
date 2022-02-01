/* Setting variables */
const card = document.querySelector("#card");
const randomWordContainer = document.getElementById("random-container");

// Phrases List
const phrases = [
    'Eu amo pizza.',
    'Sonho morar no Canadá.',
    'Amo desenvolver sites.',
    'Trabalhar na área de tecnologia é meu principal objetivo.'
]

// Random Generator
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
};

// Select a random phrase
card.onmouseenter = () => {
    randomWordContainer.innerHTML = phrases[randomNumber(0, phrases.length - 1)];
};