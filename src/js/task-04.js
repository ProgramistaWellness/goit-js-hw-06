const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");
let counterValue = 0;

function decrementValue() {
  counterValue--;
  console.log(counterValue);
  value.textContent = counterValue;
}

decrementBtn.addEventListener("click", decrementValue);

function incrementValue() {
  counterValue++;
  console.log(counterValue);
  value.textContent = counterValue;
}

incrementBtn.addEventListener("click", incrementValue);
