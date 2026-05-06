"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 1001,
    name: {
        fName: 'Naimur',
        lname: 'Rahman'
    },
    gender: 'male',
    favColor: 'Blue_olivegreen'
};
const { gender: Sex, name: { lname } } = user;
console.log(Sex, lname);
//# sourceMappingURL=destructuring.js.map