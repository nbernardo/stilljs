import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";
import { BiddingService } from "../../service/BiddingService.js";
import { CustomersService } from "../../service/api/CustomersService.js";
export class BiddingDisplay extends ViewComponent {

    isPublic = true;

    /** @Proxy @type { BidOffersComponent } */
    bidOfferProxy; //This is assignet in the proxy prop of the <st-element> line 14

    /** 
     * @Inject
     * @ServicePath service/
     * @type { BiddingService } */
    biddingService;

    /** 
     * @Inject
     * @ServicePath service/api/
     * @type { CustomersService } */
    customerService;

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

    stAfterInit() {

        /* this.bidOfferProxy.on('load', () => {
            console.log(`Proxy ready call: `, this.bidOfferProxy);
        }); */

        this.biddingService.on('load', () => {

            console.log(`After load is in display: `, this.biddingService);

            this.biddingService.countryStore.onChange(newValue => {
                console.log(`New value on myProp for BiddingDisplay: `, newValue);
            });

        });

        this.customerService.on('load', () => {
            this.customerService.totalCustomers.onChange(newValue => {
                console.log(`There is a new value for total: `, newValue);
            });
        });
    }

}