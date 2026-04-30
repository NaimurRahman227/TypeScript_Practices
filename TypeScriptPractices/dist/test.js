"use strict";
// object destructuring
// array destructuring
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 123,
    name: {
        firstName: "Mezbaul",
        middleName: "Abedin",
        lastName: "Forhan",
    },
    gender: "male",
    favouriteColor: "black",
};
//const myMiddleName = user.name.middleName
const { favouriteColor, name: { middleName: myMiddleName }, } = user;
const friends = ["karim", "Rahim", "Mahim"];
const [, , myBestFriend] = friends;
console.log(myBestFriend);
//# sourceMappingURL=test.js.map