import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
import { SweetAlertService } from "src/app/shared/services/sweet-alert.service";

@Injectable({
	providedIn: "root"
})
export class AuthGuard implements CanActivate, CanLoad {
	constructor(private auth_service: AuthService, private router: Router, private swal: SweetAlertService) {}

	canActivate(): Observable<boolean> | Promise<boolean> | boolean {
		const can_active = this.auth_service.verifyAuthenticated();

		if (can_active) return true;
		else {
			this.swal.error("Debe iniciar sesión");
			this.router.navigate(["/"]);
			return false;
		}
	}

	canLoad(): Observable<boolean> | Promise<boolean> | boolean {
		const can_load = this.auth_service.verifyAuthenticated();

		if (can_load) return true;
		else {
			this.swal.error("Debe iniciar sesión");
			this.router.navigate(["/"]);
			return false;
		}
	}
}
