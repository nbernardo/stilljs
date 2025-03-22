import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";

export class UserRegistration extends ViewComponent {

	isPublic = true;
	template = `
		<div class="user-reg-container">
			<span class="smile-icone">&#9787;</span> 
			<br/>
			This is the user registration component
			<br/>
			<button (click)="goto('EntryMenu')">Go to Menu</button>
		</div>

		<style>
			.user-reg-container { text-align: center; }
			.smile-icone { 
				color: orange;
				font-size: 60px;
			}
		</style>
	`;

	constructor() {
		super();
	}


}