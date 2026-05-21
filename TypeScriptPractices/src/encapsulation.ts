// Encapsulation in OOP

class BankAccount {
    public readonly userId : number;
    public userName : string;
    private userbalance: number;

    constructor(userId : number, userName : string, userbalance : number){
        this.userId = userId;
        this.userName = userName;
        this.userbalance = userbalance;
    }

    private addbalance(amount : number){
        this.userbalance = this.userbalance + amount;
    }
}

class studentAccount extends BankAccount {
    test(){
        console.log(this.userId);
    }
}

const Naimur = new studentAccount(132323 , 'halum' , 30900)
Naimur.test()

const bidhan = new studentAccount(1001 , 'bidhan' , 3400)

console.log(bidhan.userName)

const Badol = new studentAccount(12232 , 'Badu' , 299)

console.log(Badol.userId)