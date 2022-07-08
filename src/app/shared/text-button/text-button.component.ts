import { Component, Input } from "@angular/core";
import { TextButton } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-text-button",
	template: `
		<div class="container">
			<h2>Agenda una cita</h2>
			<div class="text-button">
				<p>{{ text_button.text }}</p>
				<app-button [text]="text_button.button"></app-button>
			</div>
		</div>
	`,
	styleUrls: ["./text-button.component.css"]
})
export class TextButtonComponent {
	@Input() text_button: TextButton = {
		text: "",
		button: ""
	}
}
