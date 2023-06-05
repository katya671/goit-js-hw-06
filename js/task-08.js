const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені.");
  } else {
    console.log({ email: email.value, password: password.value });
    form.reset();
  }
};

form.addEventListener("submit", handleSubmit);
