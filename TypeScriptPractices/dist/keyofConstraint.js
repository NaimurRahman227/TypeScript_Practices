"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 1001,
    name: 'naimur',
    address: {
        city: 'dhaka',
    },
};
const student = {
    roll: 110,
    class: 'four'
};
const getId = (obj, key) => {
    return obj[key];
};
const myId = getId(user, 'address');
const studentId = getId(student, 'class');
console.log(studentId);
console.log(myId);
//# sourceMappingURL=keyofConstraint.js.map