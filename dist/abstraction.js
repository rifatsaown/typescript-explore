"use strict";
//Main Class
class userStudents {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// Inharitence Class
class students extends userStudents {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`Name : ${this.name} & Age : ${this.age} & Student ID : ${this.studentId}`);
    }
}
let students1 = new student("John", 30, 123);
student001.display();
