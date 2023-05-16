const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const arrayLi = [];
ingredients.forEach((elm) => {
  const listElm = document.createElement("li");
  listElm.textContent = elm;
  listElm.classList.add("item");
  arrayLi.push(listElm);
});
list.append(...arrayLi);
