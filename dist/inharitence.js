"use strict";
//Main Class
class userStudent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(this.name + " & " + this.age);
    }
}
let rifatsaown = new userStudent("Rifat", 30);
rifatsaown.display();
// Inharitence Class
class student extends userStudent {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`Name : ${this.name} & Age : ${this.age} & Student ID : ${this.studentId}`);
    }
}
let student001 = new student("John", 30, 123);
student001.display();
