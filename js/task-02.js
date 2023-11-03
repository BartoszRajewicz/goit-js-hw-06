const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const newList = document.createElement("li");
  newList.textContent = ingredient;
  ingredientsList.appendChild(newList);
});
