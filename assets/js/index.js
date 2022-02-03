'use strict'

const form = document.getElementById('root-form');


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

console.log(value); // form -> input[name='email'] -> value
}
