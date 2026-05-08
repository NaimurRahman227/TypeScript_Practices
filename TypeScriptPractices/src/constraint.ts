// constrasint in typescript
const createArrayFromString = (value:string) => [value];

const createArrayFromNumber = (value:number) => [value];

const createArrayFromObj = (value: {
    id:number;
    name:string;
}) => [value];

const StringArray = createArrayFromString('kallu')
console.log(StringArray);

const genericFunction = <T>(value: T) =>{
    return[value];
}
const genericTuple = <X , Y> (param1: X , param2: Y) =>[param1,param2];


const tuple1 = genericTuple('jamil' , 24)
console.log(tuple1)

// enroll student to a course

const addStudent = <T>(studentInfo : T) =>{
    return {
        course : 'Next Level',
        ...studentInfo,
    };
};

const sutdent1 = {
    id: 1001,
    nmae: 'ANimuer',
    seriuos: true,
}

const result1 = addStudent(sutdent1)
console.log(result1)

// keyof operator constraint
type pagol = {
    sex : 'male' | 'female';
    skin : 'Back' | 'white';
    height : number;
    vill : string;
};