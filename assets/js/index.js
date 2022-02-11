'use strict'

function handlePromise(promise) {
    return promise.then((data) => {
        console.log(data);
    })
}

const numberPromise = new Promise((resolve, reject) =>{
    resolve(42);
});
const numberPromise1 = Promise.resolve(42);

const numberPromise2 = Promise.reject(42).catch((error)=>{
    console.log('error is', error);
});