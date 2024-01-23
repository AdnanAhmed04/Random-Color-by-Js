
function generateRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    console.log(red)
    console.log(green)
    console.log(blue)

    var randomColor = `rgb(${red}, ${green}, ${blue})`;
    console.log(randomColor)

    document.getElementById('colorBox').style.backgroundColor = randomColor;
}
