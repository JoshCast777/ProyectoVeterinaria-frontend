import { Component, Input } from "@angular/core";
import { DataCards } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-product-content",
	template: `
		<div class="container">
			<app-grid-card [data_cards]="data_cards"></app-grid-card>
		</div>
	`,
	styles: [
		`
			app-grid-card {
				display: block;
				margin-top: 1.6rem;
			}
		`
	]
})
export class ProductContentComponent {
	@Input() data_cards: DataCards[] = [];
}
