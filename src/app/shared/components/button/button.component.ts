import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-button",
	template: `
		<button [type]="submit ? 'submit' : 'button'" [disabled]="disabled" [class]="'text ' + type" mat-raised-button (click)="handleRedirect()" (click)="handleClick()">{{ text }}</button>
	`,
	styleUrls: ["./button.component.css"]
})
export class ButtonComponent {
	@Input() text: string = "";
	@Input() submit: boolean = false;
	@Input() type: string = "primary";
	@Input() disabled: boolean = false;
	@Output() onClick: EventEmitter<void> = new EventEmitter();
	@Output() onRedirect: EventEmitter<void> = new EventEmitter();

	handleClick(): void {
		this.onClick.emit();
	}

	handleRedirect(): void {
		this.onRedirect.emit();
	}
}
