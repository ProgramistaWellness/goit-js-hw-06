const currentValue = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;
function increasValue () {
    counterValue += 1;
    currentValue.textContent = counterValue;
};
function decreasValue () {
    counterValue -= 1;
    currentValue.textContent = counterValue;
};
incrementBtn.addEventListener("click", increasValue);
decrementBtn.addEventListener("click", decreasValue);