const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = loginForm;

  if (email.value === "" || password.value === "") {
    alert("Wypełnij wszystkie pola formularza!");
  } else {
    console.log(email.value, password.value);
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    loginForm.reset();
  }
});
