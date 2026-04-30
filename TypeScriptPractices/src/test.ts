
// object destructuring
// array destructuring

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

const {
  favouriteColor,
  name: { middleName: myMiddleName },
} = user;



const friends = ["karim", "Rahim", "Mahim"];

const [, , myBestFriend] = friends;

console.log(myBestFriend);