/* Setting variables */
const card = document.querySelector("#card");
const randomContainer = document.querySelector("#random-container");

// Phrases List
const phrases = [
    'Não costumo tomar muito café.',
    'Sonho morar no Canadá.',
    'Amo desenvolver sites.',
    'Comecei a me dedicar em Web Development em 2021.',
    'Ouço música a quase todo momento.',
    'Tive meu primeiro contato com HTML e CSS em 2018.',
    'Em 25 de maio de 2022, tive minha primeira entrevista de emprego.',
    '13 de junho de 2022 marca o início do meu primeiro estágio!'
]

// Random Generator
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Select a random phrase

let oldphrase;
card.onmouseenter = () => {
    let newphrase = phrases[randomNumber(0, phrases.length - 1)];
    
    // Verify if the new word is the same as before.
    if (newphrase == oldphrase){
        while(newphrase == oldphrase){
            newphrase = phrases[randomNumber(0, phrases.length - 1)];
        }
    }

    // Output
    randomContainer.innerHTML = newphrase;
    oldphrase = newphrase;
}
