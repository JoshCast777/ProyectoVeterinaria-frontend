import { Component, EventEmitter, Output} from "@angular/core";

@Component({
	selector: "app-button-contador-component",
	styleUrls: ["./button-contador.component.css"],
    template: `
    <div class="container-contador">
    <button class="button contenido-contador" (click)="stepper(false)">-</button>
    <input [(ngModel)]="cantidad"  class="contenido-contador" type="text" maxlength="3" value="1" class="inputP">
    <button class="button contenido-contador" (click)="stepper(true)">+</button>
    </div>
`,
	styles: []
})


export class ContadorComponent {
    @Output() onStepper = new EventEmitter<number>();

 cantidad : number =1;
	stepper(accion:boolean){

		this.cantidad = accion ? ++this.cantidad:--this.cantidad;
        this.onStepper.emit(this.cantidad);
	}
}
