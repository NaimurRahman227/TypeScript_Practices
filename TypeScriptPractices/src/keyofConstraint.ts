type richPeople = {
    // House : boolean;
    // Jomijoma : number;
    Car : string;
    Bike: string;
    Bus : string;
}

type poorpeople = 'Car' | 'Bike' | 'Bus';


type vehicle = keyof richPeople;

const user = {
    id: 1001,
    name : 'naimur',
    address: {
        city: 'dhaka',
    },
};

type User = {
    id: number;
    name: string;
    address: {
        city : string;
    },
};
const student = {
    roll: 110,
    class: 'four'
};

const getId = <X>(obj : X , key: keyof X) =>{
    return obj[key];
};

const myId = getId(user , 'address');

const studentId = getId(student , 'class')
console.log(studentId)

console.log(myId)