function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const setColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const body = document.body;

changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  setColor.textContent = randomColor;
  body.style.backgroundColor = randomColor;
  console.log(randomColor);
});
