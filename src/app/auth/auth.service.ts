import { Injectable } from "@angular/core";
import { Auth, User } from "../interfaces/app.intefaces";
import { UserService } from "../user/user.service";

@Injectable({
	providedIn: "root"
})
export class AuthService {
	user!: User | undefined;

	constructor(private user_service: UserService) {}

	verifyAuthenticated() {
		return this.user ? this.user : undefined;
	}

	login(auth: Auth): boolean {
		const user: User | undefined = this.user_service.getUser(auth);

		if (user) {
			this.user = user;
			return true;
		} else return false;
	}

	logout(): void {
		this.user = undefined;
	}
}
