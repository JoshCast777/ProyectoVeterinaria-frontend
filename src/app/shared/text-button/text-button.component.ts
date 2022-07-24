import { Component, Input } from "@angular/core";
import { TextButton } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-text-button",
	template: `
		<div class="container text-button">
			<div>
				<h2>Agenda una cita</h2>
				<p>{{ text_button.text }}</p>
			</div>
			<app-button [text]="text_button.button"></app-button>
		</div>
	`,
	styleUrls: ["./text-button.component.css"]
})
export class TextButtonComponent {
	@Input() text_button: TextButton = {
		text: "",
		button: ""
	};
}
