import { Injector, NgModule, ApplicationRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './card.component';


@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		CardComponent
	],
	imports: [BrowserModule],
	providers: [
	],
})
export class AppModule {
	constructor(private injector: Injector) {}

	ngDoBootstrap(appRef: ApplicationRef) {
		const AppComponentElement = createCustomElement(AppComponent, {
			injector: this.injector,
		});

		customElements.define(
			'catalog',
			AppComponentElement
		);
		appRef.bootstrap(AppComponent);
	}
}
