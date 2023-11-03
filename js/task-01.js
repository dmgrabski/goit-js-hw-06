const categories = document.querySelectorAll('#categories > .item');

console.log(`Liczba kategorii: ${categories.length}`);


categories.forEach(category => {
  
  const headerText = category.querySelector('h2').innerText;
  
  const itemsCount = category.querySelectorAll('ul li').length;
  
  console.log(`Kategoria: ${headerText}, Liczba elementów: ${itemsCount}`);
});
