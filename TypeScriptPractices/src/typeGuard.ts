const add = (num1 : number | string , num2 : number | string)=>{
    if (typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    } else {
        return num1.toString() + num2.toString()
    }
}
 const jogfol = add(23 ,45)

 console.log(jogfol)
 const arojog = add(133 , 355)

 console.log(arojog) 