"use strict";
let myName = 'Cún';
let logInfo;
logInfo = (person) => {
    console.log(person.name, person.age);
};
logInfo({ name: 'Brian', age: 27 });
