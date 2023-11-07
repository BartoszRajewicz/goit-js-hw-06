const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const elements = [];

ingredients.forEach((ingredient) => {
  const newList = document.createElement("li");
  newList.textContent = ingredient;
  elements.push(newList);
});

ingredientsList.append(...elements);
