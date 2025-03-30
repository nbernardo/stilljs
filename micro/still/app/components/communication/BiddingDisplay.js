export class BiddingDisplay extends ViewComponent {

	isPublic = true;

	template = `
        <st-element 
            component="BidOffersComponent"
            ref="BidOffersDisplayRef"
        >
        </st-element>
		<br>
		<br>
        <st-element component="BiddersList"></st-element>
    `;

}