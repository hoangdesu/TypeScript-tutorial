type StringOrNumber = string | number;
type StudentObject = {
    name: string,
    studentID: StringOrNumber,
    gpa: number
};

let studentID: StringOrNumber;
studentID = 3697305;
studentID = 's3697350';

console.log(studentID);

const logStudent = (student: StudentObject): void => {
    console.log(`${student.name} (${student.studentID}) has ${student.gpa}/4.0 GPA.`);
}

logStudent({name: 'Hoang', studentID: 's3697305', gpa: 3.9});
