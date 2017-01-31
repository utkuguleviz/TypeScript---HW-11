//Exercise 4
class person{
    private static _firstName: string = "";

    static get firstName() {
        return this._firstName;
    }

    static set firstName(value:string){
        this._firstName = value.toUpperCase();
    }
}

person.firstName = "Asaad";
console.log(person.firstName);