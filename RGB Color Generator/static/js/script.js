document.getElementById('red-slider').addEventListener('input', updateColor);
document.getElementById('green-slider').addEventListener('input', updateColor);
document.getElementById('blue-slider').addEventListener('input', updateColor);

const redValue = document.getElementById('redvalue');
const greenValue = document.getElementById('greenvalue');
const blueValue = document.getElementById('bluevalue');
const colorBox = document.getElementById('colorbox');
const copyBtn = document.getElementById('copybtn').addEventListener('click', copyRgbValue);
const inputType = document.getElementById('inputtype');

function updateColor() {
    const red = document.getElementById('red-slider').value;
    const green = document.getElementById('green-slider').value;
    const blue = document.getElementById('blue-slider').value;
    const rgbColor = `rgb(${red},${green},${blue})`;

    // colorBox.style.backgroundColor = rgbColor;
    document.body.style.backgroundColor = rgbColor;

    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;
    inputType.textContent = rgbColor;
}

function copyRgbValue() {
    const red = document.getElementById('red-slider').value;
    const green = document.getElementById('green-slider').value;
    const blue = document.getElementById('blue-slider').value;
    const rgbColor = `rgb(${red},${green},${blue})`;

    navigator.clipboard.writeText(rgbColor)
        .then(() => {
            alert("RGB color value copied to the clipboard: " + rgbColor);
        })
        .catch((error) => {
            alert("Failed to copy to the clipboard");
        });
}
