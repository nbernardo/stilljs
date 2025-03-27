import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";
import { UserGrid } from "./UserGrid.js";

export class UserForm extends ViewComponent {

	isPublic = true;

	/** @Prop */
	childTitleState = 'Child Title from Parent';
	changeCounter = 0;

	/** @Proxy @type { UserGrid } */
	myRefToGrid;

	template = `
		<button (click)="updateChildTitle()">Change child title</button>
		<br/>
		<br/>
		<st-element 
			component="UserGrid"
			ref="insideFormGridReference"
			proxy="myRefToGrid"
			tableTitle="self.childTitleState"
			titleMergeSize="5"
			>
		</st-element>
	`;

	updateChildTitle() {

		this.changeCounter = this.changeCounter.value + 1;

		/** @type { UserGrid } */
		const userGridObj = Components.getFromRef('insideFormGridReference');
		this.myRefToGrid.tableTitle = 'Title altered ' + this.changeCounter.value + 'x';
	}

	constructor() {
		super();
	}


}