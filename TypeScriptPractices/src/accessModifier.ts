class BankAccount {
    readonly userId : number;
    public userName : string;
    private userBalance : number;

    constructor (userId : number , userName : string, userBalance : number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    addBalance(addedBalance : number) {
        this.userBalance = this.userBalance + addedBalance
    }
}

const newAccount = new BankAccount(1001 , 'Naimur Rahman' , 1200)
newAccount.addBalance(3333)
newAccount.addBalance(10000)
console.log(newAccount)
