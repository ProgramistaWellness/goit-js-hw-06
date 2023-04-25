const listOfCategories = document.querySelector("#categories");
console.log("Number of categories:", listOfCategories.childElementCount);
const categories = document.querySelectorAll(".item");

categories.forEach((el) => {
  const categoryName = el.querySelector("h2");
  const categoryElements = el.querySelector("ul");

  console.log("Category:", categoryName.textContent);
  console.log("Elements:", categoryElements.childElementCount);
});
