import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";
import { BiddingService } from '../../service/BiddingService.js';
import { CustomersService } from '../../service/api/CustomersService.js';
export class BiddersList extends ViewComponent {

	isPublic = true;

	/** 
	 *  @Inject
	 *
	 *  @type { BiddingService }
	 * */
	biddingService;

	/**
	 * @Inject
	 * @ServicePath service/api/
	 * @type { CustomersService }
	 */
	customerService;

	template = `
		<p>Here goes the list of bidders.</p>
		<button (click)="updateTotalCustomer()">Up customers</button>
	`;

	stAfterInit() {

		this.biddingService.on('load', () => {
			console.log(`After load is: `, this.biddingService);
		});

		this.biddingService.countryStore.onChange(newValue => {
			console.log(`New value for myProp for BiddersList: `, newValue);
		});

	}

	updateTotalCustomer() {
		this.customerService.totalCustomers = 10;
	}
}