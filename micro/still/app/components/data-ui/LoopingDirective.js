import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";

export class LoopingDirective extends ViewComponent {

	isPublic = true;

	/** This is the list of products ( data source ) */
	productList = [
		{ name: 'Orange', sold: 3, stockAvail: 7, price: '0.75$' },
		{ name: 'Apple', sold: 1, stockAvail: 5, price: '0.88$' },
		{ name: 'Banana', sold: 10, stockAvail: 50, price: '1.03$' },
	]

	template = `
		<div>
			<h5>Looping with HTML child</h5>
			<br>
			<span (forEach)="productList">
				Stock Availability
				<div each="item">
					<b>Name:</b> {item.name} - <b>Sock:</b> {item.stockAvail} - <b>Price:</b> {item.price}
				</div>
			<span>
		</div>
		
		<br><hr><br/>

		<div>
			<h5>Looping with child Component</h5>
			<br>
			<span (forEach)="productList">
				Shipping Cart Checkout
				<!-- Fields are mapped one to one from data 
					source (productList) to the child component state -->
				<st-element component="ShoppingItem" each="item"></st-element>
			<span>
		</div>
	`;
}