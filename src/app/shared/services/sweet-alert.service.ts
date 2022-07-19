import { Injectable } from "@angular/core";
import Swal, { SweetAlertResult } from "sweetalert2";

@Injectable({
	providedIn: "root"
})
export class SweetAlertService {
	warning(text: string): Promise<SweetAlertResult<boolean>> {
		return Swal.fire({
			icon: "warning",
			title: text,
			confirmButtonText: "Sí",
			showCancelButton: true,
			cancelButtonText: "No",
			reverseButtons: true
		});
	}

	success(text: string = "¡Realizado con éxito!") {
		Swal.fire({
			icon: "success",
			title: text,
			showConfirmButton: false,
			timer: 2500
		});
	}

	error(text: string = "¡Ocurrió un error!") {
		Swal.fire({
			icon: "error",
			title: text
		});
	}
}
