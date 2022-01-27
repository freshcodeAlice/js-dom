/* 
Две самые важные концепции:
1. Все наши элементы - это объекты
2. Мы работаем с событиями

*/

let i = 1;

function alertWithMessage() {
    alert(`Hurray! You did it! You clicked ${i++} times!`);
}

/*
1. getElementById
2. getElementsByClassName
3. getElementsByTagName

4. querySelector
5. querySelectorAll

*/

const [firstBtn] = document.getElementsByTagName('button');

firstBtn.addEventListener('click', alertWithMessage);

function alertYellowBtn() {
    alert('You clicked yellow button');
}

const yellowButtons = document.getElementsByClassName('yellow-btn');

for (const btn of yellowButtons){
    btn.addEventListener('click', alertYellowBtn);
}