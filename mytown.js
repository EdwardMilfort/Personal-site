const randomWord = document.getElementById("random-word");
const guessField = document.getElementById("guess-field");
const feedbackText = document.getElementById("feedback-text");
let allWords = [];
let fiveLetterWords = [];
let secret = '';
function wordsLoaded() {
    allWords = Object.keys(json);
    let randomIndex = randInt(0, allWords.length-1);
    randomWord.innerHTML = allWords[randomIndex];


    for (let i = 0; i < allWords.length; i++) {
        let word = allWords[i];
        if (word.length != 5) continue;
        fiveLetterWords.push(allWords[i]);
    }
    
    randomIndex = randInt(0, fiveLetterWords.length-1);
    secret = fiveLetterWords[randomIndex];
}

function changeGuess() {
    let guess = guessField.value.toLowerCase();


    if (guess.length < 5) return;

    if (guess.length > 5) {
        guessField.value = "";
        return;
    }
    console.log(`guess: "${guess}"`);


    if (!json.hasOwnProperty(guess)) {
        console.log(`this IS  NOT a word!`);
    feedbackText.innerHTML += `"${guess}" is not a word. Try again.<br>`
    guessField.value = "";
    return;
    }
    
    let correctPlacement = 0;
    for (let i = 0; i< 5; i++) {
        if(guess [i] == secret [i]) {
            correctPlacement++;
        }
    }
    feedbackText.innerHTML += `<span class ="correct"> ${guess}" </span> has ${correctPlacement} letter(s) in the correct place`
    guessField.value = "";
}