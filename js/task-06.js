const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value;

  if (inputValue.length >= 5) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
