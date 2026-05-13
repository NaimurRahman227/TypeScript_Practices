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
        console.log(`${this.name} Make Sound if you are Promoted to next Class ${ClgStudent.promoted}`)
    }
}

const ClgStudent = new student('faruk' , 'HSC !st Year' , 1001 , 4.94 , true)

console.log(ClgStudent.result) 
ClgStudent.makeSound();

class animal {
    constructor(public name : string, public roll : number ,  public clas : number){

    }
}

const dogesh = new animal('kutta' , 19002 , 9090)

console.log(dogesh.name)