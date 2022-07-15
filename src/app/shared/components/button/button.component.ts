import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-button",
	template: ` <button [class]="'text ' + type" mat-flat-button (click)="handleRedirect()" (click)="handleClick()">{{ text }}</button> `,
	styleUrls: ["./button.component.css"]
})
export class ButtonComponent {
	@Input() text: string = "";
	@Input() type: string = "primary";
	@Output() onClick: EventEmitter<void> = new EventEmitter();
	@Output() onRedirect: EventEmitter<void> = new EventEmitter();

	handleClick(): void {
		this.onClick.emit();
	}

	handleRedirect(): void {
		this.onRedirect.emit();
	}
}
