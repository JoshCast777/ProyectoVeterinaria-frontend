import { Injectable } from "@angular/core";
import { Auth, User } from "../interfaces/app.intefaces";
import { UserService } from "../user/user.service";

@Injectable({
	providedIn: "root"
})
export class AuthService {
	authenticated_user_id: string = "";

	constructor(private user_service: UserService) {}

	verifyAuthenticated(): User | undefined {
		if (this.authenticated_user_id === "") return undefined;

		const user = this.user_service.getUserById(this.authenticated_user_id);

		if (user) return user;
		else return undefined;
	}

	login(auth: Auth): boolean {
		const user_id: string = this.user_service.getUser(auth);

		if (user_id !== "") {
			this.authenticated_user_id = user_id;
			return true;
		} else return false;
	}

	logout(): void {
		this.authenticated_user_id = "";
		console.log("this.authenticated_user_id:", this.authenticated_user_id);
	}
}
