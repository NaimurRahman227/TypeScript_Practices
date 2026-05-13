class student {
    name : string;
    clas: string;
    roll : number;
    result : number;
    promoted : boolean;

    constructor(name : string , clas: string, roll: number , result : number, promoted : boolean){
        this.name = name
        this.clas = clas
        this.roll = roll
        this.result = result
        this.promoted = promoted
    }

    makeSound(){
        console.log(`Make Sound Who are Promoted to next Class ${ClgStudent.name}`)
    }
}

const ClgStudent = new student('faruk' , 'HSC !st Year' , 1001 , 4.94 , true)

console.log(ClgStudent.result) 