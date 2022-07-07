import { Component, Input } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import { NavItem } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
	@Input() drawer!: MatDrawer;
	@Input() nav_items: NavItem[] = [];

	toggle(): void {
		this.drawer.toggle();
	}
}
