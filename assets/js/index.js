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