let counterValue = 0;
function updateDisplay(value) {
  document.getElementById('value').textContent = value;
}


function increment() {
  counterValue += 1;
  updateDisplay(counterValue);
}


function decrement() {
  counterValue -= 1;
  updateDisplay(counterValue);
}


const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);


updateDisplay(counterValue);
