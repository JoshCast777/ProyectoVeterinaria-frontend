import { Component, Input } from "@angular/core";

@Component({
	selector: "app-header-pages",
	template: `
		<div>
			<h2 class="container">{{ title }}</h2>
		</div>
	`,
	styleUrls: ["./header-pages.component.css"]
})
export class HeaderPagesComponent {
	@Input() title: string = "";
}
