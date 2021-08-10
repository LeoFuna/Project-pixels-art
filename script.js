// 1366 x 768
// Código para criar um bord personalizado
function createLines(quantity) {
  for (let index = 0; index < quantity; index += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'pixel-line';
    document.querySelector('#pixel-board').appendChild(newLine);
  }
}
function createPixels(quantity) {
  const theLines = document.querySelectorAll('.pixel-line');
  for (let index = 0; index < quantity; index += 1) {
    for (let indexInner = 0; indexInner < quantity; indexInner += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newPixel.style.marginRight = '4px';
      newPixel.style.backgroundColor = 'white';
      theLines[index].appendChild(newPixel);
    }
  }
}

function defineBoard() {
  let boardSize = document.querySelector('#board-size');
  if (boardSize.value > 12 || boardSize.value < 0) {
    boardSize.value = '';
    alert("Só é possível tamanho entre 1 e 12");
  } else {
    const lineDivs = document.querySelectorAll('.pixel-line')
    for (let index = 0; index < lineDivs.length; index += 1) {
      document.querySelector('#pixel-board').removeChild(lineDivs[index]);
    }
    createLines(boardSize.value);
    createPixels(boardSize.value);
    boardSize.value = '';
    const pixels = document.querySelectorAll('.pixel');
    for (let values of pixels) {
    values.addEventListener('click', paintPixel);
    }
  }
}


let buttonBoardSize = document.querySelector('#generate-board');
buttonBoardSize.addEventListener('click', defineBoard);

//Código para selecionar a cor que vai ser usada como tinta
const pixelColor = document.querySelectorAll('.color');
function setAsSelected(event) {
  const pixelClicked = event;
  document.querySelectorAll('.selected')[0].className = 'color';
  pixelClicked.target.className = 'color selected';
}

for (let index = 0; index < pixelColor.length; index += 1) {
  pixelColor[index].addEventListener('click', setAsSelected);
}
//-----------------------------------------------------------
// Código para permitir pintar os pixels do board já no load da pagina
function paintPixel(event) {
  const pixelToChange = event.target;
  pixelToChange.style.backgroundColor = document.querySelectorAll('.selected')[0].id;
}

const pixels = document.querySelectorAll('.pixel');
for (let values of pixels) {
  values.addEventListener('click', paintPixel);
}
//-----------------------------------------------------------
// Código para limpar todas as pinturas
function clearPixels(event) {
  const pixels = document.querySelectorAll('.pixel');
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}

const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clearPixels);
