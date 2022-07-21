import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSidenav } from "@angular/material/sidenav";
import { NavItem } from "./interfaces/app.intefaces";
import { LoginIndexComponent } from "./login/pages/login-index/login-index.component";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
	title: string = "Veterinaria";
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

	@ViewChild("sidenav") sidenav!: MatSidenav;

	constructor(private dialog: MatDialog) {}
	ngOnInit(): void {
		
	}

	openDialog(): void {
		this.dialog.open(LoginIndexComponent);
		this.sidenav.toggle();
	}
}
