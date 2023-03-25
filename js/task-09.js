// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
// по кліку на button.change-color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgdColor = document.querySelector('body');
const button = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

button.addEventListener('click', onClick);

function onClick(event) {
const color = getRandomHexColor();
bgdColor.style.backgroundColor = color;
colorValue.textContent = color;
}
