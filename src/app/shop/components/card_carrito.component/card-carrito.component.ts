import { Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { CardCarrito } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-card-carrito",
	styleUrls: ["./card-carrito.component.css"],
	templateUrl:"./card-carrito.component.html",
	styles: []
})


export class CardCarritoComponent implements OnInit{
    @Input() card: CardCarrito = {
		imagen:"",
		nombreProducto: "",
		precio: 0,
		total:0,
	};

      ngOnInit(){
	this.calcular(1);
    }

    @Output() onCambio = new EventEmitter<void>();
    
	calcular(cantidad:number): void{
		this.card.total= this.card.precio *cantidad;
	}

	comunicarCmabio(): void{
        this.onCambio.emit();
	}
}