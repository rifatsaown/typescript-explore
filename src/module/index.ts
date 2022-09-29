import {studentName} from './StudentName';
import {studentAge as age} from './StudentAge';
import * as students from './StudentId';

const displayStudentInfo = () => {
    console.log(`
    Student 1st Name: ${studentName}
    Student Last Name: ${students.studentLastName}
    Student Age: ${age}
    Student Id: ${students.studentId}`);
}

displayStudentInfo();