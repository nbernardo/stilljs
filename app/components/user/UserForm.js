import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";

export class UserForm extends ViewComponent {

	isPublic = true;

	/** @Prop */
	childTitleState = 'Child Title from Parent';
	changeCounter = 0;

	template = `
		<button (click)="updateChildTitle()">Change child title</button>
		<br/>
		<br/>
		<st-element 
			component="UserGrid"
			ref="insideFormGridReference"
			tableTitle="self.childTitleState"
			titleMergeSize="5"
			>
		</st-element>
	`;

	updateChildTitle() {

		this.changeCounter = this.changeCounter.value + 1;

		/** @type { UserGrid } */
		const userGridObj = Components.getFromRef('insideFormGridReference');
		userGridObj.tableTitle = 'Title altered ' + this.changeCounter.value + 'x';
	}

	constructor() {
		super();
	}


}