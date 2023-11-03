const input = document.getElementById('validation-input');


function validateInput() {
  const requiredLength = parseInt(input.getAttribute('data-length'), 10);
  const currentLength = input.value.length;
  
  if (currentLength === requiredLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}

input.addEventListener('blur', validateInput);
