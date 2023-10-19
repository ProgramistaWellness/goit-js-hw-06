//Napisz skrypt, który zmienia kolor tła elementu <body> (poprzez style inline) po kliknięciu na 
//button.change-color i wyświetla wartość koloru w span.color.
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

const body = document.querySelector('body');
const span = document.querySelector('span.color');
const button = document.querySelector('button.change-color');

button.addEventListener("click", () => {
    let currentColor = getRandomHexColor();
    body.style.backgroundColor = currentColor;
    span.textContent = getRandomHexColor();
});