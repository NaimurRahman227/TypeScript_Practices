"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class parent {
    name;
    dept;
    salary;
    address;
    constructor(name, dept, salary, address) {
        this.name = name;
        this.address = address;
        this.dept = dept;
        this.salary = salary;
    }
}
class worker extends parent {
    position;
    vehicle;
    ms;
    constructor(name, dept, salary, address, position, vehicle, ms) {
        super(name, dept, salary, address);
        this.position = position;
        this.vehicle = vehicle;
        this.ms = ms;
    }
}
const cleaner = new worker('klau', 'cleaning', 12000, 'mirpur', 'jenitor', 'cycle', 'married');
console.log(cleaner.ms);
//# sourceMappingURL=inheritance.js.map