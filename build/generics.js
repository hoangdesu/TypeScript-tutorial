"use strict";
const addId = (person) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign({ id }, person);
};
const person = { name: 'brian', age: 29 };
const person1WithId = addId(person);
console.log('no generics:', person1WithId.name);
const addId_generics = (person) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign({ id }, person);
};
const p1Id_generics = addId_generics(person);
p1Id_generics.name = 'hoang';
console.log('generics:', p1Id_generics.name);
const addId_generics_extends = (person) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign({ id }, person);
};
const p1Id_generics_extends = addId_generics_extends(person);
console.log('generics extends:', p1Id_generics_extends.age);
