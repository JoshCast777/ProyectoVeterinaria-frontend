import { Component, Input } from "@angular/core";
import { DataCards } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-grid-card",
	template: `
		<div>
			<app-card [class]="addCSS()" *ngFor="let card of data_cards" [card]="card"></app-card>
		</div>
	`,
	styleUrls: ["./grid-card.component.css"]
})
export class GridCardComponent {
	@Input() data_cards: DataCards[] = [];

	addCSS(): string {
		if (this.data_cards.length === 2) return "app-card-2";
		else if (this.data_cards.length === 3) return "app-card-3";
		else return "";
	}
}
