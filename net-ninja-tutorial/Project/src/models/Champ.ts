import { ChampInterface } from "../interfaces/ChampInterface";

export class Champ implements ChampInterface {
    name: string;
    role: string;
    isStrong: boolean = true;

    constructor(name: string, role: string) {
        this.name = name,
        this.role = role
    }

    fight() {
        console.log(this.name, 'pew pew');
    }
}