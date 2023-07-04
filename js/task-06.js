const validateInputEl = document.querySelector('#validation-input');

validateInputEl.addEventListener('blur', validateInput);

function validateInput() {
    if (validateInputEl.value.length === Number(validateInputEl.dataset.length)) {
        validateInputEl.classList.add('valid');
        validateInputEl.classList.remove('invalid');
    } else {
        validateInputEl.classList.add('invalid');
        validateInputEl.classList.remove('valid');  
    }
    };