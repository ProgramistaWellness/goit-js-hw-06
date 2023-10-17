const form = document.querySelector("#validation-input");
const validLength = parseInt(form.dataset.length);
const afterBlur = (event) => {
    event.preventDefault();
    console.log(form.value.length);
    console.log(validLength);
    if (form.value.length === validLength) {
            form.classList.toggle('valid', true);
            form.classList.toggle('invalid', false);
    } else if (form.value.length !== validLength) {
            form.classList.toggle('valid', false);
            form.classList.toggle('invalid', true);
            }      
    else if (form.value === '') {
        form.classList.remove('valid', 'invalid');
}
};
form.addEventListener("blur", afterBlur);
