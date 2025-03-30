import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";

export class CDNCounterComponentExample extends ViewComponent {

	isPublic = true;
	count = 0;

	template = `
    <div>
        <p>My counter state is @count</p>
        <button (click)="increment()">Increment (@count)</button>
    </div>
    `;

	increment() {
		this.count = this.count.value + 1;
	}

}