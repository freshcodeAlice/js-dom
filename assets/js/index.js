'use strict'

//Promise:
// - pending - ожидание

// - fulfilled - исполненный
// - rejected - отклоненный


const mypromise = new Promise(function(resolve, reject){
       if(2+2 === 5) {
               resolve('ok');
       } else {
               reject('not ok');
       }
});
mypromise.then((ok)=>{
console.log(ok);
}, (error)=>{
console.log(error);
})


setTimeout(callback, ms);
  
delay(ms).then(calback);


function delay(ms){
return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
})
}