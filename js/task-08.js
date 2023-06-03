const form = document.querySelector('.login-form');

const handleSubmit = (event) => {
    event.preventDefault();
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;
    if (emailValue === '' || passwordValue === '') {
        alert('Всі поля повинні бути заповнені.')
    }
    else {
        console.log({email: emailValue, password: passwordValue})
    }
    form.reset();
}

form.addEventListener('submit', handleSubmit);

