// arrow function , normal function

function add(num:number , num1:number): number{
    return num + num1;
};

const addition = add(23 , 234);


console.log(addition);

const multiplication = (num2:number , num3:number): number => num2 * num3;

const gunFol = multiplication(23 , 78);

console.log(gunFol);

// rest & spread operator
const schoolFriends = ['faruk' , 'sanuj' , 'sumon' , 'naim'];
const clgFriends = ['tahmid' , 'rakib' , 'rasel' , 'salman' , 'rifat'];

schoolFriends.push(...clgFriends);

console.log(schoolFriends);

// spread operator in object
const user = {
    name: 'rakibul',
    roll: 12432,
    dept: 'ece',
    age: 34,
    maritalStatus: true
};

const userInfo = {
    password : 23234,
    result : 3.45,
    statuss: false
};

const allInfo = {...user , ...userInfo};

console.log(allInfo);

const sendInvite = (...friends: string[]) =>{

    friends.forEach((friend:String) => console.log(`Send Invitation to ${friend}`));
};

sendInvite('naimur' , 'faruk' , 'maruf' , 'hanif' , 'kallu');  


