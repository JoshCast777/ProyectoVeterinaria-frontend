import { Component, Input } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import { NavItem } from "src/app/interfaces/app.intefaces";
import {MatDialog} from '@angular/material/dialog';
import { LoginIndexComponent } from "src/app/login/pages/login-index/login-index.component";
@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
	@Input() drawer!: MatDrawer;
	@Input() nav_items: NavItem[] = [];

	constructor(private dialog:MatDialog) { }
	toggle(): void {
		this.drawer.toggle();
	}
	openDialogSesion(){
		this.dialog.open(LoginIndexComponent)
	}
}
