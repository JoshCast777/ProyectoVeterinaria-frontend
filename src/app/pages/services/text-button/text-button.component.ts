import { Component } from "@angular/core";

@Component({
	selector: "app-text-button",
	template: `
		<div class="container">
			<h2>Agenda una cita</h2>

			<div class="text-button">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam ad deleniti animi officiis sit facilis magnam cupiditate quas assumenda aliquam unde debitis perspiciatis blanditiis, explicabo voluptatum consequuntur consequatur eveniet?</p>

				<button mat-flat-button>Agendar cita</button>
			</div>
		</div>
	`,
	styleUrls: ["./text-button.component.css"]
})
export class TextButtonComponent {}
