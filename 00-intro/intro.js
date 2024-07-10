// This is the JavaScript code
// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions

const colorField = document.getElementById("color-field"); 
const fontSizeField = document.getElementById("font-size-fied");
const clickButton = document.getElementById("click-button");
const text = document.getElementById("text");
const body = document.body;

function buttonPress() {
    text.innerHTML = "BANANANANANANANANANANANANANA";

    body.style.backgroundColor = colorField.value;
    text.style.fontSize = `${fontSizeField.value}px`;
    let fail = '${fontSizeField.value}px';
}