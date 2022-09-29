"use strict";
//acces modifier
// public , private , protected , readonly
class studentUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`Name : ${this.name} & Age : ${this.age}`);
    }
    ;
}
// Inharitence Class
class studentNew extends studentUser {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`Name : ${this.name} & Age : ${this.age} & Student ID : ${this.studentId}`);
    }
}
let student01 = new student("John", 30, 123);
student001.display();
