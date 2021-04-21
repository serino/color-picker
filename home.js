let redSlider = document.getElementById("redSlider");
let greenSlider = document.getElementById("greenSlider");
let blueSlider = document.getElementById("blueSlider");

let randomColorButton = document.getElementById("randomColorButton");

let square = document.getElementById("square");

redSlider.addEventListener("input", changeColor);
greenSlider.addEventListener("input", changeColor);
blueSlider.addEventListener("input", changeColor);

randomColorButton.addEventListener("click", randomColor);

function changeColor() {
  rgbParagraph.innerHTML = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
  square.style.backgroundColor = rgbParagraph.innerHTML;
}

function randomColor() {
  redSlider.value = Math.floor(Math.random() * 256);
  greenSlider.value = Math.floor(Math.random() * 256);
  blueSlider.value = Math.floor(Math.random() * 256);
  changeColor();
}


