//Napisz skrypt tworzenia i usuwania kolekcji elementów. Użytkownik wprowadza liczbę elementów 
//do input i naciska przycisk Utwórz, co rozpoczyna tworzenie się kolekcji. Po naciśnięciu przycisku
//Usuń, kolekcja elementów zostaje usunięta.
//Utwórz funkcję createBoxes(amount), która przyjmuje jeden parametr - liczbę. Funkcja tworzy tyle elementów
//<div>, ile wybrano w amount i dodaje je do div#boxes.

//1. Wymiary pierwszego <div> - 30px na 30px.
//2. Każdy następny element powinien być szerszy i wyższy od poprzedniego o 10px.
//3. Wszystkie elementy powinny mieć losowy kolor tła w formacie NEX. Użyj gotowej funkcji 
//   getRandomHexColor aby otrzymać kolor.

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const input = document.querySelector('#controls input');
  const createBtn = document.querySelector('#controls button[data-create]');
  const destroyBtn = document.querySelector('#controls button[data-destroy]');
  const boxes = document.querySelector('#boxes');

  function createBoxes(amount) {
    let markup = '';
    for (let i = 0; i < amount; i ++) {
        let pixels = 30 + i * 10;
        let divCode = `<div style="width:${pixels}px; height:${pixels}px; background-color:${getRandomHexColor()}"></div>`
        
        markup += divCode;
    }
boxes.insertAdjacentHTML("beforeend", markup)
}

  createBtn.addEventListener("click", () => {
    const numberOfBoxes = parseInt(input.value);
    createBoxes(numberOfBoxes);
    
})
    
destroyBtn.addEventListener("click", () => {
    boxes.innerHTML = '';
    input.value = '';
})
    
  