const buttonClearBoard = document.getElementById('clear-board');
const buttonGenerateBoard = document.getElementById('generate-board');

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('color')) {
    const previousSelectedColor = document.querySelector('.selected');
    previousSelectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  }
});

document.addEventListener('click', function(event) {
  if(event.target.classList.contains('pixel')) {
    const selectedColor = document.querySelector('.selected');
    const cssObject = window.getComputedStyle(selectedColor);
    const backgroundColor = cssObject.getPropertyValue('background-color');
    event.target.style.backgroundColor = backgroundColor;
  }
});

buttonClearBoard.addEventListener('click', function() {
  const pixels = document.querySelectorAll('.pixel');
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
});

buttonGenerateBoard.addEventListener('click', function() {
  const boardSize = document.getElementById('board-size').value;
  if (boardSize.length === 0 ) {
    window.alert('Board inválido!');
  }
  else if (boardSize >= 5 && boardSize <= 50) {
    eraseOldBoard();
    createNewBoard(boardSize);
  }
  else if (boardSize < 5) {
    eraseOldBoard();
    createNewBoard(5);
  }
  else if (boardSize > 50){
    eraseOldBoard()
    createNewBoard(50);
  }
});

function createNewBoard(boardSize) {
  const quantityOfPixels = boardSize * boardSize;
  // widthBoard has the size of quantity of pixels * width of pixel - 40px;
  let widthBoard = boardSize * 40;
  widthBoard.toString();
  widthBoard += 'px';
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.style.width = widthBoard;
  document.getElementById('main-container').appendChild(pixelBoard);
  for (let i = 1; i <= quantityOfPixels; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
};

function eraseOldBoard() {
  const pixels = document.querySelectorAll('.pixel');
  const lines = document.querySelectorAll('.line');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].parentElement.removeChild(pixels[index]);
  }
  for (let index = 0; index < lines.length; index += 1) {
    lines[index].parentElement.removeChild(lines[index]);
  }
}
