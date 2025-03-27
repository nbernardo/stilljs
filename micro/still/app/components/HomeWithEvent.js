import { ViewComponent } from "../../@still/component/super/ViewComponent.js";
export class HomeWithEvent extends ViewComponent {

    //isPublic = true;
    template = `
        <div>
            <h2>Hello world from HomeWithEvent!</h2>
            <p>
            I'm an easy component with a button
            </p>
            <button (click)="callMe()">I'm a button</button>
        </div>
    `;

    callMe() {
        alert(`Hi, you clicked me, I'm a button`);
    }

    constructor() {
        super();
    }

}