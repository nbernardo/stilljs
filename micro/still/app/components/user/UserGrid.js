export class UserGrid extends ViewComponent {

	isPublic = true;

	tableTitle = "Users List Not changed";
	/** @Prop */
	titleMergeSize;

	template = `
		<table border="1">
			<thead>
				<tr><th colspan="@titleMergeSize">@tableTitle</td></tr>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
					<th>Age</th>
					<th>Country</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>John Doe</td>
					<td>john@example.com</td>
					<td>28</td>
					<td>USA</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Jane Smith</td>
					<td>jane@example.com</td>
					<td>32</td>
					<td>UK</td>
				</tr>
			</tbody>
		</table>

	`;

	constructor() {
		super();
	}


}