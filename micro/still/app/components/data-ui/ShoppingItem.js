import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";

export class ShoppingItem extends ViewComponent {

	isPublic = true;

	/**
	 * Bellow states (name, sold, price) are being mapped directly since those
	 * names coincides with each item in the Data source in the parent component
	 */
	name;
	sold;
	price;

	template = `
		<div class="shoping-item-card">
			<span>Produce Name: @name</span>
			<span>Quantity: @sold</span>
			<span>Price: @price</span>
			<button (click)="increment()">Increment Qtd to @sold</button>
		</div>

		<style>
			.shoping-item-card{ display: flex; }

			.shoping-item-card span:first-child { width: 30%; }
			
			.shoping-item-card span:last-child { border-right: none; }

			.shoping-item-card span {
				border-right: 1px solid black;
				padding: 2px 5px; width: 18%;
				text-align: center; display: block;
			}
		</style>
	`;

	increment() {
		this.sold = this.sold.value + 1;
	}

}