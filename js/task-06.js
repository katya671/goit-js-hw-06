const input = document.querySelector('#validation-input');

const validation = (event) => {
    if (event.target.value.trim().length === +input.dataset.length) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}

input.addEventListener('blur', validation);