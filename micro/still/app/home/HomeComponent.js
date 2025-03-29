//import { ViewComponent } from "../../@still/component/super/ViewComponent.js";
import { ViewComponent } from "https://cdn.jsdelivr.net/gh/nbernardo/stilljs@doc-website1.3/@still/component/super/ViewComponent.js";

export class HomeComponent extends ViewComponent {

    isPublic = true;
    template = `
        <div>
            <h2>Hello world!</h2>
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