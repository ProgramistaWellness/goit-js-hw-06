//Napisz skrypt, który reaguje na zmianę wartości elementu input#font-size-control 
//(zdarzenie input) i zmienia styl inline span#text aktualizując właściwość font-size.
// W rezultacie, podczas zmiany wartości suwakiem, ma zmieniać się rozmiar tekstu w elemencie span

const inputControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
spanText.style.fontSize = '55px'
const changeFontSize = () => {
 const currentSize = parseInt(inputControl.value);
 spanText.style.fontSize = `${currentSize}px`;
};

inputControl.addEventListener("input", changeFontSize);