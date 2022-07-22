import { Component } from "@angular/core";
import { DataCards } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-shop-explorar",
	templateUrl: "./shop-explorar.component.html",
    styleUrls: ["./shop-explorar.component.css"],
	styles: []
})


export class ShopExplorarComponent {

	data_cards_medicamentos: DataCards[] = [
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
			title: "Tabletas",
			subtitle: "$1",
			icon: "favorite_border",
			img: { name: "img1" },
			buttons: ["Ver", "Agregar"]
		},
		{
			avatar: { name: "img1" },
			title: "Inyecciones",
			subtitle: "$6",
			icon: "favorite_border",
			img: { name: "img1" },
			buttons: ["Ver", "Agregar"]
		},
		{
			avatar: { name: "img1" },
			title: "Talco",
			subtitle: "$41",
			icon: "favorite_border",
			img: { name: "img1" },
			buttons: ["Ver", "Agregar"]
		}
	];

	data_cards_comida: DataCards[] = [
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
			title: "Comida dog",
			subtitle: "$1",
			icon: "favorite_border",
			img: { name: "img1" },
			buttons: ["Ver", "Agregar"]
		},
		{
			avatar: { name: "img1" },
			title: "Procan",
			subtitle: "$41",
			icon: "favorite_border",
			img: { name: "img1" },
			buttons: ["Ver", "Agregar"]
		}
	];

	data_cards_articulos: DataCards[] = [
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
		},
		{
			avatar: { name: "img1" },
			title: "Collar verde",
			subtitle: "$1",
			icon: "favorite_border",
			img: { name: "img1" },
			buttons: ["Ver", "Agregar"]
		},
		{
			avatar: { name: "img1" },
			title: "Collar morado",
			subtitle: "$6",
			icon: "favorite_border",
			img: { name: "img1" },
			buttons: ["Ver", "Agregar"]
		},
		{
			avatar: { name: "img1" },
			title: "Collar rojo",
			subtitle: "$21",
			icon: "favorite_border",
			img: { name: "img1" },
			buttons: ["Ver", "Agregar"]
		},
		{
			avatar: { name: "img1" },
			title: "Collar amarillo",
			subtitle: "$41",
			icon: "favorite_border",
			img: { name: "img1" },
			buttons: ["Ver", "Agregar"]
		}
	];
}
