//Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input 
//(zdarzenie input) wstawia jego aktualną wartość do span#name-output. 
//Jeśli pole input jest puste, w spanie powinien wyświetlić się tekst "Anonymous".

const outputField = document.querySelector("#name-output");
const inputField = document.querySelector("#name-input");
outputField.textContent = "Anonymous";
inputField.addEventListener("input", (event) => {
    outputField.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        outputField.textContent = "Anonymous";
    }
})