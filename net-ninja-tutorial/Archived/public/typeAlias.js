"use strict";
let studentID;
studentID = 3697305;
studentID = 's3697350';
console.log(studentID);
const logStudent = (student) => {
    console.log(`${student.name} (${student.studentID}) has ${student.gpa}/4.0 GPA.`);
};
logStudent({ name: 'Hoang', studentID: 's3697305', gpa: 3.9 });
