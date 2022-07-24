import { Component, Input } from "@angular/core";
import { DataCards } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-services-content",
	template: `
		<div class="container">
			<h2>{{ title }}</h2>

			<div class="cards">
				<app-card *ngFor="let card of data_card" [card]="card"></app-card>
			</div>
		</div>
	`,
	styleUrls: ["./services-content.component.css"]
})
export class ServicesContentComponent {
	@Input() data_card: DataCards[] = [];
	@Input() title: string = "";
}
