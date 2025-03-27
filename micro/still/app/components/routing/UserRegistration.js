import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";
import { Router } from "../../../@still/routing/router.js";

export class UserRegistration extends ViewComponent {

	isPublic = true;
	template = `
		<div class="user-reg-container">
			<span class="smile-icone">&#9787;</span> 
			<br/>
			This is the user registration component
			<br/>
			<button (click)="goto('EntryMenu')">Go to Menu</button>
			<button (click)="takeMe($event)">Take me cond</button>
		</div>

		<style>
			.user-reg-container { text-align: center; }
			.smile-icone { 
				color: orange;
				font-size: 60px;
			}
		</style>
	`;

	takeMe(e) {
		Router.goto('BasicConditionalView', { evt: { containerId: Router.serviceId } });
	}

	constructor() {
		super();
	}


}