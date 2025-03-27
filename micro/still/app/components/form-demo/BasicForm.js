import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";

export class BasicForm extends ViewComponent {

	//isPublic = true;
	firstName = '';
	dateOfBirth;

	template = `
	<div>
		<form>
			<div class="form-group">
				<label>First Name</label>
				<input (value)="firstName" type="text"  placeholder="Enter first name">
			</div>
			<br/>
			<div class="form-group">
				<label>Shoe Size</label>
				<input 
					(value)="dateOfBirth" 
					(validator)="number" 
					(validator-warn)="Invalid shoe size, number is required"
					placeholder="Enter valid shoe size"
				>
			</div>
		</form>
		<br/>
		<p>Welcome <b>@firstName</b></p>
		<br/>
		<button (click)="setFirstName('Michael')">Set Michael</button>
		<button (click)="setFirstName('Dario')">Set Dario</button>
	</div>
	`;

	/** Single line method using arrow function */
	setFirstName = (val) => this.firstName = val;

	constructor() {
		super();
	}

}