import { Component } from "@angular/core";
import { NavItem } from "./interfaces/app.intefaces";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
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
}
