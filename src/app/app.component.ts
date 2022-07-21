import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSidenav } from "@angular/material/sidenav";
import { NavItem, User } from "./interfaces/app.intefaces";
import { AuthService } from "./auth/auth.service";
import { AuthIndexComponent } from "./auth/pages/auth-index/auth-index.component";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	@ViewChild("sidenav") sidenav!: MatSidenav;
	user!: User | undefined;
	size_display: string = "web";
	nav_items: NavItem[] = [
		{
			name: "Inicio",
			path: ""
		},
		{
			name: "Nosotros",
			path: "/about"
		},
		{
			name: "Servicios",
			path: "/services"
		},
		{
			name: "Blog",
			path: "/blog"
		},
		{
			name: "Tienda",
			path: "/store"
		}
	];


	constructor(private dialog: MatDialog, private auth_service: AuthService, private breakpoint_observer: BreakpointObserver) {
		this.breakpoint_observer.observe(["(min-width: 769px)"]).subscribe((state: BreakpointState): void => {
			if (state.matches) this.sidenav?.close();
		});
	}

	openDialog(toggle: boolean): void {
		if (toggle) this.sidenav.toggle();

		this.dialog.open(AuthIndexComponent, {
			panelClass: "mat-dialog"
		});
		this.dialog.afterAllClosed.subscribe(() => {
			const auth_user = this.auth_service.verifyAuthenticated();

			if (auth_user) this.user = auth_user;
		});
	}

	logout(toggle: boolean): void {
		if (toggle) this.sidenav.toggle();

		this.auth_service.logout();
		this.user = undefined;
	}
}
