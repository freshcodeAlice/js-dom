//console.log('1');

//const timeoutId = setInterval(()=>{console.log('tick')}, 1000);

//console.log('3');

//clearInterval(timeoutId)

/* Функция, которая последовательно выводит в консоль числа от 1 до 20 с интервалом 100мс.

Решить можно двумя способами,
setTimeout - рекурсия с if'ом
setInterval - if, clearInterval


Как измерить время выполнения функции:
console.time('1');
console.timeEnd('1');

*/

/*
function count() {
    let i = 1;

    const id = setInterval(()=>{
        console.log(i++);
        if(i>20){
            clearInterval(id);
            console.timeEnd('1');
        }
    },100)

}

console.time('1');
count();
*/

/*
function countTwo() {
    let i = 1;
    const id = setTimeout(function tick() {
        console.log(i++);
        if(i<=20){
            tick();
        }
        console.timeEnd('1');
        clearTimeout(id);
    }, 100);
}

countTwo();
console.time('1');
*/