"use strict";
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
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
const zed = {
    id: 1,
    name: 'Zed',
    role: ['mid', 'jungle']
};
console.log(zed);
const ahri = {
    id: 2,
    name: 'Ahri',
    role: {
        primary: 'mid',
        secondary: 'support'
    }
};
console.log(ahri);
// numeric enums
// enum Roles { TOP, JUNGLE, MID, ADC, SUPPORT };
// Roles.MID; // 2 
//string enums
var Roles;
(function (Roles) {
    Roles["TOP"] = "TOP";
    Roles["JUNGLE"] = "JUNGLE";
    Roles["MID"] = "MID";
    Roles["ADC"] = "ADC";
    Roles["SUPPORT"] = "SUPPORT";
})(Roles || (Roles = {}));
const doroke = Roles.MID;
const netto = Roles.ADC;
console.log(doroke, netto);
// Roles.MID; // "MID"
