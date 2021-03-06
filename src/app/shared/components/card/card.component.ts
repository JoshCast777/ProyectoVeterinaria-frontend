import { Component, Input } from "@angular/core";
import { DataCards } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.css"]
})
export class CardComponent {
	@Input() card: DataCards = {
		img: {
			name: "",
			ext: "jpg"
		},
		avatar: {
			name: "",
			ext: "jpg"
		},
		title: "",
		subtitle: "",
		icon: "",
		text: "",
		buttons: ["", ""]
	};
}
