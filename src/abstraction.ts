//Main Class
abstract class userStudents {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
   abstract display(): void ;
}


// Inharitence Class
class students extends userStudents { 
    studentId: number;
    constructor(name: string, age: number, studentId: number) {
        super(name, age);
        this.studentId = studentId;
    }
    display(): void {
        console.log(`Name : ${this.name} & Age : ${this.age} & Student ID : ${this.studentId}`);
    }
}

let students1 = new student("John", 30 , 123);
student001.display();