import { Component, Input } from "@angular/core";

@Component({
	selector: "app-title",
	template: ` <h2 [class.background]="with_background">{{ text | uppercase }}</h2> `,
	styleUrls: ["./title.component.css"]
})
export class TitleComponent {
	@Input() text: string = "";
	@Input() with_background: boolean = true;
}
