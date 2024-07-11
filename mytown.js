const colorField = document.getElementById("color-field"); 
const fontSizeField = document.getElementById("font-size-fied");
const clickButton = document.getElementById("click-button");
const text = document.getElementById("text");
const checkbox = document.getElementById("checkbox")
const body = document.body;

function buttonPress() {
    text.innerHTML = "Color change so cool!";

    body.style.backgroundColor = colorField.value;
    text.style.fontSize = `${fontSizeField.value}px`;
    let fail = '${fontSizeField.value}px';
}
function checkboxChange() {
    let checked = checkbox.checked;
    console.log(`the checkbox has this state: ${checked}`);

    if (checked) {
        body.style.outlineStyle = "solid";
    } else {
        body.style.outlineStyle = "none";
    }
}