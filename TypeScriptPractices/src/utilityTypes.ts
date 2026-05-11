type product = {
    id: number;
    quantity : number;
    availability : boolean;
    color? : string;
    name: string;
    price : number;
};

type productSummary = {
    id: number;
    name : string;
    price : number;
};

type summary = Pick<product , 'id' | 'name' | 'price'>; 

type omitProduct = Omit<product , 'color' | 'quantity'>;