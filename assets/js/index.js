'use strict'
// const prom = new Promise(function(resolve, reject){
//     resolve(); // status - fufilled, промис разрешился

//     // ИЛИ!

//     reject(); // status - rejected, промис отклонен
// })

// prom.then(()=>{
//     // resolve!
// }, ()=>{
//     // reject!
// })

// fetch('./assets/js/obj.json')
// .then((response)=>{
//    return response.json();
// })
// .then((data)=>{
//     document.body.append(JSON.stringify(data));
// })
// .catch((error) => {
//     document.body.append('Error happening!');
// })
// .finally(()=>{
//     document.getElementById('load').remove();
// });



// WHATS THE DIFFERENCE&

//promise.then(f1, f2)

//promise.then(f1).catch(f2) - is more cool!)


class UserError extends Error{
    constructor(message){
        super(message);
        this.userType = 'user';
        Error.captureStackTrace(this, UserError);
    }
}