import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";

export class FormatedDataTable extends ViewComponent {

	isPublic = true;
	template = `
	
		<style>
			ol {
				display: table;
				width: 90%;
				border: 1px solid black;
			}
			li, ol::before { display: table-row }

			ol::before { content: "" }

			li span {
				display: table-cell;
				border: 1px solid black;
				padding: 8px;
			}
			
			li:nth-child(odd) { background: lightgrey; }

			li:first-child {
				font-weight: bold;
				background-color: grey;
			}
			
		</style>
    	<h2>Ordered List Styled as a Table</h2>

		<ol>
			<li>
				<span>#</span>
				<span>Item</span>
			</li>
			<li>
				<span>1</span>
				<span>Apple</span>
			</li>
			<li>
				<span>2</span>
				<span>Banana</span>
			</li>
			<li>
				<span>3</span>
				<span>Grapes</span>
			</li>
			<li>
				<span>4</span>
				<span>Orange</span>
			</li>
			<li>
				<span>5</span>
				<span>Mango</span>
			</li>
		</ol>
	`;

	constructor() {
		super();
	}


}