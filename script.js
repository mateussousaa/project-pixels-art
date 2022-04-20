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