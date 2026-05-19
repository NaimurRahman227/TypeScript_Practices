class person {
    name : string;
    skin : string;
    gender : string ;
    height : number;
    age : number;

    constructor(name: string , skin : string, gender: string, height : number, age : number){
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.skin = skin;
        this.name = name;
    }
}

const kaluPerson = new person('hedu' , 'kalo' , 'modsa' , 5.6 , 23)

interface MediaPlayer {
    play() : void;
    pause() : void;
    stop(): void;
}

class MusicPlayer implements MediaPlayer{
    play(){
        console.log('Playing music...')
    }
    pause(): void {
        console.log('Music Paused...')
    }
    stop(): void {
        console.log('Music stopped...')
    }
}

const NaimurPlays = new MusicPlayer();
NaimurPlays.play();

abstract class VideoPlayer{
    abstract playy() : void;
    abstract pausee() : void;
    abstract stopped() : void;
}

class PotPlayer extends VideoPlayer {
    playy(): void {
        console.log(`Dnace is running,,,,`)
    }
    pausee(): void {
        console.log('Pause the dance video.....')
    }
    stopped(): void {
        console.log('Stop the dance video immidiately...')
    }
}

const VLCPlayer = new PotPlayer();

VLCPlayer.pausee();