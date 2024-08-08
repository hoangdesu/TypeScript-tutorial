// let greet: Function;


// example 1
// signature
let greetName: (a: string) => void;

// definition 
greetName = (aName: string) => {
    console.log(`Hi ${aName}`);
}

greetName('Cúnnnn');

// example 2
let introduce1: (n: string, a: number, h: string) => string;
introduce1 = (name: string, age: number, hobby: string) => {
    return `Hi my name is ${name}, I am ${age} years old and I like ${hobby}`;
};

console.log(introduce1('Hoang', 26, 'playing games'));

// example 3
type movieObj = { name: string, year: number, rating: string|number }

let logMovie: (obj: movieObj) => void;
logMovie = (movie: movieObj) => {
    console.log(`${movie.name} (${movie.year}) is rated ${movie.rating}/10 on IMDB.`);
};

logMovie({ name: 'Arcane', year: 2021, rating: 9.3 });
logMovie({ name: 'Lupin', year: 2020, rating: 8.4 })
