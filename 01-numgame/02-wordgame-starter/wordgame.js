let json;
const body = document.body;

// Returns a random integer between min and max
//   [min, min+1, min+2, ... , max-1, max]
function randInt(min, max) {
    let rand = Math.random();
    rand = rand * (max - min + 1);
    rand = rand + min;
    rand = Math.floor(rand);
    return rand;
}

function loadGame() {
    fetch('./words_dictionary.json')
        .then(response => response.text())
        .then(text => {
            // Split the text by lines to get individual words
            json = JSON.parse(text);
            console.log('Words loaded!');
        })
        .catch(error => {
            console.error('Error fetching words: ', error);
        });
    randomBackgroundColor();
}


function randomBackgroundColor() {
    let random = randInt(0,359);
    let colorString = `hsl(${random}, 100%, 50%)`;
    body.style.backgroundColor =  colorString;
}
// TODO: write function isWord(word)

// For checking word:  json.hasOwnProperty("programming")
// For array of words: let arr = Object.keys(json)
// For a random word:  let word = arr[randInt(0, arr.length - 1)];
const randomWord = document.getElementById("random-word");
let allWords = [];
let fiveLetterWords = []
function wordsLoaded() {
    allWords = Object.keys(json)
    let randomIndex = randInt(0, allWords.length-1);
    randomWord.innerHtml = allWords[randomIndex]


    for (let i = 0; i < allWords.length; i++) {
        let word = allwords[i];
        if (word.length != 5) continue
        fiveLetterWords.push(allWords[i]);
    }
    
    randomIndex = randInt(0, fiveLetterWords.length-1);
    secret = fiveLetterWords
}