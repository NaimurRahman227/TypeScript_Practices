const kgToGram = (input:string | number)=>{
    if( typeof input === 'number'){
        return input * 1000;
    }
    else if(typeof input === 'string'){
        const[value] = input.split(' ')
        return `converted output is : ${Number(value)*1000}`;
    }
};

const result1 = kgToGram(23) as number;
console.log(result1);
const result2 = kgToGram('45 kg')
console.log(result2);