'use strict'
'use strict'


const user = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 35,
    getName() {
        return this.firstName;
    },
    isSelecter: null,
    isAgree: undefined,
    [Symbol('test')]: {},
    phones: ['4234234', '43243243', '4234234'],
    friend: {
        firstName: '1',
        lastName: '2'
    }
};

const jsonObj = JSON.stringify(user);

const returned = JSON.parse(jsonObj);

/* Создать объект, у которого в значениях лежат строка, число, undefined, null, [], {} и два метода.

Сериализовать (JSON.stringify)
Десериализовать (JSON.parse)

*/