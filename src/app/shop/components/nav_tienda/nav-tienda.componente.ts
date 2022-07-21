import { Component } from "@angular/core";
import { Button } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-nav-tienda-content",
	templateUrl: "./nav-tienda.component.html",
    styleUrls: ["./nav-tienda.component.css"],
	styles: []
})

export class NavTiendaContentComponent {
	opcnav : Button[] =[{
		text: "Explorar",
		link: "/store"
	},
	{
		text: "Carrito",
		link: "/store/carrito"
	},
	{
		text: "Favoritos",
		link: "/store/favoritos"
	}
	];
}