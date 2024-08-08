import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
    constructor(private container: HTMLUListElement) {};

    render(heading: string, item: HasFormatter, position: 'start' | 'end') {
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        const li = document.createElement('li');
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if (position === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}