// Напиши скрипт, який під час набору тексту в інпуті input#name-input 
// (подія input), підставляє його поточне значення в span#name-output. 
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const input = document.querySelector('#name-input');
const name = document.querySelector('#name-output');

input.addEventListener('input', onInput)

function onInput(event) {
    if(event.currentTarget.value) {
        name.textContent = event.currentTarget.value;
    } else {
        name.textContent = 'Anonymous'
    };
    
}