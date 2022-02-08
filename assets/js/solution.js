// new URL

/* ['https://www.instagram.com/leonardodicaprio/', 
    'https://twitter.com/leodicaprio',
    'https://www.facebook.com/LeonardoDiCaprio']*/

const SUPPORTED_SOC_LINK = new Map();
SUPPORTED_SOC_LINK.set('www.facebook.com', 'img_facebook.jpg');
SUPPORTED_SOC_LINK.set('www.instagram.com', 'img_insta.jpg');
SUPPORTED_SOC_LINK.set('twitter.com', 'img_twitter.jpg');

function createSocLinks(contacts) {
const socArr = contacts.map((contact)=>{
    const url = new URL(contact);
    const mapkey = url.hostname;
    const icon = SUPPORTED_SOC_LINK.get(mapkey);
    const img = createElement('img', {attributes: {src: icon}})
    const a = createElement('a', {attributes: {href: contact}}, img);

    return a;
});
}