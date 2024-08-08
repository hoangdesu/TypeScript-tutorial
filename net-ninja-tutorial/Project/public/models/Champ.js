export class Champ {
    constructor(name, role) {
        this.isStrong = true;
        this.name = name,
            this.role = role;
    }
    fight() {
        console.log(this.name, 'pew pew');
    }
}
