// Counter script
var counterElement = document.getElementById("counter");
var incrementElement = document.getElementById("increment");
var decrementElement = document.getElementById("decrement");


var counterValue = 0;

incrementElement.addEventListener("click", function () {
    counterValue = counterValue + 1;
    console.log(typeof (counterElement.textContent));
    counterElement.textContent = counterValue;
})

decrementElement.addEventListener("click", function () {
    if (counterValue > 0) {
        counterValue = counterValue - 1;
        counterElement.textContent = counterValue
    }
})


//hex script
function generateRandomColor() {
    var letters = "0123456789ABCDEF"
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color = color + letters[Math.floor(Math.random() * 16)]
    }

    document.getElementById('colorDisplay').textContent = color;
    document.body.style.backgroundColor = color;
}




