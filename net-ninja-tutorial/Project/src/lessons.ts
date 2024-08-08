let myName: string = 'Cún';

// console.log('hi ' + myName);


// -- functions 
// let hi: Function;
// let greet: () => void; // signature
// let hello: (name: string) => string; // == let hello: Function 

// hi = () => {
//     console.log('hi');
// }

// greet = (): void => {
//     console.log('hellu');
// }

// hello = (name: string): string => {
//     let val = 'hello ' + name;
//     return val;
// }

// console.log(hello('Cún'));

// type aliases
// type StringOrNum = string | number;
// // type num = number;

// // let numb: num = 1;
// // let sth: StringOrNum = '1';

// type StudentObjType = {
//     name: string,
//     id: StringOrNum,
//     age: number
// };

// let student: StudentObjType;
// student = {
//     name: 'Brian',
//     id: 1,
//     age: 20
// }


// function signatures

// let logInfo: (obj: { name: string, age: number }) => void;

// logInfo = (person: { name: string, age: number }) => {

// }

type PersonType = {
    name: string,
    age: number
}

let logInfo: (obj: PersonType) => void;

logInfo = (person: PersonType) => {
    console.log(person.name, person.age);
};

logInfo({ name: 'Brian', age: 27});