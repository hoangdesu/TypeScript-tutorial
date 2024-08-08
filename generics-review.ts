// Generics

// Problem
const addId = (person: object): object => {
    const id = Math.floor(Math.random() * 100);
    return {
        id,
        ...person,
    }
}

const person = { name: 'brian', age: 29 };

const person1WithId = addId(person);

console.log('no generics:', person1WithId.name); 
// Error: Property 'name' does not exist on type 'object'.
// TS doesn't know if field 'name' exists or not


// => Solution: can simply use this, but it will make type similar to 'any' -> errors might occur
const addId_generics = <T>(person: T) => {
    const id = Math.floor(Math.random() * 100);
    return {
        id,
        ...person,
    }
}

const p1Id_generics = addId_generics(person);
p1Id_generics.name = 'hoang';
console.log('generics:', p1Id_generics.name);


const addId_generics_extends = <T extends object>(person: T) => {
    const id = Math.floor(Math.random() * 100)
    return {
        id,
        ...person,
    }
}

const p1Id_generics_extends = addId_generics_extends(person);
console.log('generics extends:', p1Id_generics_extends.age);


