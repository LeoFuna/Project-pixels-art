function createDiv1(tag, classN) {
  const CreatDiv = document.createElement(tag);
  CreatDiv.className = classN;
  const Father = document.querySelector('#color-palette');
  Father.appendChild(CreatDiv);
}
createDiv1('div', 'black color');
createDiv1('div', 'red color');
createDiv1('div', 'green color');
createDiv1('div', 'blue color');

function setClassColor() {
  const classColor = document.querySelector('.black');
  classColor.classList.add('selected');
}

setClassColor();

const setClassAll = document.getElementById('#color-pelette');
function setColor () {
  setClassColor.classList
}
