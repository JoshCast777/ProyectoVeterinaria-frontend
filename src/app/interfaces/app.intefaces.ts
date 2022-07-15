export interface NavItem {
	name: string;
	path: string;
}
export interface DataCards {
	img: string;
	title: string;
	text: string;
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
export interface UserLogin{
	email: string;
	password: string;

}
