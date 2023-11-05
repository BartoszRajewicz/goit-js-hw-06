const incrementButton = document.querySelector("[data-action='increment']");
const decrementButton = document.querySelector("[data-action='decrement']");
const valueElement = document.getElementById("value");

let counterValue = 0;

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  valueElement.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  valueElement.textContent = counterValue;
});
