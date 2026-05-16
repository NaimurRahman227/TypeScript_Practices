class Person {
    name : string;

    constructor(name: string){
        this.name = name;
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

const student1 = new Student('faruk')
console.log(Student)
