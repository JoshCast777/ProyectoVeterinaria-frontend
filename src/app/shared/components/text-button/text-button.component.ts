import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Button, TextButton } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-text-button",
	template: `
		<div class="container text-button" [class.background]="with_background">
			<app-title [text]="text_button.title" [with_background]="title_background"></app-title>

			<div>
				<p class="text">{{ text_button.text }}</p>

				<app-button [text]="text_button.button.text" (onRedirect)="redirect()"></app-button>
			</div>
		</div>
	`,
	styleUrls: ["./text-button.component.css"]
})
export class TextButtonComponent {
	private button: Button = {
		text: "",
		link: ""
	};
	@Input() text_button: TextButton = {
		title: "",
		text: "",
		button: this.button
	};
	@Input() with_background: boolean = true;
	@Input() title_background: boolean = true;

	constructor(private router: Router) {}

	redirect(): void {
		this.router.navigate([this.text_button.button.link]);
	}
}
