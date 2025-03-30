import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";
export class BiddingDisplay extends ViewComponent {

    isPublic = true;

    /** @Proxy @type { BidOffersComponent } */
    bidOfferProxy; //This is assignet in the proxy prop of the <st-element> line 14

    template = `
        <st-element 
            component="BidOffersComponent"
            proxy="bidOfferProxy"
        >
        </st-element>
        <st-element component="BiddersList"></st-element>
    `;

    constructor() {
        super(); //Super is required to be called as per JavaScript standards
        // stWhenReady() Hook detects when the child component is available
        this.stWhenReady(() => {
            // This proxy represents BidOffersComponent component
            this.bidOfferProxy.offerAmmount.onChange((value) => {
                console.log(`Theres is a new offer of ${value}`);
            });
        });
    }

}