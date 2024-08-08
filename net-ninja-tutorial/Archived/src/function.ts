let greet = () => {
    console.log('Hi!');
}
// greet = 'hi'; // error

let sayHi: Function;
sayHi = (aName: string) => {
    console.log(`Heyyy ${aName}!`);
};

sayHi('Cún');

const add = (a: number, b: number, c?: number, d: number = 10) => {
    if (c) console.log(a + b + c)
    else console.log(a + b);
}

add(2, 7);
add(1, 2, 3);
add(1,2,3,4);

// explicit return type
const square = (num: number): number => {
    return num * num;
}

console.log(square(8));