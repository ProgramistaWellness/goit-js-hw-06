//Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
//Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
//Doda do elementu klasę item.
//Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  const list = document.querySelector("#ingredients");

for (const ing of ingredients) {
    const listElm = document.createElement('li');
    listElm.textContent = ing;
    listElm.classList.add("item");
    list.append(listElm);
};