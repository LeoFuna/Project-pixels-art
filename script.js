// 2 -
function coloringPalette() {	
	let palette = document.getElementsByClassName('color');	
	for (let color = 0; color < palette.length; color += 1) {				
		palette[color].style.backgroundColor = palette[color].innerText;
		palette[color].style.color = palette[color].innerText;
	}
}	

coloringPalette();

// 3 -
// document.querySelector('.color').style.backgroundColor = 'black';

// 4 - 
function creatingBoard() {		
	for (let index = 1; index <= 5; index += 1) {
		let newDiv = document.createElement('div');
		for (j = 1; j <= 5; j += 1) {
			let newPixel = document.createElement('div');			
			newPixel.classList.add('pixel');
			document.getElementById('pixel-board').appendChild(newDiv);
			newDiv.appendChild(newPixel);			
		}
	}
}

creatingBoard();

// 5 -
let newBorder = document.getElementById('color-palette').nextElementSibling;
newBorder.classList.add('border-pixel');

// 6 -
let pixelBlack = document.querySelector('.color');
pixelBlack.classList.add('selected')

// 7
document.getElementById('color-palette').addEventListener('click', selected);

function selected() {
	let whosSelected = document.querySelector('.selected');
	if (event.target !== whosSelected) {				
		whosSelected.classList.remove('selected');
		event.target.classList.add('selected');		
	}
	console.log(event.target)
}





