//acces modifier
// public , private , protected , readonly
class studentUser {
    protected name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
   display(): void {
         console.log(`Name : ${this.name} & Age : ${this.age}`);
   };
}


// Inharitence Class
class studentNew extends studentUser { 
    studentId: number;
    constructor(name: string, age: number, studentId: number) {
        super(name, age);
        this.studentId = studentId;
    }
    display(): void {
        console.log(`Name : ${this.name} & Age : ${this.age} & Student ID : ${this.studentId}`);
    }
}

let student01 = new student("John", 30 , 123);
student001.display();