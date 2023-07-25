const colors = [
    'rgb(0, 162, 255)',
    'white'
];
let currentColorIndex = 0;


function setNextBackgroundColor() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    if(currentColorIndex == colors.length - 1) {
        currentColorIndex = 0;
    } else {
        ++currentColorIndex;
    }
}


setInterval(
    setNextBackgroundColor,
    3000
);
