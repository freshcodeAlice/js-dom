'use strict'

function sum(a,b) {
    return a+b;
}

function multyply(a,b){
    return a*b;
}

function withLog(func, ...args){
    const res = func(...args);
    console.log(res);
    return res;
}

//withLog(sum, 2, 3);

function withLog2(func){ // Функция-Декоратор
    return function(...args){
        const res = func(...args);
        console.log(res);
        return res;
    }
}

const sumWithLog = withLog2(sum);
sumWithLog(2,7);

const multyWithLog = withLog2(multyply);
multyWithLog(2,2);