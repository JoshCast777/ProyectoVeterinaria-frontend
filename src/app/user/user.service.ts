import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Auth, User } from "../interfaces/app.intefaces";

@Injectable({
	providedIn: "root"
})
export class UserService {
	users: User[] = [
		{
			id: 1,
			dni: "0987654321",
			name: "Admin",
			last_name: "del Admin",
			date_birth: new Date("2012-04-23T18:25:43.511Z"),
			phone: "1234567890",
			address: "Alguna dirección",
			email: "admin@admin.com",
			password: "12345678",
			created_at: new Date("2022-04-23T18:25:43.511Z"),
			updated_at: new Date("2022-04-23T18:25:43.511Z"),
			status: "A"
		}
	];

	getUser({ email, password }: Auth): User | undefined {
		let returned_value: User | undefined = undefined;
		this.users.forEach((user: User) => {
			if (user.email === email && user.password === password) returned_value = user;
		});

		return returned_value;
	}

	getUserById(id: string | null): User | undefined {
		let returned_value: User | undefined = undefined;

		this.users.forEach((user: User) => {
			if (user.id.toString() === id) returned_value = user;
		});

		return returned_value;
	}

	create(user: User): void {
		user.id = this.users[this.users.length - 1].id + 1;
		user.created_at = new Date();
		user.updated_at = new Date();
		user.status = "A";
		this.users.push(user);
	}
}
