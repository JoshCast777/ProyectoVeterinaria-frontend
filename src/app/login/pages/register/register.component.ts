import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { LoginIndexComponent } from "../login-index/login-index.component";

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
	section_form: number = 1;

	form: FormGroup;
	constructor(private dialogRef: MatDialogRef<LoginIndexComponent>, private fb: FormBuilder) {
		this.form = this.fb.group({
			usuario: ["", Validators.required],
			email: ["", Validators.required],
			fechaNac: ["", Validators.required],
			telefono: ["", Validators.required],
			password: ["", Validators.required],
			terminos: ["", Validators.required]
		});
	}

	ngOnInit(): void {}

	next(): void {
		if (this.section_form >= 1 && this.section_form < 3) this.section_form++;
	}
	
	back(): void {
		if (this.section_form <= 3 && this.section_form > 0) this.section_form--;
	}

	logUp(): void {
		this.dialogRef.close();
	}

	cancel(): void {
		this.dialogRef.close();
	}
}
