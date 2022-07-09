import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-button",
	template: ` <button mat-flat-button [routerLink]="link" (click)="handleClick()">{{ text }}</button> `,
	styles: [
		`
			button {
				display: block;
				width: 100%;
				padding: 1rem;
				word-wrap: normal;
				background-color: var(--color-on);
				color: var(--white);
				font-size: 2rem;
				line-height: normal;
			}

			@media (min-width: 769px) {
				button {
					width: auto;
				}
			}
		`
	]
})
export class ButtonComponent {
	@Input() text: string = "";
	@Input() link: string = "";
	@Output() onClick: EventEmitter<void> = new EventEmitter();

	handleClick(): void {
		this.onClick.emit();
	}
}
