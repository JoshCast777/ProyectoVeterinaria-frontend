import { Component } from "@angular/core";
import { DataCards } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-shop-favoritos",
	templateUrl:"./shop-favoritos.component.html",
	styleUrls: ["./shop-favoritos.component.css"],
	styles: []
})

export class ShopFavoritosComponent {
	data_cards: DataCards[] = [
		{
			avatar: { name: "img1" },
			title: "Pastillas",
			subtitle: "$7",
			icon: "favorite_border",
			img: { name: "img1" },
			buttons: ["Ver", "Agregar"]
		},
		{
			avatar: { name: "img1" },
			title: "Jarabe",
			subtitle: "$8",
			icon: "favorite_border",
			img: { name: "img1" },
			buttons: ["Ver", "Agregar"]
		},
		{
			avatar: { name: "img1" },
			title: "Pepas felices",
			subtitle: "$7",
			icon: "favorite_border",
			img: { name: "img1" },
			buttons: ["Ver", "Agregar"]
		},
		{
			avatar: { name: "img1" },
			title: "Dog shadow",
			subtitle: "$8",
			icon: "favorite_border",
			img: { name: "img1" },
			buttons: ["Ver", "Agregar"]
		},
		{
			avatar: { name: "img1" },
			title: "Pelota",
			subtitle: "$7",
			icon: "favorite_border",
			img: { name: "img1" },
			buttons: ["Ver", "Agregar"]
		},
		{
			avatar: { name: "img1" },
			title: "Collar azul",
			subtitle: "$8",
			icon: "favorite_border",
			img: { name: "img1" },
			buttons: ["Ver", "Agregar"]
		}
	];
}
