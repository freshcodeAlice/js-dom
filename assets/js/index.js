'use strict';
/*
const [closeBtn, openBtn] = document.querySelectorAll('button');


// При наведении мышкой на кнопки поменять местами их содержимое (текст)

const switcher = ({target}) => {
const closeElement = target === closeBtn ? closeBtn : openBtn;
const openElement = target === closeBtn ? openBtn : closeBtn;

    const tempText = closeElement.textContent;
    closeElement.textContent = openElement.textContent;
    openElement.textContent = tempText;

//closeElement.removeEventListener('mouseenter', switcher);
//openElement.removeEventListener('mouseenter', switcher);

}



closeBtn.addEventListener('mouseenter', switcher);
openBtn.addEventListener('mouseenter', switcher);


*/
/* ------------- */



// const [loginBtn, signInBtn] = document.querySelectorAll('button');

// function clickHandler({target}) {
//    console.log(target.dataset.userAttr);
// }

// loginBtn.addEventListener('click', clickHandler);
// signInBtn.addEventListener('click', clickHandler);


/* ------------ */




// Task: При нажатии на кнопку фоновый цвет div-а должен стать такого цвета, как написано на кнопке

const buttons = document.querySelectorAll('button');
const divRoot = document.querySelector('#root'); // O(1)

//Variant 1
for (const btn of buttons){
    btn.addEventListener('click', ({
        target: {
            dataset:{
                color
            },
            parentElement: div
        }}) => {
        div.style.backgroundColor = color;
    })

}

//Variant 2
const handler = ({
    target: {
        dataset:{
            color
        },
        parentElement: div
    }}) => {
    div.style.backgroundColor = color;
}

for (const btn of buttons){
    btn.addEventListener('click', handler)
}