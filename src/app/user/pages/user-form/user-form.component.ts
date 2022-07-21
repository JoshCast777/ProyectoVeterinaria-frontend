import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/auth/auth.service";
import { User } from "src/app/interfaces/app.intefaces";
import { SweetAlertService } from "src/app/shared/services/sweet-alert.service";
import { UserService } from "../../user.service";

@Component({
	selector: "app-user-form",
	templateUrl: "./user-form.component.html",
	styleUrls: ["./user-form.component.css"]
})
export class UserFormComponent implements OnInit {
	max_date: Date;
	min_date: Date;
	hide: boolean = true;
	user!: User | undefined;
	my_form: FormGroup = this.form_builder.group({
		id: ["", Validators.required],
		dni: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
		name: ["", [Validators.required, Validators.minLength(3)]],
		last_name: ["", [Validators.required, Validators.minLength(3)]],
		date_birth: [""],
		phone: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
		address: ["", [Validators.required, Validators.minLength(15)]],
		email: ["", [Validators.required, Validators.email]],
		password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
	});

	constructor(private form_builder: FormBuilder, private user_service: UserService, private swal: SweetAlertService, private auth_service: AuthService) {
		const cd: Date = new Date();

		this.max_date = new Date(cd.getFullYear() - 18, cd.getMonth(), cd.getDate(), cd.getHours(), cd.getMinutes(), cd.getSeconds(), cd.getMilliseconds());
		this.min_date = new Date(cd.getFullYear() - 100, cd.getMonth(), cd.getDate(), cd.getHours(), cd.getMinutes(), cd.getSeconds(), cd.getMilliseconds());
	}

	ngOnInit() {
		const user = this.auth_service.verifyAuthenticated();

		this.my_form.disable();

		if (!user) {
			this.user = undefined;
			return;
		}

		this.user = user;
		this.my_form.setValue({
			id: this.user.id,
			dni: this.user.dni,
			name: this.user.name,
			last_name: this.user.last_name,
			date_birth: this.user.date_birth,
			phone: this.user.phone,
			address: this.user.address,
			email: this.user.email,
			password: this.user.password
		});
	}

	editEnable(): void {
		this.my_form.enable();
		this.my_form.controls["date_birth"].disable();
	}

	edit(): void {
		const form = { ...this.my_form.value };

		this.user!.id = form.id;
		this.user!.dni = form.dni;
		this.user!.name = form.name;
		this.user!.last_name = form.last_name;
		this.user!.phone = form.phone;
		this.user!.address = form.address;
		this.user!.email = form.email;
		this.user!.password = form.password;

		this.user_service.edit(this.user!);

		this.swal.success("Actualizado con éxito");

		this.ngOnInit();
	}

	cancel(): void {
		this.my_form.disable();
		this.my_form.reset({
			id: this.user?.id,
			dni: this.user?.dni,
			name: this.user?.name,
			last_name: this.user?.last_name,
			date_birth: this.user?.date_birth,
			phone: this.user?.phone,
			address: this.user?.address,
			email: this.user?.email,
			password: this.user?.password
		});
	}
}
