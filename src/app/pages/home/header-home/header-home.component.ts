import { Component } from "@angular/core";
import { TextButton } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-header-home",
	template: `
		<header>
			<h1>Bienvenidos a la Clínica Veterinaria</h1>
			<h2>Ofrecemos los mejores servicios para tu mascota, reserva una cita hoy</h2>
		</header>

		<div>
			<app-text-button [text_button]="text_button" [title_background]="false"></app-text-button>
		</div>
	`,
	styleUrls: ["./header-home.component.css"]
})
export class HeaderHomeComponent {
	text_button: TextButton = {
		title: "Calidad y Experiencia",
		text: "Somos una clínica veterinaria que se dedica a la prestación de un servicio integral en los ámbitos de los cuidados clínicos veterinarios y asesoramiento.",
		button: {
			text: "Servicios",
			link: "/services"
		}
	};
}
