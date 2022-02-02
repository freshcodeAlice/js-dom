'use strict'

const root = document.querySelector('#root');

const HTMLLiElements = data.map((user)=>createUserCard(user));

root.append(...HTMLLiElements)


function createUserCard(user) {
// магия происходит
const card = document.createElement('li');
card.classList.add('cardWrapper');

const container = document.createElement('article');
container.classList.add('cardConteiner');
card.append(container);


///////

const imageWrapper = document.createElement('div');
imageWrapper.classList.add('cardImageWrapper');
imageWrapper.style.backgroundColor = stringToColor(user.name);

const initials = document.createElement('div');
initials.classList.add('initials');
initials.append(document.createTextNode(user.name[0] || ''));

const image = document.createElement('img');
image.classList.add('cardImage');
image.setAttribute('alt', user.name);
image.setAttribute('src', user.profilePicture);

image.addEventListener('error', handleImageError);



imageWrapper.append(initials, image);

////////

const header = document.createElement('h3');
header.classList.add('cardName');
//header.textContent = user.name;
const textName = document.createTextNode(user.name);
header.append(textName);

const description = document.createElement('p');
description.classList.add('cardDescription');
description.textContent = user.description;

container.append(imageWrapper, header, description);
    return card;
}


/* EVENT HANDLERS */

function handleImageError({target}) {
        target.remove();
}



/* Utils */

function stringToColor (str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}