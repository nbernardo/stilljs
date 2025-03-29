export class BasicConditionalView extends ViewComponent {

	isPublic = true;

	/** @Prop */
	isAdminPermisison = false;

	/** @Prop */
	shouldShowContent = true;

	addLabel = 'Hide';
	adminLabel = 'Unable';

	textContent = `
		If you click the button bellow this content will be hidden
		<br>in case flag is true, and hide if false
	`

	template = `
        <div>
            <div (renderIf)="self.isAdminPermisison">
				Hello, this part of the content wond be rendere since
				<br/>the flag on (renderIf) is false, even if you click
				<br/>in the Render button which turns flag to true
			</div>

            <p (showIf)="self.shouldShowContent">
            @textContent
            </p>
            <button (click)="hideOrUnhide()">@addLabel content</button>
            <button (click)="renderContent()">@adminLabel Admin</button>
            <button (click)="goto('EntryMenu')">@adminLabel for Menu</button>
        </div>
    `;

	hideOrUnhide() {
		this.addLabel = 'Hide';
		this.shouldShowContent = !this.shouldShowContent;
		if (!this.shouldShowContent) this.addLabel = 'Unhide';
	}

	renderContent() {
		this.adminLabel = 'Unable';
		this.isAdminPermisison = !this.isAdminPermisison;
		if (this.isAdminPermisison) this.adminLabel = 'Able';
	}

	constructor() {
		super();
	}

}