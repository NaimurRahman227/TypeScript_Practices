"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class student {
    name;
    clas;
    roll;
    result;
    promoted;
    constructor(name, clas, roll, result, promoted) {
        this.name = name;
        this.clas = clas;
        this.roll = roll;
        this.result = result;
        this.promoted = promoted;
    }
    makeSound() {
        console.log(`${this.name} Make Sound if you are Promoted to next Class ${ClgStudent.promoted}`);
    }
}
const ClgStudent = new student('faruk', 'HSC !st Year', 1001, 4.94, true);
console.log(ClgStudent.result);
ClgStudent.makeSound();
class animal {
    name;
    roll;
    clas;
    constructor(name, roll, clas) {
        this.name = name;
        this.roll = roll;
        this.clas = clas;
    }
}
const dogesh = new animal('kutta', 19002, 9090);
console.log(dogesh.name);
//# sourceMappingURL=class.js.map