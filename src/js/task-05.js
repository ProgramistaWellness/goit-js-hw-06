const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const outputFiller = (event) => {
output.textContent = event.currentTarget.value;
if(input.value === '') {
  output.textContent = 'Anonymous';
}};

input.addEventListener("input", outputFiller);
