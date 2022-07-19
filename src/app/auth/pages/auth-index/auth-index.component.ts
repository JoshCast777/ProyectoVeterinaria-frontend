import { Component } from "@angular/core";

@Component({
	selector: "app-auth-index",
	templateUrl: "./auth-index.component.html",
	styleUrls: ["./auth-index.component.css"]
})
export class AuthIndexComponent {
	toggle: boolean = true;

	switch(): void {
		this.toggle = !this.toggle;
	}
}
