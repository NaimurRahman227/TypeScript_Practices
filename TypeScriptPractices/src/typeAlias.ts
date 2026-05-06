const user:{
    id: number,
    name :{
        fName : string,
        lName : string,
    },
    gender : 'male' | 'Female',
    house :{
        vill: string,
        thana : string,
    },

} = {
    id : 1001,
    name:{
        fName : 'dsjkhf',
        lName : 'dsfsdf'
    },
    gender : 'Female',
    house:{
        vill : 'harinathpur',

        thana: 'kaxipur'
    }

};

type User = {
    name : string,
    roll: number,
    role: 'Admin' | 'User',
    vehicle : 'Bike' | 'Car' | 'Bus'
}

type duty = {
    shift : "Day" | 'Night' , 
    Salary : number
}

type Employee = User & duty ;

const userr: Employee = {
    name: 'NAimur', 
    roll: 1990,
    role: 'Admin',
    vehicle: 'Bike',
    shift: 'Day',
    Salary: 23000,
};

interface employee {
    age: number,
    height : number,
    skin: string
}

interface newEmployee extends employee {
    color: string,
    paddle: boolean
}

const paddler:newEmployee = {
    age: 34,
    height: 155,
    skin: 'black',
    color: 'Kalu',
    paddle: true
};