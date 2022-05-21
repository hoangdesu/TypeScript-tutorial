const addID = <T extends object>(obj: T) => {
    let id = Math.floor(Math.random() * 100);  
    return {
        ...obj,
        id
    };
}

const p1 = {
    name: 'brian',
    age: 27
};

const p1ID = addID(p1);

console.log(p1);
console.log(p1.name);
console.log(p1ID);
console.log(p1ID.name);
console.log(p1ID.id);

// extending a specific property
// <T extends {name: string}>

// with interfaces
interface Champion<T> {
    id: number,
    name: string,
    role: T
}

const zed: Champion<string[]> = {
    id: 1,
    name: 'Zed',
    role: ['mid', 'jungle']
}

console.log(zed);


const ahri: Champion<object> = {
    id: 2,
    name: 'Ahri',
    role: {
        primary: 'mid',
        secondary: 'support'
    }
}

console.log(ahri);

// numeric enums
// enum Roles { TOP, JUNGLE, MID, ADC, SUPPORT };

// Roles.MID; // 2 

//string enums
enum Roles {
    TOP = "TOP",
    JUNGLE = "JUNGLE",
    MID = "MID",
    ADC = "ADC",
    SUPPORT = "SUPPORT"
}

const doroke = Roles.MID;
const netto = Roles.ADC;

console.log(doroke, netto);

// Roles.MID; // "MID"


const brian: [string, number, boolean] = ['Brian', 27, true];
// brian[0] = 2; // not allowed, need string
brian[0] = 'Cún';

console.log(brian);
