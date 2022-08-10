const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const liArray = [];
const listElements = document.querySelector('#ingredients');

const list = ingredients.map(list => {
  const listEl = document.createElement('li');
  listEl.textContent = list;
  listEl.classList.add('item');
  return listEl;
});

listElements.append(...list);
