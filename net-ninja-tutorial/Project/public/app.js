// method 1
// const anchor = document.querySelector('a');
// if (anchor) {
//     console.log(anchor.href);
// }
// method 2
// const anchor = document.querySelector('a')!; // type: HTMLAnchorElement
// console.log(anchor.href);
// type casting
// const form = document.querySelector('form'); // type is known
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
import { ListTemplate } from './models/ListTemplate.js';
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const newList = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
    const params = [toFrom.value, details.value, amount.valueAsNumber]; // tuple
    const invoice = new Invoice(...params);
    newList.render(type.value, invoice, 'end');
    console.log(invoice);
});
// // -- CLASSES
// class Invoice {
//     client: string;
//     details: string;
//     amount: number;
//     constructor(client: string, details: string, amount: number) {
//         this.client = client;
//         this.details = details;
//         this.amount = amount;
//     }
//     // short hand constructor, only works with access modifiers
//     // constructor(
//     //     public client: string,
//     //     private details: string,
//     //     readonly amount: number
//     // ){}
//     format() {
//         return `${this.client} owes $${this.amount} for ${details}`;
//     }
// }
// changed to modules
import { Invoice } from './models/Invoice.js';
const invoice1 = new Invoice('zed', 'mid', 69);
const invoice2 = new Invoice('lee sin', 'jg', 690);
invoice2.client = 'zoe';
invoice2.details = 'top';
invoice2.amount = 123;
console.log(invoice1, invoice2);
const invoices = []; // only objects of this class can be added to this array
invoices.push(invoice1, invoice2);
console.log('Invoices:', invoices);
const zed = {
    name: 'Zed',
    isMeta: true,
    describe(text) {
        console.log(text);
    },
    speak(sentence) {
        return sentence;
    }
};
console.log('ZED:', zed);
import { Champ } from './models/Champ.js';
const zoe = new Champ('Zoe', 'mid');
console.log(zoe.name);
zoe.fight();
let ahri;
ahri = new Champ('Ahri', 'mid');
ahri.fight();
const champions = [];
champions.push(zoe, ahri);
