type A = null
type B = undefined

type C = A extends number ? true : B extends undefined ? true : false;

type richPeople = {
    bike : string;
    car : string;
    yacht : boolean;
}

type vehicleInfo <T> = T extends keyof richPeople ? true : false;