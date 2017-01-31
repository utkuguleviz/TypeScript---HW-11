//Exercise 2

class Car{
    name : string;
    acceleration: number;
    
    constructor(name:string){
        this.name = name;
        this.acceleration = 0;
    }
    
    honk():void {
        console.log(` ${this.name} is saying: Tooooot! `);
    }
    accelerate(speed: number): void{
        this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);