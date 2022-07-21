import { Component } from "@angular/core";

@Component({
	selector: "app-logo",
	template: `
		<div class="img">
			<img src="{{ 'logo' | image: 'png' }}" alt="Logo" />
			<p class="title">{{ "Veterinaria" | uppercase }}</p>
		</div>
	`,
	styleUrls: ["./logo.component.css"]
})
export class LogoComponent {}
