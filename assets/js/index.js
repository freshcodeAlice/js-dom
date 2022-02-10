'use strict'

const schrodingerCat = new Promise((resolve, reject) => {
        const catDestiny = Math.random();

        if(catDestiny >= 0.5) {
                resolve('Cat is alive')
        } else {
                reject('Cat is dead');
        }
});

schrodingerCat.then(checkCat, checkCat);


function checkCat(result) {
        console.log(result)
}