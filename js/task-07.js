// Напиши скрипт, який реагує на зміну значення input#font-size-control
//  (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість 
//  font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.querySelector('#font-size-control');
const size = document.querySelector('#text');

input.addEventListener('input', onChangeTextSize);

function onChangeTextSize(event) {
    size.style.fontSize = `${event.srcElement.value}px`;
}