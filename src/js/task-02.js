const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
ingredients.forEach((elm) => {
  const listElm = document.createElement("li");
  listElm.textContent = elm;
  listElm.classList.add("item");
  list.append(listElm);
});
