const startTime = performance.now();

for (let i = 0 ; i < 5000 ; i++){
    console.log(i);
}

const endTime = performance.now();

console.log(`Time took to run the code ${endTime - startTime}`); 

// set data type
const set = new Set();

set.add('apple');
set.add('mango');
set.add('kathal');

console.log(set);

const arr = ['fruit' , 'dryfruit' , 'hunday' , 'bile' , 'fruit']

const seet = new Set(arr);
seet.forEach(value => console.log(value));

console.log(seet);

// brute force
const aray = ['aplle' , 'apple' , 'fruit' , 'kathal' , 'golap' , 'apple' ];
const rmvDupe = (arr) => {
    const newArr = [];
    aray.forEach((element) => {
        if (!newArr.includes(element)){
            newArr.push(element);
        }
    });
    return newArr;
};

console.log(rmvDupe(aray));

const sett = new Set(aray);
console.log(Array.from(sett));