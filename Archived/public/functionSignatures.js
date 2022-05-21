"use strict";
// let greet: Function;
// example 1
// signature
let greetName;
// definition 
greetName = (aName) => {
    console.log(`Hi ${aName}`);
};
greetName('Cúnnnn');
// example 2
let introduce1;
introduce1 = (name, age, hobby) => {
    return `Hi my name is ${name}, I am ${age} years old and I like ${hobby}`;
};
console.log(introduce1('Hoang', 26, 'playing games'));
let logMovie;
logMovie = (movie) => {
    console.log(`${movie.name} (${movie.year}) is rated ${movie.rating}/10 on IMDB.`);
};
logMovie({ name: 'Arcane', year: 2021, rating: 9.3 });
logMovie({ name: 'Lupin', year: 2020, rating: 8.4 });
