// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions
const numField = document.getElementById("num-field");
const messageText = document.getElementById("message-text");

let secret;

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function loadGame() {
    secret = 15; //TODO: make the number random
}

function makeGuess() {
    let guess = parseInt(numField.value);
    console.log(`Guess: ${guess}`);
    if (guess < secret) {
        messageText.innerHTML = `${guess} is too low`;
    } else if (guess > secret) {
        messageText.innerHTML = `${guess} is too high`;
    } else if (guess == secret){
        messageText.innerHTML = `${guess}  is correct!`;
        myConfetti({
            particleCount: 100,
            spread :160
        })
    }
}
