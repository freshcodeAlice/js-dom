'use strict'

const root = document.querySelector('#root');

// const HTMLLiElements = responseData.filter((user) => user.firstName && user.id && user.description).map((user)=>createUserCard(user));

const HTMLLiElements = responseData.map((user)=>createUserCard(user));

root.append(...HTMLLiElements)


function createUserCard(user) {

    const h3 = createElement('h3', {classNames: ['cardName']}, document.createTextNode(user.firstName));

    const p = createElement('p', {classNames: ['cardDescription']}, document.createTextNode(user.description));

    const article = createElement('article', 
    {classNames: ['cardConteiner']}, createImageWrapper(user), h3, p);


    return createElement('li', {classNames: ['cardWrapper']}, article);
}

/**
 * 
 * @param {string} type 
 * @param {Object} options
 *  @param {sting[]} options.classNames
 *  @param {function} options.onClick
 * @param {object} options.attributes
 * @param {Node} children
 * @returns {HTMLElement} 
 */
/*
Example ob ATTRIBUTES object
{
    src: 'https://links.com',
    alt: 'text',
    title: 'description',
}

*/

function createElement(type, {classNames=[], onClick = ()=>{}, attributes = {}}, ...children) {
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.onclick = onClick;

    for (const [attrName, attrValue] of Object.entries(attributes)){
        elem.setAttribute(attrName, attrValue);
    }

    elem.append(...children);
    return elem;
}



function createImage(user) {
    const image = document.createElement('img');
    image.classList.add('cardImage');
    image.setAttribute('alt', user.firstName);
    image.setAttribute('src', user.profilePicture);
    image.dataset.id = user.id;

    image.addEventListener('error', handleImageError);
    image.addEventListener('load', handleImageLoad);

    return image;
}

function createImageWrapper(user) {
const imageWrapper = document.createElement('div');
imageWrapper.classList.add('cardImageWrapper');
imageWrapper.style.backgroundColor = stringToColor(user.firstName);
imageWrapper.setAttribute('id', `wrapper${user.id}`);

const initials = document.createElement('div');
initials.classList.add('initials');
initials.append(document.createTextNode(user.firstName[0] || ''));
createImage(user)
imageWrapper.append(initials);

return imageWrapper;
}




/* EVENT HANDLERS */

function handleImageError({target}) {
        target.remove();
}

function handleImageLoad(event) {
    const {target, 
        target: {
            dataset: {
                id
            }
        }
    } = event;
    document.getElementById(`wrapper${id}`).append(target);
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