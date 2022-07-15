import { Component, Input } from "@angular/core";
import { DataCards } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-accordion",
	templateUrl: "./accordion.component.html",
	styles: [
		`
			img {
				width: 100%;
				height: 20rem;
				object-fit: cover;
			}
		`
	]
})
export class AccordionComponent {
	toggle_number: number = 0;
	@Input() data_cards!: DataCards[];

	toggleNumber(i: number): void {
		this.toggle_number = i;
	}
}
