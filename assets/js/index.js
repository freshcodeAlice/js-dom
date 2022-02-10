'use strict'

function loadImage(src) {
        const img = document.createElement('img');
        img.setAttribute('src', src);


        return new Promise((resolve, reject)=>{
                img.addEventListener('load', () =>{
                        resolve(img);
                });
                img.addEventListener('eror', ()=>{
                        reject(new Error('Cannot load image'));
                });
        })
}

loadImage('https://wallpaperaccess.com/full/50.jpg')
.then((img)=>{
        document.body.append(img);
})
.catch((error) => {
        console.error(error)
})
.finally(()=>{
        console.log('loading is done!')
});


let i = 1;

const myprom = new Promise((res, rej) =>{
        if(i === 1) {
                res()
        } else {
                rej
        }
})

myprom.then(() => {
        console.log('i really is 1!')
})