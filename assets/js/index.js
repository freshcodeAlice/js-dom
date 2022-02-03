'use strict'

const form = document.getElementById('root-form');


// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault(); // предотвращает поведение по-умолчанию



// console.log(event.target);
// }


document.addEventListener('click', (event) =>{
    event.stopPropagation(); //предотвращает всплытие события
console.log('click document');
})

window.addEventListener('click', () => {
 console.log('click window')   
})