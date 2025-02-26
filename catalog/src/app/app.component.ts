import { Component } from "@angular/core";

@Component({
	selector: 'catalog',
	template: `
		<div class="container">
			<div class="row">
				<ng-container *ngFor="let product of products">
					<div class="col-sm">
						<card 
							[id]="product.id" 
							[title]="product.title" 
							[body]="product.body" 
							[img]="product.img">
						</card>
					</div>
				</ng-container>
			</div>
		</div>`
})
export class AppComponent {

	products : any[] = [];

	ngOnInit() {
		for (let i = 0; i < 8; i++) {
			this.products.push({
				id: i,
				title: "Product " + i,
				body: "This is the product " + i,
				img: "https://picsum.photos/200"
			});
		}
	}
}