import { BidOffersComponent } from "./BidOffersComponent.js";

export class BiddersList extends ViewComponent {

	isPublic = true;

	/** @Prop @type { BidOffersComponent } */
	bidOfferInstance;

	template = `
		Here goes the list of bidders.
		<button (click)="addBidder()">Admit new Bidder</button>
	`;

	constructor() {
		super(); //Supper is needed to be called according to JavaScript standards

		/** stWhenReady() Hook detects when the sibling component is available */
		this.stWhenReady(() => {
			/** Assigning the sibling instance to the property */
			this.bidOfferInstance = Components.getFromRef('BidOffersDisplayRef');
		});

	}

	addBidder() {
		/** Call sibling component method  */
		this.bidOfferInstance.onNewBiderEntering();

		/** Updating the sibling component State through the reference */
		const prevTotalBidders = this.bidOfferInstance.totalBidders.value;
		this.bidOfferInstance.totalBidders = prevTotalBidders + 1;
	}

}