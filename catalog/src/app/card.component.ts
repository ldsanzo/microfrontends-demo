import { Component, Input } from "@angular/core";

@Component({
    selector: 'card',
    template: `
        <div class="card" style="width: 18rem; margin-top: 10px;">
            <img src="{{img}}" class="card-img-top" alt="{{title}}">
            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <p class="card-text">{{body}}</p>
                <a href="/product?id={{id}}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`
})
export class CardComponent {

    @Input() id: string = '';
    @Input() title: string = '';
    @Input() body: string = '';
    @Input() img: string = '';
}