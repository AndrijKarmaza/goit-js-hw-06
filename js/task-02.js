// HTML містить порожній список ul#ingredients.
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод 
// document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

// const liElements = [];

// ingredients.forEach(item => {
//   const element = document.createElement('li');
//   element.classList.add('item');
//   element.textContent = item;

//   liElements.push(element);
// });

const liElements = ingredients.map(item => {
  const element = document.createElement('li');
  element.classList.add('item');
  element.textContent = item;
  return element;
});

list.prepend(...liElements);