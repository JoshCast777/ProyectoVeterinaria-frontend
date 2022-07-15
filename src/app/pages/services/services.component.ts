import { Component } from "@angular/core";
import { DataCards, TextButton } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-services",
	template: `
		<app-header-pages title="Servicios"></app-header-pages>

		<app-services-content *ngFor="let data_card of data_cards; let index = index" [title]="titles[index]" [data_cards]="data_card"></app-services-content>

		<app-text-button [text_button]="text_button"></app-text-button>
	`,
	styles: []
})
export class ServicesComponent {
	titles: string[] = ["Ofrecemos", "Especialidades"];
	text_button: TextButton = {
		title: "Agendar cita",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum voluptatem dicta inventore ut! Molestiae tempora, nihil vel delectus, enim sapiente laboriosam.",
		button: {
			text: "Agendar cita",
			link: "/appintment"
		}
	};
	data_cards: DataCards[][] = [
		[
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
				img: "img4",
				title: "Consultas médicas",
				text: "Clínica Veterinaria Guayaquil cuenta con excelentes especialistas con herramientas y equipos de última generación, podemos diagnosticar y tratar las enfermedades de las mascotas con mayor precisión y rapidez."
			},
			{
				img: "img5",
				title: "Cirugías",
				text: "Uno de los principales tratamientos dentro de la salud veterinaria. Nuestro equipo de especialistas tiene la capacidad profesional así también como de su formación continua, lo que nos permite situarnos en la vanguardia de la cirugía veterinaria."
			}
		],
		[
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
			},
			{
				img: "img9",
				title: "Odontología",
				text: "La salud dental es muy importante, prevenir enfermedades dentales garantiza una correcta salud general y calidad de vida en los animales. Por eso, contamos con odontologos preparados para tratar estos problemas dentales, así como con la tecnología necesaria para estos tratamientos."
			},
			{
				img: "img10",
				title: "Traumatología",
				text: "Contamos con atención inmediata a problemas traumatológicos ocasionados por accidentes o peleas que las mascotas dan con otros animales. Aquí velaremos por la pronta recuperación de su mascota, con un trato delicado y amoros hacia ellos, así comomedicamente de primera."
			}
		]
	];
}
