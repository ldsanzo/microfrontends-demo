import { Component } from '@angular/core';

@Component({
	selector: 'aggregator',
	template: `
		<div class="header">
			<h1>Microfrontends Shop</h1>
		</div>

		<router-outlet></router-outlet>`
})
export class AppComponent {
}


