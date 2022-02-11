'use strict'


console.log('start');

setTimeout(()=>{
    console.log('timeOut log');
},0);

const p1 = new Promise((resolve, reject) =>{
    console.log('Promise creation');

    resolve();
    reject();

    console.log('Promise done');
});


p1.then(() =>{
    console.log('Promise then');
})
.catch(()=>{
    console.log('Promise catch');
})
.finally(()=>{
    console.log('Promise finally');
})


console.log('end');