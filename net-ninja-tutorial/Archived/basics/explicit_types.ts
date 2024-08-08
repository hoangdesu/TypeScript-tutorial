// basic types:
let firstName: string;
let age: number;
let hasPet: boolean;

firstName = 'Brian';
age = 26;
hasPet = true;

console.log(firstName, age, hasPet);


// arrays:
let numbers: number[] = [];
let names: string[] = [];

numbers.push(1995);
names.push('Hoang')

console.log(numbers, names);

// objects:
let game1: object;
game1 = { name: 'League of Legends', rating: 3.5 }

// defining an object with known attributes in advance
let game2: {
    name: string,
    rating: number
}

game2 = {
    name: 'Overwatch',
    rating: 3
}

console.log(game1, game2);

// union types:
let userID: (string|number);
let mixed: (string|number|boolean)[] = [];

userID = 3697305;
userID = 's3697305';
mixed.push('hi', 7, true)

console.log(userID, mixed);

