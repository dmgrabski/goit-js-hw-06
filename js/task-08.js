document.addEventListener('DOMContentLoaded', (event) => {
    // Pobranie formularza po klasie
    const loginForm = document.querySelector('.login-form');
  
    loginForm.addEventListener('submit', function (event) {
      // Zapobieganie domyślnej akcji przeglądarki
      event.preventDefault();
  
      // Pobranie elementów formularza
      const { email, password } = this.elements;
  
      // Sprawdzenie, czy pola są wypełnione
      if (email.value === '' || password.value === '') {
        // Jeśli nie, wyświetlenie alertu
        alert('Please fill in all the fields.');
        return; // Zakończenie funkcji, jeśli nie wszystkie pola są wypełnione
      }
  
      // Jeśli pola są wypełnione, utworzenie obiektu z danymi
      const formData = {
        email: email.value,
        password: password.value
      };
  
      // Wyświetlenie obiektu w konsoli
      console.log(formData);
  
      // Wyczyszczenie formularza
      this.reset();
    });
  });
  
