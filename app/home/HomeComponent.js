import { ViewComponent } from "../../@still/component/super/ViewComponent.js";

export class HomeComponent extends ViewComponent {

    isPublic = true;
    template = `
        <div>
            Hello world!
            <p>
            I'm an easy component with a button
            </p>
            <button>I'm a button</button>
        </div>
    `;

    constructor() {
        super();
    }

}