import { Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { CardCarrito } from "src/app/interfaces/app.intefaces";


@Component({
	selector: "app-shop-carrito",
	styleUrls: ["./shop-carrito.component.css"],
	templateUrl:"./shop-carrito.component.html",
	styles: []
})


export class ShopCarritoComponent implements OnInit{
 totalPagar: number =0;
 data_cards: CardCarrito[] = [
	{
		imagen:"d",
		nombreProducto: "Pelota",
		precio: 4,
		total:4,		
	},
	{
		imagen:"d",
		nombreProducto: "Collar azul",
		precio: 5,
		total:5,
	},
	{
		imagen:"d",
		nombreProducto: "Collar verde",
		precio: 8,
		total:5,
	},
	{
		imagen:"d",
		nombreProducto: "Collar morado",
		precio: 2,
		total:5,
	},
	{
		imagen:"d",
		nombreProducto: "Collar rojo",
		precio: 13,
		total:5,
	},
	{
		imagen:"d",
		nombreProducto: "Collar amarillo",
		precio: 9,
		total:5,
	},
	{
		imagen:"d",
		nombreProducto: "Collar rosa",
		precio: 8,
		total:5,
	},
	{
		imagen:"d",
		nombreProducto: "Collar negro",
		precio: 12,
		total:5,
	},
	{
		imagen:"d",
		nombreProducto: "Pastillas",
		precio: 6,
		total:6,
	}
];
 
  ngOnInit(){
	this.calcular();
  }
	calcular(): void {
		this.totalPagar = 0;
		for (let index = 0; index < this.data_cards.length; index++) {
			this.totalPagar = this.data_cards[index].total + this.totalPagar;
		}
	}
}