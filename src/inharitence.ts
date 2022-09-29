//Main Class
class userStudent {
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
let rifatsaown = new userStudent("Rifat", 30);
rifatsaown.display();

// Inharitence Class
class student extends userStudent { 
    studentId: number;
    constructor(name: string, age: number, studentId: number) {
        super(name, age);
        this.studentId = studentId;
    }
    display(): void {
        console.log(`Name : ${this.name} & Age : ${this.age} & Student ID : ${this.studentId}`);
    }
}

let student001 = new student("John", 30 , 123);
student001.display();