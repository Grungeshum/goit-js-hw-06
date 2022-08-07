const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const liArray = []
const listEl = document.querySelector('#ingredients')

ingredients.map((ingredient) => {
  const element = document.createElement('li')
  element.textContent = ingredient
  element.classList.add('item')

  liArray.push(element)
  listEl.append(element)
})
