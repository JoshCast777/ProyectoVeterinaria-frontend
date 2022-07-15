export interface NavItem {
	name: string;
	path: string;
}

export interface Image {
	name: string;
	ext?: string;
}

export interface DataCards {
	avatar?: Image;
	title: string;
	subtitle?: string;
	icon?: string;
	img: Image;
	text?: string;
	buttons?: [string, string];
}

export interface TextButton {
	title: string;
	text: string;
	button: Button;
}

export interface Button {
	text: string;
	link: string;
}
export interface Auth{
	email: string;
	password: string;
}

export interface User {
	user_id?: number;
	dni: string;
	name: string;
	last_name: string;
	date_birth: Date;
	phone: string;
	address: string;
	email: string;
	password: string;
}
