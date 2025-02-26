import { Component } from "@angular/core";

@Component({
	selector: 'catalog-page',
	template: `
		 <microfrontend [id]="'catalog'" />
	`
	/*

	<catalog></catalog>
	<link rel="stylesheet" href="http://localhost:8081/styles.css">
	<script src="http://localhost:8081/polyfills.js"></script>
	<script src="http://localhost:8081/main.js"></script>

	*/
})
export class Catalog {
}