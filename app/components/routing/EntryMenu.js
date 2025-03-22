import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";

export class EntryMenu extends ViewComponent {

	isPublic = true;
	template = `
		<div>
			This is Entry menu component, press the bellow 
			<br/>button or in the link to navigate to User
			<br/>
			<br/>
			<button (click)="goto('UserRegistration')">Register user</button>
		</div>
	`;

	constructor() {
		super();
	}


}