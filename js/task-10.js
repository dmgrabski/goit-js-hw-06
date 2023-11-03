// Funkcja generująca losowy kolor w formacie hex
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Funkcja tworząca elementy div w liczbie określonej przez użytkownika
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  let boxesMarkup = '';
  let size = 30; // początkowy rozmiar diva

  // Tworzymy odpowiednią ilość elementów div
  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    boxesMarkup += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    size += 10; // zwiększamy rozmiar kolejnych divów
  }

  // Dodajemy utworzone divy do kontenera
  boxesContainer.insertAdjacentHTML('beforeend', boxesMarkup);
}

// Funkcja usuwająca wszystkie elementy div z kontenera
function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Usuwamy zawartość kontenera
}

// Nasłuchiwacze dla przycisków Create i Destroy
document.querySelector('[data-create]').addEventListener('click', function() {
  const amount = document.querySelector('input[type="number"]').value;
  createBoxes(amount);
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
