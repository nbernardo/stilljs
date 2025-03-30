import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";

export class BidOffersComponent extends ViewComponent {

	isPublic = true;

	offerAmmount = 0;

	template = `
		<button (click)="increase()">Increase my offer</button>
		I'm willing to offer @offerAmmount.
	`;

	/* Child component updates itself, but parent classe 
	 * can also call this method thereby beng able to update
	 * the child value 
	 * */
	increase() {
		this.offerAmmount = this.offerAmmount.value + 5;
	}

}