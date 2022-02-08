// new URL

/* ['https://www.instagram.com/leonardodicaprio/', 
    'https://twitter.com/leodicaprio',
    'https://www.facebook.com/LeonardoDiCaprio']*/

const SUPPORTED_SOC_LINK = new Map();
SUPPORTED_SOC_LINK.set('www.facebook.com', 'fa-facebook');
SUPPORTED_SOC_LINK.set('www.instagram.com', 'fa-instagram');
SUPPORTED_SOC_LINK.set('twitter.com', 'fa-twitter');

function createSocLinks(contacts) {
    return contacts.map((contact)=>{
    const {hostname} = new URL(contact);
    const classIcon = SUPPORTED_SOC_LINK.get(hostname);
    return createElement('a', {
        attributes: {
            href: contact
        },
    classNames: ['fab', classIcon]}
    );

    });
}