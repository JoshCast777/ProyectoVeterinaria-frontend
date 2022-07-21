import { Injectable } from "@angular/core";
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
			date_birth: new Date("2004-04-23T18:25:43.511Z"),
			phone: "1234567890",
			address: "Alguna dirección",
			email: "admin@admin.com",
			password: "12345678",
			created_at: new Date("2022-04-23T18:25:43.511Z"),
			updated_at: new Date("2022-04-23T18:25:43.511Z"),
			status: "A"
		}
	];

	getUser(auth: Auth): string {
		let authenticated: string = "";
		this.users.forEach((user: User) => {
			if (user.email === auth.email && user.password === auth.password) authenticated = user.id.toString();
			else authenticated = "";
		});

		return authenticated;
	}

	getUserById(user_id: string): User {
		let user!: User;

		this.users.forEach((u: User) => {
			if (u.id.toString() === user_id) {
				user = u;
				return;
			}
		});

		return user;
	}

	create(user: User): void {
		user.id = this.users[this.users.length - 1].id + 1;
		user.created_at = new Date();
		user.updated_at = new Date();
		user.status = "A";
		this.users.push(user);
	}

	edit(edited_user: User): void {
		this.users.forEach((user: User) => {
			if (user.id === edited_user.id) {
				user.id = edited_user.id;
				user.dni = edited_user.dni;
				user.name = edited_user.name;
				user.last_name = edited_user.last_name;
				user.phone = edited_user.phone;
				user.address = edited_user.address;
				user.email = edited_user.email;
				user.password = edited_user.password;
				user.updated_at = new Date();
				return;
			}
		});
	}
}
