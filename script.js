const pixelBoard = document.getElementById('pixel-board');
const boardLength = 25;
let pixel = document.querySelectorAll('.pixel');
const colorPalette = document.getElementById('color-palette');
let colorPick = document.querySelectorAll('.color');

for (let index = 0; index < boardLength; index += 1) {
  let pixelDiv = document.createElement('div');

  pixelDiv.className = 'pixel';

  pixelBoard.appendChild(pixelDiv);
}

function defaultColor() {
  document.querySelector('.black').classList.add('selected');
}

defaultColor();

let selectedColor;
let colorPaint = 'black';

colorPalette.addEventListener('click', function selectColor(event) {
  selectedColor = document.querySelectorAll('.selected');

  if (event.target.classList.contains('color')) {
    if (selectedColor.length > 0) {
      for (let index = 0; index < selectedColor.length; index += 1) {
        selectedColor[index].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  }
  colorPaint = document.querySelector('.selected').classList[1];
  return colorPaint;
});

pixelBoard.addEventListener('click', function paintPixel(event) {
  if (event.target.classList.contains('pixel')){
    if (event.target.classList.length > 1) {
      event.target.className = 'pixel';
      event.target.classList.add(colorPaint);
    } else {
      event.target.classList.add(colorPaint);
    }
  }
})
