const list = document.querySelectorAll("li.item");
console.log(`Number of categories: ${list.length}`);

for (const element of list) {
  const listHeader = element.querySelector("h2");
  console.log(`Category: ${listHeader.textContent}`);
  const listElements = element.querySelectorAll("li");
  console.log(`Elements: ${listElements.length}`);
}