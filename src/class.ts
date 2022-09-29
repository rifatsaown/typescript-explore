class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    display(): void {
        console.log(this.name + " & " + this.age);
    }
}

let user001 = new User("John", 30);
user001.display();
let user002 = new User("Mary", 20);
user002.display();