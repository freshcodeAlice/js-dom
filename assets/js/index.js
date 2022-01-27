/* 
Две самые важные концепции:
1. Все наши элементы - это объекты
2. Мы работаем с событиями

*/


/*
1. getElementById - по id
2. getElementsByClassName - по классу
3. getElementsByTagName - по тэгу

4. querySelector - возвращает 1 встреченный элемент по валидному css-селектору
5. querySelectorAll - возвращает ВСЕ элементы по валидному css-селектору

*/


 //const p = document.getElementById('unique'); //O(1)
//const p = document.getElementsByClassName('paragraph');

//const p = document.querySelector('article > p');

const ps = document.querySelectorAll('p');

const ps2 = document.getElementsByTagName('p');