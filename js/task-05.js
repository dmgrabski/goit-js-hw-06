const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

function updateOutput() {
  
  output.textContent = input.value.trim() === '' ? 'Anonymous' : input.value;
}

input.addEventListener('input', updateOutput);
