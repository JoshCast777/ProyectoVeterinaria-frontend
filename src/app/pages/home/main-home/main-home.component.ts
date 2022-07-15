import { Component } from "@angular/core";
import { DataCards } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-main-home",
	templateUrl: "./main-home.component.html",
	styleUrls: ["./main-home.component.css"]
})
export class MainHomeComponent {
	data_cards: DataCards[] = [
		{
			img: "img1",
			title: "Hospitalización",
			text: "Muchos tratamientos requieren supervización constante día y noche, nuestro consultorio dispone de hospitalización para aquellas mascotas que lo requiran, siendo atendidos por profesionales las 24 horas. Sus mascotas estarán en buenas manos."
		},
		{
			img: "img2",
			title: "Laboratorio clínico",
			text: "Un laboratorio clínico en nuestras instalaciones equipoado con profesionales y equipo capacitado para estudiar aquellos elementos que causan malestares en la mascotas y brindar un diagnóstico profesional y preciso, así como una pronta atención."
		},
		{
			img: "img3",
			title: "Vacunación",
			text: "Para consultar nuestros servicios puede contactarnos enviando un correo o vía telefónica. Se aplican a partir de las 12 semanas de edad. Revacunación anual de séxtuple y rabia."
		},
		{
			img: "img6",
			title: "Medicina Felina",
			text: "La atención a gatos representa un reto para cualquier veterinario debido a su comportamiento que requiere paciencia y pericia. Es por eso contamos con expertos veterinarios dedicados a los gatos y las instalaciones adecuadas para tratarlos."
		},
		{
			img: "img7",
			title: "Neurología",
			text: "Contamos con profesionales especializados en Neurología y Neurocirugía, así también disponemos del equipo necesario para diagnosticar y tratar de forma oportuna los problemas neurológicos de sus mascotas."
		},
		{
			img: "img8",
			title: "Dermatología",
			text: "Las mascotas son muy propensas a tener enfermedades dermatológicas, debido a su constante contacto con el suelo, tierra o demás materiales. Por esta razón, no hemos capacitado para detectar y tratar las diferentes enfermedades que pueden llegar a la piel y afectarlos."
		}
	];
}
