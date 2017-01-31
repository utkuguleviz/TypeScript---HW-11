//Exercise 3
class BaseObject{
    width: number;
    height: number;

    constructor(){
        this.width = 0;
        this.height = 0;
    }
}


class Rectangle extends BaseObject {
    
    constructor(){
        super();
        this.width = 5;
        this.height = 2;
    }
    
    calcSize(): number {
        return this.width * this.height;
    }
} 

console.log((new Rectangle()).calcSize());