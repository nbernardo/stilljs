export class BidOffersComponent extends ViewComponent {

	isPublic = true;
	totalBidders = 0;

	template = `
        Total bidders now is @totalBidders.
    `;

	/* Child component updates itself, but parent and sibling classe can 
	 * also call this method thereby beng able to update the child value 
	 * */
	onNewBiderEntering() {
		console.log(`New bidder enter to the list and his bid is 0 for now`);
	}

}