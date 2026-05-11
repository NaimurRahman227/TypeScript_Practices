type A = null
type B = undefined

type C = A extends number ? true : B extends undefined ? true : false;

type richPeople = {
    bike : string;
    car : string;
    yacht : boolean;
}

type vehicleInfo <T> = T extends keyof richPeople ? true : false;

// Mapped types
const arrayOfNumber: number[] = [1,2,3,54,6,7,8] 
const arrayOFString : string[] = ['2' ,'33' , '56']

const mappedArray : string[]  = arrayOfNumber.map((num) => num.toString());

console.log(mappedArray)

type array = {
    height : number;
    width: string;
}

type commonType <T> = {
    [key in keyof T ] : T[key];
};

const abalChoda : commonType<array> = {
    height : 35,
    width : '35',
};

console.log(abalChoda)

