import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-about",
	template: `
		<app-header-pages title="Nosotros"></app-header-pages>
		<app-header-about></app-header-about>
		<app-main-about></app-main-about>
		`,
	
	styleUrls: []
})
export class AboutComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
