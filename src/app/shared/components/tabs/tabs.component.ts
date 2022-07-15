import { Component, Input } from "@angular/core";
import { DataCards } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-tabs",
	templateUrl: "./tabs.component.html",
	styleUrls: ["./tabs.component.css"]
})
export class TabsComponent {
	@Input() data_cards: DataCards[] = [];
}
