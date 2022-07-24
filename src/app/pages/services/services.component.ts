import { Component } from "@angular/core";
import { TextButton } from "src/app/interfaces/app.intefaces";

@Component({
	selector: "app-services",
	template: `
		<app-header-pages title="Servicios"></app-header-pages>

		<app-services-content *ngFor="let data_card of data_cards; let index = index" [title]="titles[index]" [data_card]="data_card"></app-services-content>

		<app-text-button [text_button]="text_button"></app-text-button>
	`,
	styles: []
})
export class ServicesComponent {
	titles: string[] = ["Ofrecemos", "Especialidades"];
	text_button: TextButton = {
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam ad deleniti animi officiis sit facilis magnam cupiditate quas assumenda aliquam unde debitis perspiciatis blanditiis, explicabo voluptatum consequuntur consequatur eveniet?",
		button: "Agendar cita"
	};
	data_cards = [
		[
			{
				img: "img1",
				title: "Hospitalización",
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum voluptatem dicta inventore ut! Molestiae tempora, nihil vel delectus, enim sapiente laboriosam reprehenderit ea, nam consequuntur voluptates nostrum earum odio optio."
			},
			{
				img: "img2",
				title: "Laboratorio clínico",
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum voluptatem dicta inventore ut! Molestiae tempora, nihil vel delectus, enim sapiente laboriosam reprehenderit ea, nam consequuntur voluptates nostrum earum odio optio."
			},
			{
				img: "img5",
				title: "Cirugías",
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum voluptatem dicta inventore ut! Molestiae tempora, nihil vel delectus, enim sapiente laboriosam reprehenderit ea, nam consequuntur voluptates nostrum earum odio optio."
			},
			{
				img: "img3",
				title: "Vacunación",
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum voluptatem dicta inventore ut! Molestiae tempora, nihil vel delectus, enim sapiente laboriosam reprehenderit ea, nam consequuntur voluptates nostrum earum odio optio. "
			},
			{
				img: "img4",
				title: "Consultas médicas",
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum voluptatem dicta inventore ut! Molestiae tempora, nihil vel delectus, enim sapiente laboriosam reprehenderit ea, nam consequuntur voluptates nostrum earum odio optio. "
			}
		],
		[
			{
				img: "img6",
				title: "Neuro-cirugías",
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum voluptatem dicta inventore ut! Molestiae tempora, nihil vel delectus, enim sapiente laboriosam reprehenderit ea, nam consequuntur voluptates nostrum earum odio optio."
			},
			{
				img: "img7",
				title: "Neurología",
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum voluptatem dicta inventore ut! Molestiae tempora, nihil vel delectus, enim sapiente laboriosam reprehenderit ea, nam consequuntur voluptates nostrum earum odio optio. "
			},
			{
				img: "img8",
				title: "Dermatología",
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum voluptatem dicta inventore ut! Molestiae tempora, nihil vel delectus, enim sapiente laboriosam reprehenderit ea, nam consequuntur voluptates nostrum earum odio optio."
			},
			{
				img: "img9",
				title: "Oncología",
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum voluptatem dicta inventore ut! Molestiae tempora, nihil vel delectus, enim sapiente laboriosam reprehenderit ea, nam consequuntur voluptates nostrum earum odio optio."
			},
			{
				img: "img10",
				title: "Traumatología",
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum voluptatem dicta inventore ut! Molestiae tempora, nihil vel delectus, enim sapiente laboriosam reprehenderit ea, nam consequuntur voluptates nostrum earum odio optio."
			}
		]
	];
}
