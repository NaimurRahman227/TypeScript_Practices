class Person {
    name : string;

    constructor(name: string){
        this.name = name;
    }

    getSleep(numberOfhours : number){
        console.log(`he sleeps ${numberOfhours} in a day`)
    }
}


class Student extends Person {
    constructor(name : string){
        super(name)
    }

    doStudy(numOfHours : number){
        console.log(`this boy ${this.name} studies for ${numOfHours} hours`)
    }
}

class Teacher extends Person {
    constructor(name : string){
        super(name);
    }

    takeClass(numberOfHopurs: number){
        console.log(`${this.name} sir conduct ${numberOfHopurs} hours of class`);
    }
}

const getUserInfo = (user : Person) =>{
    if (user instanceof Student){
        user.doStudy(6)
    }
    else if (user instanceof Teacher){
        user.takeClass(4);
    } else {
        user.getSleep(7)
    }


}
const student2 = new Student('Namur rahman')
const teacher1 = new Teacher('Wakfor Ali')

const student1 = new Student('faruk')
console.log(Student)

getUserInfo(student2);
