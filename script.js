const markAllButton = document.getElementById('marked');
const lightBlueContainers = document.querySelectorAll('.light-blue');
const redDots = document.querySelectorAll('.red-dot');
const numberIndicator = document.getElementById('number');

markAllButton.addEventListener('click', () => {
  lightBlueContainers.forEach(container => {
    container.style.backgroundColor = 'white';
    container.style.border = 'none'
  });
  redDots.forEach(dot => {
    dot.style.display = 'none';
  });
  numberIndicator.textContent = '0';
});
