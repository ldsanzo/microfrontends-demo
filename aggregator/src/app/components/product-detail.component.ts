import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	template: `
		<a href="/catalog">Back to catalog</a>

		<div class="container">
			<div class="row">
				<div class="col-sm-8">
					<microfrontend 
						[id]="'product'"
						[additionalData]="productAdditionalData"
					/>
				</div>
				<div class="col-sm-4">
					<microfrontend
						[id]="'purchase'"
						[additionalData]="purchaseAdditionalData"
					/>
				</div>
			</div>
		</div>
		`
})
export class ProductDetail {

	productAdditionalData: any = {};
	purchaseAdditionalData: any = {};

	constructor(private route: ActivatedRoute) {
	}

	ngOnInit() {
		let id = this.route.snapshot.queryParamMap.get('id');
		this.productAdditionalData = { "data-product-id": id };
		this.purchaseAdditionalData = { "data-product-id": id };
	}
}