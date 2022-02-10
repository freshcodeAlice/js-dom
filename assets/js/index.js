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
});