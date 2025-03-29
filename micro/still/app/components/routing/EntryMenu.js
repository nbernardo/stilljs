export class EntryMenu extends ViewComponent {

	isPublic = true;

	myVar1 = '';
	personList = [
		{ name: 'Naka', skill: 'Math' },
		{ name: 'Maria', skill: 'Dev' },
	]

	anotehrProp = null;

	template = `
		<div>
			This is Entry menu component, press the bellow 
			<br/>button or in the link to navigate to User
			<br/>
			My Prop value @anotehrProp
			<br/>
			<button (click)="goto('UserRegistration')">Register user</button>
			<button (click)="outroEvt($event)">Test with event</button>

			<br>
			<br>
			<div>On top val: @myVar1</div>
			<form>
				<input (value)="myVar1">
			</form>

			<div>My State variable is: @myVar1</div>

			
		</div>
	`;

	constructor() {
		super();
	}

	outroEvt(e) {
		console.log(`CLICK HERE and EVENT IS: `, e);
		Router.goto('LoopingDirective', { evt: { containerId: Router.serviceId } });
	}

}