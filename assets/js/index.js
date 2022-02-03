'use strict'

const form = document.getElementById('root-form');

const state = [];


form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); // предотвращает поведение по-умолчанию

const {target, 
    target: {
        email: {
            value
        }
    }
} = event;
console.dir(target);
console.log(value); // form -> input[name='email'] -> value
}



/* 
1. Создать форму с инпутом и кнопкой. При каждом сабмите формы, вытаскивать значение инпута, валидировать его 

- пустые значения не подходят
- Переводим строку в нижний регистр

2. После этого пушим полученнное значение в глобальный массив state.

3. Отрендерить на странице список из всех элементов массива

*/