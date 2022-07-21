import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { NavItem, User } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-user-index",
	templateUrl: "./user-index.component.html",
	styleUrls: ["./user-index.component.css"]
})
export class UserIndexComponent implements OnInit {
	user!: User;
	nav_items: NavItem[] = [
		{
			name: "Personal",
			path: "/user"
		},
		{
			name: "Mascotas",
			path: "/user/pets"
		},
		{
			name: "Citas",
			path: "/user/appointmets"
		}
	];

	constructor(private auth_service: AuthService) {
		const auth_user = this.auth_service.verifyAuthenticated();

		if (auth_user) this.user = auth_user;
	}

	ngOnInit(): void {}
}
