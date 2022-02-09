'use strict'


function foo() {
setTimeout(()=>{
    console.log('1');
    foo();
}, 0);
}


//foo();