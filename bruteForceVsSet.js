function generateSampleData (size){
    const itemPool = [
        'badol',
        'tamil',
        'naimur',
        'sadia',
        'taimur',
        'naimur',
        'badol',
    ];

    const generateData = [];
    for (let i = 0 ; i < size ; i++){
        const randomIndex = Math.floor(Math.random() * itemPool.length);
        generateData.push(itemPool[randomIndex]);
    }

    return generateData;
};

const largeData = generateSampleData(500000);
console.log('Data Size:' , largeData.length);

const startTime = performance.now();

const removeDupe  = (arr) => {
    const newArr = [];
    arr.
    forEach(element => {
        if(!newArr.includes(element)){
            newArr.push(element);
        }
    });

    return newArr;
};
console.log(removeDupe(largeData));

const endTime = performance.now();
console.log(`Array Implementation took : ${endTime - startTime} ms`);

const startTimee = performance.now();
const setData = new Set(largeData);
console.log(setData);
const LasttTime = performance.now();
console.log(`Set method took ${LasttTime - startTimee} ms`);

