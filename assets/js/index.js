'use strict'

// Task: дан инпут, при потере фокуса в диве рядом с ним высвечивается квадрат числа, введенного в инпут

const input = document.querySelector('#input');
const div = document.querySelector('#value');

input.addEventListener('blur', getSquareElement);

function getSquareElement({target: {value}}) {
   const numberValue = Number(value);
   const res = getSquare(numberValue);
   getTextIntoElement(div, res);
}

function getSquare (n) {
    if(!isNaN(n)) {
        return n*n;
    } else {
        return 'Error! Your number isn`t number';
    }
}

function getTextIntoElement(element, text) {
    element.textContent = text
}

// Hometask:
// Сделать два инпута - для email и для password
// При потере фокуса инпутом валидировать его значение - если оно правильное, то сделать рамочку инпута зеленой, в противном случае - красной.
//Принцип валидации:
//1. Email должен содержать '@' и '.' (Просто содержать)
//2. Пароль должен быть не меньше 5 символов и содежать что-либо из спец-символов:
//[`, !, @, #, $, %, ^, &, *, (, )]

// Без регулярных выражений!)