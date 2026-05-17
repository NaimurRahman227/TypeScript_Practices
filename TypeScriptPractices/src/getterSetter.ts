// Getter And Setter Method

class openAccount {
    userId : number;
    userName: string;
    private userBalance : number;
    private  pass: number;

    constructor(userId : number , userName : string , userbalance: number , pass : number){
        this.userBalance = userbalance;
        this.userId = userId;
        this.userName = userName;
        
        this.pass = pass;

    }
    getBalance(pass: number , name : string){
        if(pass === this.pass && name === this.userName){
            return this.userBalance;
        } else {
            console.log('Credentials Does not match')
        }        
    }

}

const harun = new openAccount(1001 , 'akkku' , 1200 , 123455)
console.log(harun.getBalance(123455 , 'akkku'))