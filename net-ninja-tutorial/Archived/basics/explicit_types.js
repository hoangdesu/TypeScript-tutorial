"use strict";
// basic types:
var firstName;
var age;
var hasPet;
firstName = 'Brian';
age = 26;
hasPet = true;
console.log(firstName, age, hasPet);
// arrays:
var numbers = [];
var names = [];
numbers.push(1995);
names.push('Hoang');
console.log(numbers, names);
// objects:
var game1;
game1 = { name: 'League of Legends', rating: 3.5 };
// defining an object with known attributes in advance
var game2;
game2 = {
    name: 'Overwatch',
    rating: 3
};
console.log(game1, game2);
// union types:
var userID;
var mixed = [];
userID = 3697305;
userID = 's3697305';
mixed.push('hi', 7, true);
console.log(userID, mixed);
