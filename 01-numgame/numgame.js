// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions
const numField = document.getElementById("num-field");
const messageText = document.getElementById("message-text");

let secret;
let min= 1;
let max = 1000;

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function loadGame() {
    numField.min = min;
    numField.max = max;
    numField.value = max;
    secret = Math.random();
    secret = secret * (max-min+1);
    secret = secret + min;
    secret = Math.floor(secret);
}

function reloadGame() {
    numField.min = min;
    numField.max = max;
    numField.value = max;
    secret = Math.random();
    secret = secret * (max-min+1);
    secret = secret + min;
    secret = Math.floor(secret);
}

function makeGuess() {
    let guess = parseInt(numField.value);
    console.log(`Guess: ${guess}`);
    let diff = Math.abs(guess - secret);
    if (guess < secret) {
        messageText.innerHTML = `${guess} is too low`;
    } else if (guess > secret) {
        messageText.innerHTML = `${guess} is too high`;
    } else if (Math.abs(guess - secret)) {
        messageText.innerHTML = `${guess} is close but not quite`;
    } else if (guess == secret){
        messageText.innerHTML = `${guess}  is correct!`;
        myConfetti({
            particleCount: 1000,
            spread :160
        })
    }
}
