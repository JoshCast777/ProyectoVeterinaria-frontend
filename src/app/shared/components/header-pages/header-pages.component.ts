import { Component, Input } from "@angular/core";

@Component({
	selector: "app-header-pages",
	template: `
		<div>
			<h1 class="container">{{ title }}</h1>
		</div>
	`,
	styleUrls: ["./header-pages.component.css"]
})
export class HeaderPagesComponent {
	@Input() title: string = "";
}
