'use strict'

//Promise:
// - pending - ожидание

// - fulfilled - исполненный
// - rejected - отклоненный



fetch('./assets/js/obj.json')
        .then((response)=>{
                return response.json();
        })
        .then((data) => {
               return data
        })
        .catch((error)=>{
            console.log('SOME ERROR!', error)
        });









        