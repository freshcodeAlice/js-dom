'use strict';

const image = document.querySelector('.slide');

const [prevBtn, nextBtn] = document.querySelectorAll('.btn');

const imageDataBase = [
    'https://artguide.com/storage/post/1599/wide_detail_picture.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Kuindzhi_by_I.Kramskoy_%281872%2C_GTG%29.jpg/280px-Kuindzhi_by_I.Kramskoy_%281872%2C_GTG%29.jpg',
    'https://kulturologia.ru/files/u19001/Kuinji-moonlight-night-1.jpg',
    'https://s0.rbk.ru/v6_top_pics/media/img/0/99/755486691616990.png',
    'https://artguide.com/uploads/ckeditor/pictures/6136/content_14_kuindzi_put.jpg',
];

const slider = new Slider(imageDataBase);

const createSliderHandler = (direction) => () => {
        slider.currentIndex = slider[direction === 'next' ? 'next' : 'prev'];
        updateView();
    };
prevBtn.addEventListener('click', createSliderHandler('prev'));
nextBtn.addEventListener('click',  createSliderHandler('next'));

function updateView() {
    image.setAttribute('src', slider.currentSlide);
}

updateView();


/* -------------- */

// Замыкание

/*
let value = 10;

function log() {
    console.log('LOG function:' + value);
}

let test = true;

function wrapper () {
    let value = 20;
    console.log(value);

}

log();

wrapper();
*/


function makeCounter() { //Функция-обертка
    let count = 0; // Переменная в замыкании
    return {
        increment(){
            return ++count;
                },
        decrement() {
            return --count;
        }
    }
}


const counter = makeCounter();


/*
Напишите функцию createAdder(n), которая возвращает другую функцию.
Возвращенная функция должна принимать аргумент m и складывать его с "запомненным" аргументом n.

const adder = createAdder(50);
adder(10) // 60
adder(20) // 80
adder(100) // 180
*/

const createAdder = (n) => (m) => n = m+n;

const adder = createAdder(50);
adder(10)


/* Напишите функцию, которая принимает имя и возвращает другую функцию. Возвращенная должна принимать форму приветствия и выводить в консоль фразу типа "<приветствие>, <имя>" */




/* 

function getAlertCounter() {
    let i = 0;
    return function () {
        alert(`You clicked ${i++} times`)
    }
}


const firstBtn = document.querySelector('#btn');
firstBtn.addEventListener('click', getAlertCounter());

 */

const firstBtn = document.querySelector('#btn');

function getLog(event) {
    console.group();
    console.dir(event.target); // target - на ком сработало событие
    console.dir(event.currentTarget); //currentTarget - на какой элемент навесили этот обработчик события
    console.groupEnd();

//    firstBtn.removeEventListener('click', getLog);
}

firstBtn.addEventListener('click', getLog);
document.body.addEventListener('click', getLog);
document.addEventListener('click', getLog);
window.addEventListener('click', getLog);

const mouseEvent = new MouseEvent('click');

//firstBtn.dispatchEvent(mouseEvent);


/* Задача: по нажатию на кнопку вывести в консоль ее содержимое*/
