import { Component, Input, OnInit } from "@angular/core";
import { MicrofrontendConfig } from "../env/environment";
import { environment } from "../env/environment";

@Component({
    selector: 'microfrontend',
    template: `
       <div [innerHTML]="innerHTML | safe: 'html'"></div>
    `
})
export class Microfrontend implements OnInit {

    @Input() id: string = '';
    @Input() additionalData: any = {};
    innerHTML: string = '';
    ngOnInit(): void {
        let config: MicrofrontendConfig = environment.microfrontends[this.id as keyof typeof environment.microfrontends];
        let html = `<${config.tag} `
        for (const [key, value] of Object.entries(this.additionalData)) {
            html += `${key}="${value}" `;
          }
        html += `></${config.tag}>`;
        config.styles.forEach(style => {
            html += `<link rel="stylesheet" href="${config.host + style}">`;
        });
        this.innerHTML = html;
        config.scripts.forEach(script => {
            let myScript = document.createElement("script");
            myScript.setAttribute("src", config.host + script);
            document.body.appendChild(myScript);
        });
    }
}