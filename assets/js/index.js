'use strict'

/* 
1. Создать форму с инпутом и кнопкой. При каждом сабмите формы, вытаскивать значение инпута, валидировать его 

- пустые значения не подходят
- Переводим строку в нижний регистр

2. После этого пушим полученнное значение в глобальный массив state.
2.1 Очистить форму

3. Отрендерить на странице список из всех элементов массива

4. Добавить каждой li кнопку самоуничтожения

*/


const form = document.getElementById('root-form');
const rootList = document.getElementById('root-list');

const state = [];


form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); // предотвращает поведение по-умолчанию

    const {target, 
    target: {
        todo: {
            value: todoValue
        }
    }
    } = event;

    const inputValue = todoValue.trim().toLowerCase();
    if(!inputValue) {
   return;
    }

    state.push(inputValue);
    target.reset();

    rootList.append(createListElement(inputValue));
  
}

function createListElement(inputValue) {

    const li = document.createElement('li');
    const textNode = document.createTextNode(inputValue);
    li.append(textNode, createButton(deleteHandler.bind(li), inputValue));

    return li;
}

function createButton(onDelete, inputValue) {
    const button = document.createElement('button');
    button.dataset.value = inputValue;

    button.textContent = 'X';
    button.addEventListener('click', onDelete);

    return button;
}

function deleteHandler({target:{dataset: {value}}}) {
this.remove();
const index = state.indexOf(value);
state.splice(index,1);
}





