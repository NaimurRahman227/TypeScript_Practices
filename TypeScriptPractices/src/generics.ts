const friends : string[] = ['m,arui' , 'badol' , 'kajol' , 'harun']

const rollNumbers : number[] = [12, 34, 34,45,46,67,78]

const id : Array<number> = [23 ,56 ,68 ,80]

const names: Array<string> = ['sdfs'] 

interface developer<T , X> {
    name : string;
    income: number;
    laptop: string;
    location : string;
    married : boolean;
    bike: T;
    car : X;
}


interface Bike {
    brand: string;
    color: string;
    power: number;
}

interface car {
    fuel: string;
    CC : number;
}

const poorDev :developer<Bike, car> = {
    name: 'kalu',
    income:35356,
    laptop:'Asus',
    married: true,
    location: 'Dianjpur',
    bike: {
        brand: 'Yamaha',
        color: 'Red',
        power: 150,
    },
    car : {
        fuel: 'Octane',
        CC: 2000,
    },
}

console.log(poorDev);