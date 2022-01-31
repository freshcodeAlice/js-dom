'use strict'

const btn = document.querySelector('button');
const div = document.querySelector('#root');

function clickHandler(event) {
console.dir(event.currentTarget)
}


btn.addEventListener('click', clickHandler, true);
div.addEventListener('click', clickHandler, false);
document.body.addEventListener('click', clickHandler, true);
document.addEventListener('click', clickHandler, true);
window.addEventListener('click', clickHandler, true);