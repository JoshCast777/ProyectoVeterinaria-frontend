import { Injectable } from "@angular/core";
import Swal, { SweetAlertResult } from "sweetalert2";

@Injectable({
	providedIn: "root"
})
export class SweetAlertService {
	swalAlert(tf: boolean, success_title: string = "¡Realizado con éxito!", error_title: string = "¡ERROR!", error_text: string = "Ocurrió un error al realizar la operación"): void {
		if (tf) this.success(success_title);
		else this.error(error_title, error_text);
	}

	swalWarning(title: string = "¿Está seguro?"): Promise<SweetAlertResult<boolean>> {
		return this.warning(title);
	}

	private warning(title: string): Promise<SweetAlertResult<boolean>> {
		return Swal.fire({
			icon: "warning",
			title: title,
			confirmButtonText: "Sí",
			showCancelButton: true,
			cancelButtonText: "No",
			reverseButtons: true
		});
	}

	private success(title: string = "¡Realizado con éxito!") {
		Swal.fire({
			icon: "success",
			title: title,
			showConfirmButton: false,
			timer: 2500
		});
	}

	private error(title: string, text: string) {
		Swal.fire({
			icon: "error",
			title: title,
			text: text
		});
	}
}
