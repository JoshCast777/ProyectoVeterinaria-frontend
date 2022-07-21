import { Component, Input } from "@angular/core";
import { DataCards } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-product-content",
	template: `
		<div class="container">
			<app-grid-card style="padding: 1.6rem;" [data_cards]="data_cards"></app-grid-card>
		</div>
	`,
})
export class ProductContentComponent {
	@Input() data_cards: DataCards[] = [];
}
