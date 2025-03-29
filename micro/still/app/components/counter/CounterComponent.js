export class CounterComponent extends ViewComponent {

	isPublic = true;
	count = 0;

	template = `
	<div>
		<p>
		My counter state is @count
		</p>
		<button (click)="increment()">Increment (@count)</button>
		<button (click)="decrement()">Decrement (@count)</button>
	</div>
	`;

	increment() {
		this.count = this.count.value + 1;
	}

	decrement() {
		this.count = this.count.value - 1;
	}

	constructor() {
		super();
	}


}