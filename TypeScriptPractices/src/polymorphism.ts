class Person {
    getSleep(){
        console.log('I sleep for eight hours')
    }
}

class Student extends Person {
    getSleep(){
        console.log('I am a student , I sleep for 6 hours....')
    }
}

class NextLevelDeveloper extends Person {
    getSleep(): void {
        console.log('Khubi kom ghumai ami')
    }
}

const getSleepHours = (param : Person) => {
    param.getSleep();
}

const p1 = new Person();
const p2 = new Student();
const p23 = new NextLevelDeveloper();
getSleepHours(p23);

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius : number;
    constructor(radius : number){
        super()
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape{
    height : number;
    Width : number;

    constructor(height : number , Width : number){
        super()
        this.Width = Width;
        this.height = height;
    }
    getArea(): number {
        return this.height * this.Width;
    }
}

const shapeArea = (p : Shape) => {
    console.log(p.getArea());
};
const shape1 = new Shape();
const shape2 = new Circle(23);
const Shape2 = new Rectangle(22 , 45);

shapeArea(Shape2);