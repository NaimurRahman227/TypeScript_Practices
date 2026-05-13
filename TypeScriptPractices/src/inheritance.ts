class parent {
    name : string;
    dept : string;
    salary : number;
    address : string;
    constructor(name : string , dept : string , salary : number , address: string){
        this.name = name
        this.address = address
        this.dept = dept
        this.salary = salary
    }
}

class worker extends parent {
    position : string;
    vehicle : string;
    ms : string;
    constructor (name : string, dept : string, salary: number , address: string, position : string , vehicle : string , ms : string){
        super(name , dept , salary , address)
        this.position = position
        this.vehicle = vehicle
        this.ms = ms
    }
}

const cleaner = new worker('klau' , 'cleaning' , 12000 , 'mirpur' , 'jenitor' , 'cycle' , 'married')

console.log(cleaner.ms)