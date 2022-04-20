document.addEventListener('click', function(event) {
  if (event.target.classList.contains('color')) {
    const previousSelectedColor = document.querySelector('.selected');
    previousSelectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  }
});