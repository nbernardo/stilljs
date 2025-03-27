import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";

export class LoginComponent extends ViewComponent {

	isPublic = true;

	userName;
	password;

	template = `
		<form onsubmit="return false;">
			<h4>Type the same for both user and password for <br>success login, something else for invalid</h4>
			
			Username: <input type="text" (value)="userName">
			<br><br>
			Password: <input type="password" (value)="password"><br>

			<span id="loginStatus"></span><br>

			<button (click)="processLogin()">Login</button>
		</form>
	`;

	processLogin() {

		const user = this.userName.value;
		const password = this.password.value;
		const messageContainer = document.getElementById('loginStatus');

		if (user !== password || user == '' || password == '') {
			/** Assignin new content via DOM manipulation */
			messageContainer.innerHTML = 'Invalid user or password';
			/** CSS updating through DOM */
			messageContainer.style = 'color: red; background-color: #ab1f1f38;';
			/** Changing inputs border via DOM manipulation */
			document.querySelector('input[type=text]').style = 'border: 1px solid red';
			document.querySelector('input[type=password]').style = 'border: 1px solid red';

		} else {
			/** Assignin new content via DOM manipulation */
			messageContainer.innerHTML = 'User login success! &#9787;';
			/** CSS updating through DOM */
			messageContainer.style = 'color: green; background-color: none;';
			/** Changing inputs border via DOM manipulation */
			document.querySelector('input[type=text]').style = 'border: 1px solid green';
			document.querySelector('input[type=password]').style = 'border: 1px solid green';
		}
	}

	constructor() {
		super();
	}


}