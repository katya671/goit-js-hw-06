const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsArea = document.querySelector('#ingredients');

const ingredientsElements = [];
ingredients.forEach(item => {
  const ingredient = document.createElement('li');
  ingredient.textContent = item;
  ingredient.classList.add('item');

  ingredientsElements.push(ingredient);
});

ingredientsArea.append(...ingredientsElements);