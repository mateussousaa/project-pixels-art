const buttonClearBoard = document.getElementById('clear-board');

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
