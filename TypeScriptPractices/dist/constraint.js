"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// constrasint in typescript
const createArrayFromString = (value) => [value];
const createArrayFromNumber = (value) => [value];
const createArrayFromObj = (value) => [value];
const StringArray = createArrayFromString('kallu');
console.log(StringArray);
const genericFunction = (value) => {
    return [value];
};
const genericTuple = (param1, param2) => [param1, param2];
const tuple1 = genericTuple('jamil', 24);
console.log(tuple1);
// enroll student to a course
const addStudent = (studentInfo) => {
    return {
        course: 'Next Level',
        ...studentInfo,
    };
};
const sutdent1 = {
    id: 1001,
    nmae: 'ANimuer',
    seriuos: true,
};
const result1 = addStudent(sutdent1);
console.log(result1);
//# sourceMappingURL=constraint.js.map