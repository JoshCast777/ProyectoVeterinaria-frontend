import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { MatDialogRef } from "@angular/material/dialog";

import { Auth } from "src/app/interfaces/app.intefaces";

import { AuthService } from "../../auth.service";
import { SweetAlertService } from "src/app/shared/services/sweet-alert.service";

import { AuthIndexComponent } from "../auth-index/auth-index.component";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"]
})
export class LoginComponent {
	hide: boolean = true;
	auth!: Auth;
	my_form: FormGroup = this.form_builder.group({
		email: ["", Validators.email],
		password: ["", [Validators.minLength(8), Validators.maxLength(16)]]
	});

	constructor(private form_builder: FormBuilder, private dialogRef: MatDialogRef<AuthIndexComponent>, private auth_service: AuthService, private swal: SweetAlertService) {}

	login(): void {
		this.auth = { ...this.my_form.value };

		const authenticated: boolean = this.auth_service.login(this.auth);

		if (authenticated) {
			this.my_form.reset();
			this.dialogRef.close();
		} else {
			this.my_form.reset();
			this.swal.error("Credenciales incorrectas");
		}
	}

	cancel(): void {
		this.my_form.reset();
		this.dialogRef.close();
	}
}
