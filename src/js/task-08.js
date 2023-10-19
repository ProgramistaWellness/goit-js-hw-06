//4. Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, pobierz wartość pól jako obiekt, gdzie nazwa
//   pola będzie nazwą właściwości, a wartość pola - wartością właściwości. Aby otrzymać dostęp do elementów 
//   formularza użyj właściwości elements.
//5. Wypisz obiekt z wartościami formularza w konsoli i wyczyść wartości pól input metodą reset.
const loginForm = document.querySelector(".login-form");
const formMail = document.querySelector('[name="email"]');
const formPass = document.querySelector('[name="password"]');
const formBtn = document.querySelector('button');

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formMail = form.elements.email;
    const formPass = form.elements.password;

if (formMail.value === '' || formPass.value === '') {
    alert("Wszystkie pola powinny być wypełnione")
}

const formDataSaved = {
[formMail.name]: formMail.value,
[formPass.name]: formPass.value,
};
console.log(formDataSaved);
form.reset();
})
