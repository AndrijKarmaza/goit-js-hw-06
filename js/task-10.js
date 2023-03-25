// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити, 
// після чого рендериться колекція. Натисненням на кнопку Очистити, 
// колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.

// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.

// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, 
// у такий спосіб видаляючи всі створені елементи.

let inputValue;
let divWidth = 30;
let divHeight = 30;
const content = [];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

input.addEventListener('input', onInput)
function onInput(event) {
  inputValue = event.srcElement.value;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i +=1) {
    content.push(`<div style = "width:${divWidth}px; height: ${divHeight}px; background-color: ${getRandomHexColor()}"></div>`);
    divWidth +=10;
    divHeight +=10;
  }
  boxes.innerHTML = content.join('');
}

btnCreate.addEventListener('click', onClickCreate);

function onClickCreate(event) {
  createBoxes(inputValue);
}

btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = '';
  content.splice(0,content.length);
  divWidth = 30;
  divHeight = 30;
}