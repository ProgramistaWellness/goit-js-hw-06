const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener(
  "change",
  () => (text.style.fontSize = input.value + "px")
);
