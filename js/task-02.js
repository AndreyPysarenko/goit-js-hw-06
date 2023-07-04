const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const ingredientsItem = ingredients.map((ingredient) => {
  const items = document.createElement("li");
  items.textContent = ingredient;
  items.classList.add("item");
  return items;
});

ingredientsList.append(...ingredientsItem);
