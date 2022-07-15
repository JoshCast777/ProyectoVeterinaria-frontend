import { Component, Input } from "@angular/core";
import { DataCards } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-services-content",
	template: `
		<div class="container">
			<app-title class="title" [text]="title"></app-title>

			<app-grid-card [data_cards]="data_cards"></app-grid-card>
		</div>
	`,
	styleUrls: ["./services-content.component.css"]
})
export class ServicesContentComponent {
	@Input() data_cards: DataCards[] = [];
	@Input() title: string = "";
}
