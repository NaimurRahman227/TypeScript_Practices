const user = {
    id:1001,
    name: {
        fName:'Naimur',
        lname : 'Rahman'
    },
    gender: 'male',
    favColor : 'Blue_olivegreen'
};
const {gender : Sex , name:{lname}} = user;


console.log(Sex , lname);