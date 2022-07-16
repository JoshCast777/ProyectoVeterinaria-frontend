import { Component } from "@angular/core";

@Component({
	selector: "app-login-index",
	templateUrl: "./login-index.component.html",
	styleUrls: ["./login-index.component.css"]
})
export class LoginIndexComponent {
	toggle: boolean = true;

	constructor() { }
	login: boolean = false;
	text: string = "Cree una cuenta gratis";
	ingresar() {
		this.text = this.login ? "Cree una cuenta gratis" : "¿ya tiene una cuenta?";
		this.login = !this.login;
	}

	switch(): void {
		this.toggle = !this.toggle;
	}
}
