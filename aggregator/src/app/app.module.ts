import { Injector, NgModule, ApplicationRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { RouterModule, Routes } from '@angular/router';
import { Catalog } from './components/catalog.component';
import { ProductDetail } from './components/product-detail.component';
import { Microfrontend } from './components/microfrontend.component';
import { SafePipe } from '@pipes/safePipe';


const appRoutes: Routes = [
	{ path: 'catalog', component: Catalog },
	{
		path: 'product', component: ProductDetail, children: [
			{ path: ':id', component: ProductDetail },
		]
	},
	{ path: '', redirectTo: 'catalog', pathMatch: 'full' }
];

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		Catalog,
		ProductDetail,
		Microfrontend,
		SafePipe
	],
	imports: [BrowserModule,
		RouterModule.forRoot(appRoutes)],
	providers: [
	],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
	constructor(private injector: Injector) { }

	ngDoBootstrap(appRef: ApplicationRef) {
		const AppComponentElement = createCustomElement(AppComponent, {
			injector: this.injector,
		});

		customElements.define(
			'aggregator',
			AppComponentElement
		);
		appRef.bootstrap(AppComponent);
	}
}
