function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.addEventListener('DOMContentLoaded', (event) => {
  const changeColorButton = document.querySelector('.change-color'); // Pobieramy przycisk
  const colorSpan = document.querySelector('.color'); // Pobieramy element <span>

  // Dodajemy nasłuchiwanie na kliknięcie przycisku
  changeColorButton.addEventListener('click', function () {
    const color = getRandomHexColor(); // Wywołujemy funkcję aby otrzymać kolor
    document.body.style.backgroundColor = color; // Zmieniamy kolor tła dla <body>
    colorSpan.textContent = color; // Wyświetlamy wygenerowany kolor w <span>
  });
});

