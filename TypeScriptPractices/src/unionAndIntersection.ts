// Union and Intersection 

type userRole = 'admin' | 'user'


const getDashboard = (role: userRole) => {
    if(role === 'admin'){
        return 'Admin dashboard'
    }
    else if (role === 'user'){
        return "User Dashboard"
    }
    else {
        return "Guest Dashboard"
    }
};

const dash = getDashboard('admin');
console.log(dash);

const eligible = (age:number) => {
    const result = age >= 21 ? 'You are eligible for marriage' : 'You are not eligible for marriage ' ;

    console.log(result);
};


eligible(24);

const userTheme = undefined;
const slectedTheme = userTheme ?? 'lightTheme';

console.log(slectedTheme);


const discountCalculator = (price:unknown) =>{

    if(typeof price === 'number'){
        const newPrice = price * 0.9

        console.log(newPrice);
    }

    else if (typeof price === 'string'){
        const [newPrice] = price.split(' ')
        console.log(Number(newPrice) * .9);
    }
    else{
        console.log('Wrong Input')
    }
};

discountCalculator(null);




