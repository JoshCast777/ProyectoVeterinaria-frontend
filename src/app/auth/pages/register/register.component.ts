import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { Auth, User } from "src/app/interfaces/app.intefaces";

import { SweetAlertService } from "src/app/shared/services/sweet-alert.service";
import { UserService } from "src/app/user/user.service";
import { AuthService } from "../../auth.service";

import { AuthIndexComponent } from "../auth-index/auth-index.component";

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
	hide: boolean = true;
	section_form: number = 1;
	user!: User;
	max_date!: Date;
	min_date!: Date;
	my_form: FormGroup = this.form_builder.group({
		dni: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
		name: ["", [Validators.required, Validators.minLength(3)]],
		last_name: ["", [Validators.required, Validators.minLength(3)]],
		date_birth: ["", [Validators.required]],
		phone: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
		address: ["", [Validators.required, Validators.minLength(15)]],
		email: ["", [Validators.required, Validators.email]],
		password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
		confirm_password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
	});
	error: string = "Campo obligatorio";

	constructor(private dialogRef: MatDialogRef<AuthIndexComponent>, private form_builder: FormBuilder, private auth_service: AuthService, private user_service: UserService, private snack_bar: MatSnackBar, private swal: SweetAlertService) {
		const cd: Date = new Date();

		this.max_date = new Date(cd.getFullYear() - 18, cd.getMonth(), cd.getDate(), cd.getHours(), cd.getMinutes(), cd.getSeconds(), cd.getMilliseconds());
		this.min_date = new Date(cd.getFullYear() - 100, cd.getMonth(), cd.getDate(), cd.getHours(), cd.getMinutes(), cd.getSeconds(), cd.getMilliseconds());
	}

	next(): void {
		if (this.section_form >= 1 && this.section_form < 3) this.section_form++;
	}

	back(): void {
		if (this.section_form <= 3 && this.section_form > 0) this.section_form--;
	}

	logup(): void {
		if (this.my_form.value.password !== this.my_form.value.confirm_password) {
			this.snack_bar.open("Contraseñas no coinciden", "OK", {
				duration: 5000
			});
			return;
		}

		const form = { ...this.my_form.value };

		this.user = form;

		const auth: Auth = {
			email: this.user.email,
			password: this.user.password
		};

		delete form.confirm_password;

		this.user_service.create(this.user);

		this.dialogRef.close();

		this.auth_service.login(auth);

		this.swal.success("Registrado con éxito");
	}

	cancel(): void {
		this.dialogRef.close();
	}
}
