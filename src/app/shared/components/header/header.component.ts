import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NavItem, User } from "src/app/interfaces/app.intefaces";
@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
	@Input() nav_items: NavItem[] = [];
	@Input() user!: User | undefined;
	@Output() onToggle = new EventEmitter<void>();
	@Output() openDialog = new EventEmitter<boolean>();
	@Output() onLogout = new EventEmitter<boolean>();

	toggle(): void {
		this.onToggle.emit();
	}

	dialog(): void {
		this.openDialog.emit(false);
	}

	logout(): void {
		this.onLogout.emit(false);
	}
}
