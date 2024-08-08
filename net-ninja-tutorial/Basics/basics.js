// const myName = 'Brian';
// console.log(myName + " Nguyen");
// -- type basics
// let champ = 'Zed';
// champ = 1;
// champ = 'Ahri';
// const hi = (name: string) => {
//     console.log(`Hi ${name}`);
// };
// hi(1); // error
// hi('Cún');
// -- arrays
// const nums = [1, 2, 3];
// // nums.push('hi');
// const mixed = [1, 'hi'];
// mixed.push('hello');
// mixed.push(2);
// -- objects
// const me = {
//     name: 'Cún',
//     age: 27
// };
// console.log(me.name);
// -- explicit types
// let champ: string;
// let age: number;
// let isCool: true;
// array
// let nums: number[] = []; // should be init with an empty array to use push later
// union types
// const mixed: (number | string)[] = [];
// mixed.push(1);
// mixed.push('hi');
// let me: string|number = 1;
// me = 'me';
// objects
// const champ: object;
// champ = { name: "Zed", assassin: true };
// const champ: {
//     name: string,
//     age: number
// };
// champ = {
//     name: 'zed',
//     age: 25
// }
// any
// const mixed: any[] = [];
